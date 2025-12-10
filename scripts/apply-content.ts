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

function replaceTextInFile(
  filePath: string,
  oldText: string,
  newText: string,
  line: number
): boolean {
  try {
    let content = fs.readFileSync(filePath, "utf-8");
    const lines = content.split("\n");

    // Try to find and replace on the specific line first
    if (lines[line - 1] && lines[line - 1].includes(oldText)) {
      lines[line - 1] = lines[line - 1].replace(oldText, newText);
      fs.writeFileSync(filePath, lines.join("\n"));
      return true;
    }

    // Fallback: search the entire file
    const oldTextEscaped = escapeRegex(oldText);
    const regex = new RegExp(oldTextEscaped, "g");

    if (content.includes(oldText)) {
      content = content.replace(regex, newText);
      fs.writeFileSync(filePath, content);
      return true;
    }

    console.warn(
      `⚠️  Could not find text in ${path.basename(filePath)} at line ${line}`
    );
    return false;
  } catch (error: any) {
    console.error(`Error updating ${filePath}:`, error.message);
    return false;
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

    totalUpdates++;

    const oldText = original.text;
    const { file, line } = original._meta;

    if (oldText === newText) {
      skippedUpdates++;
      return;
    }

    console.log(`\n📝 ${key}`);
    console.log(`   Old: "${oldText.substring(0, 60)}${oldText.length > 60 ? "..." : ""}"`);
    console.log(`   New: "${newText.substring(0, 60)}${newText.length > 60 ? "..." : ""}"`);

    const success = replaceTextInFile(file, oldText, newText, line);
    if (success) {
      console.log(`   ✅ Updated`);
      successfulUpdates++;
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
