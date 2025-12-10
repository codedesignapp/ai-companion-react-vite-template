import * as fs from "fs";
import * as path from "path";

interface ContentItem {
  text: string;
  _meta: {
    file: string;
    line: number;
    column: number;
  };
}

interface ContentMap {
  [key: string]: ContentItem;
}

interface UpdatedContent {
  [key: string]: string;
}

const CONTENT_FILE = path.join(process.cwd(), "content.json");
const UPDATED_CONTENT_FILE = path.join(process.cwd(), "content-updated.json");

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Sanitize text to prevent TypeScript syntax errors from special characters
function sanitizeText(text: string): string {
  return text
    // Replace curly apostrophes with straight ones
    .replace(/[\u2018\u2019\u201A\u201B]/g, "'")
    // Replace curly double quotes with straight ones
    .replace(/[\u201C\u201D\u201E\u201F]/g, '"')
    // Replace en-dash and em-dash with regular hyphen
    .replace(/[\u2013\u2014]/g, "-")
    // Replace ellipsis character with three dots
    .replace(/\u2026/g, "...")
    // Replace non-breaking space with regular space
    .replace(/\u00A0/g, " ");
}

function replaceTextInFile(
  filePath: string,
  oldText: string,
  newText: string,
  line: number
): "updated" | "already" | "failed" {
  try {
    let content = fs.readFileSync(filePath, "utf-8");
    const lines = content.split("\n");

    // Helper to escape apostrophes if the string is single-quoted
    const escapeForQuoteType = (text: string, contextLine: string): string => {
      // Check if the old text is within single quotes
      const singleQuotePattern = `'${escapeRegex(oldText)}'`;
      const doubleQuotePattern = `"${escapeRegex(oldText)}"`;

      if (new RegExp(singleQuotePattern).test(contextLine)) {
        // Single-quoted string: escape apostrophes with backslash
        return text.replace(/'/g, "\\'");
      }
      // Double-quoted strings don't need apostrophe escaping
      return text;
    };

    // Try to find and replace on the specific line first
    if (lines[line - 1] && lines[line - 1].includes(oldText)) {
      const escapedNewText = escapeForQuoteType(newText, lines[line - 1]);
      lines[line - 1] = lines[line - 1].replace(oldText, escapedNewText);
      fs.writeFileSync(filePath, lines.join("\n"));
      return "updated";
    }

    // Fallback: search the entire file line by line
    let found = false;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes(oldText)) {
        const escapedNewText = escapeForQuoteType(newText, lines[i]);
        lines[i] = lines[i].replace(oldText, escapedNewText);
        found = true;
        break; // Only replace first occurrence
      }
    }

    if (found) {
      fs.writeFileSync(filePath, lines.join("\n"));
      return "updated";
    }

    // Check if the new text already exists (for shared components)
    if (content.includes(newText)) {
      return "already";
    }

    console.warn(
      `⚠️  Could not find text in ${path.basename(filePath)} at line ${line}`
    );
    return "failed";
  } catch (error: any) {
    console.error(`Error updating ${filePath}:`, error.message);
    return "failed";
  }
}

function applyUpdates(
  originalContent: ContentMap,
  updatedContent: UpdatedContent
): void {
  let totalUpdates = 0;
  let successfulUpdates = 0;
  let skippedUpdates = 0;

  Object.entries(updatedContent).forEach(([key, newText]) => {
    const original = originalContent[key];

    if (!original) {
      console.warn(`⚠️  Unknown key in updated content: ${key}`);
      return;
    }

    // Skip null or undefined values from AI output
    if (newText === null || newText === undefined) {
      console.warn(`⚠️  Skipping null value for: ${key}`);
      skippedUpdates++;
      return;
    }

    // Sanitize text to prevent syntax errors from curly quotes, etc.
    const sanitizedNewText = sanitizeText(String(newText));

    totalUpdates++;

    const oldText = original.text;
    const { file, line } = original._meta;

    // Skip if old text is also null/empty
    if (!oldText) {
      skippedUpdates++;
      return;
    }

    if (oldText === sanitizedNewText) {
      skippedUpdates++;
      return;
    }

    const oldDisplay = String(oldText).substring(0, 60);
    const newDisplay = sanitizedNewText.substring(0, 60);
    console.log(`\n📝 ${key}`);
    console.log(`   Old: "${oldDisplay}${oldText.length > 60 ? "..." : ""}"`);
    console.log(`   New: "${newDisplay}${sanitizedNewText.length > 60 ? "..." : ""}"`);

    const result = replaceTextInFile(file, oldText, sanitizedNewText, line);
    if (result === "updated") {
      console.log(`   ✅ Updated`);
      successfulUpdates++;
    } else if (result === "already") {
      console.log(`   ⏭️  Already applied (shared component)`);
      skippedUpdates++;
    } else {
      console.log(`   ❌ Failed`);
    }
  });

  console.log(`\n${"=".repeat(60)}`);
  console.log(`📊 Summary:`);
  console.log(`   Total items: ${totalUpdates}`);
  console.log(`   ✅ Updated: ${successfulUpdates}`);
  console.log(`   ⏭️  Skipped (no changes): ${skippedUpdates}`);
  console.log(`   ❌ Failed: ${totalUpdates - successfulUpdates - skippedUpdates}`);
}

function main() {
  console.log("🔄 Applying updated content to source files...\n");

  // Read original content with metadata
  if (!fs.existsSync(CONTENT_FILE)) {
    console.error(`❌ Original content file not found: ${CONTENT_FILE}`);
    console.error(`   Please run 'npm run extract-content' first.`);
    process.exit(1);
  }

  // Read updated content
  if (!fs.existsSync(UPDATED_CONTENT_FILE)) {
    console.error(`❌ Updated content file not found: ${UPDATED_CONTENT_FILE}`);
    console.error(`   Please save your AI-updated content as 'content-updated.json'`);
    process.exit(1);
  }

  const originalContent: ContentMap = JSON.parse(
    fs.readFileSync(CONTENT_FILE, "utf-8")
  );

  const updatedContent: UpdatedContent = JSON.parse(
    fs.readFileSync(UPDATED_CONTENT_FILE, "utf-8")
  );

  applyUpdates(originalContent, updatedContent);

  console.log(`\n✅ Content application complete!`);
}

main();
