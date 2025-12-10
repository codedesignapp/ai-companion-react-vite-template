import * as fs from "fs";
import * as path from "path";
import { parse } from "@babel/parser";
import traverseImport from "@babel/traverse";

// Handle default export for ESM
const traverse = (traverseImport as any).default || traverseImport;

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

const SRC_DIR = path.join(process.cwd(), "src");
const PAGES_DIR = path.join(SRC_DIR, "pages");
const BLOCKS_DIR = path.join(SRC_DIR, "blocks");
const OUTPUT_FILE = path.join(process.cwd(), "content.json");
const EDITABLE_FILE = path.join(process.cwd(), "content-editable.json");

function getJSXElementName(node: any): string {
  if (node.name) {
    if (node.name.type === "JSXIdentifier") {
      return node.name.name;
    }
  }
  return "unknown";
}

function isTextContent(value: string): boolean {
  return value.trim().length > 0 && !/^[\s\n\r]*$/.test(value);
}

function getSemanticName(elementType: string, index: number): string {
  // Map HTML element types to semantic names
  const semanticMap: Record<string, string> = {
    h1: "mainHeading",
    h2: "heading",
    h3: "subheading",
    h4: "title",
    h5: "subtitle",
    h6: "label",
    p: "paragraph",
    span: "text",
    button: "buttonText",
    a: "linkText",
    li: "listItem",
    label: "fieldLabel",
    input: "inputPlaceholder",
    textarea: "textareaPlaceholder",
  };

  const baseName = semanticMap[elementType.toLowerCase()] || elementType;
  return index === 0 ? baseName : `${baseName}_${index + 1}`;
}

function extractStringsFromObject(
  obj: any,
  arrayName: string,
  itemIndex: number,
  filePath: string,
  pageName: string,
  blockName: string,
  contentMap: ContentMap,
  prefix: string = ""
): void {
  if (!obj || !obj.properties) return;

  // Skip non-content properties
  const skipProps = [
    "icon",
    "image",
    "imageAlt",
    "imageSrc",
    "href",
    "src",
    "alt",
    "url",
    "link",
    "className",
    "style",
    "id",
    "key",
  ];

  obj.properties.forEach((prop: any) => {
    if (prop.type !== "ObjectProperty" || !prop.key) return;

    const propName = prop.key.name || prop.key.value;
    if (!propName) return;

    // Skip non-content properties
    if (skipProps.includes(propName)) return;

    const value = prop.value;

    // Handle string literals
    if (value.type === "StringLiteral" && isTextContent(value.value)) {
      const key = `${pageName}.${blockName}.${arrayName}.${itemIndex}.${prefix}${propName}`;
      contentMap[key] = {
        text: value.value,
        _meta: {
          file: filePath,
          line: value.loc?.start.line || 0,
          column: value.loc?.start.column || 0,
        },
      };
    }

    // Handle array of strings (like answers in FAQs)
    if (value.type === "ArrayExpression") {
      value.elements.forEach((element: any, elemIndex: number) => {
        if (element && element.type === "StringLiteral" && isTextContent(element.value)) {
          const key = `${pageName}.${blockName}.${arrayName}.${itemIndex}.${prefix}${propName}.${elemIndex}`;
          contentMap[key] = {
            text: element.value,
            _meta: {
              file: filePath,
              line: element.loc?.start.line || 0,
              column: element.loc?.start.column || 0,
            },
          };
        } else if (element && element.type === "ObjectExpression") {
          // Handle array of objects (like links in FAQs or features in pricing)
          extractStringsFromObject(
            element,
            arrayName,
            itemIndex,
            filePath,
            pageName,
            blockName,
            contentMap,
            `${prefix}${propName}.${elemIndex}.`
          );
        }
      });
    }
  });
}

function extractTextFromFile(
  filePath: string,
  pageName: string,
  blockName: string
): ContentMap {
  const content = fs.readFileSync(filePath, "utf-8");
  const contentMap: ContentMap = {};

  try {
    const ast = parse(content, {
      sourceType: "module",
      plugins: ["jsx", "typescript"],
    });

    const elementCounts: Record<string, number> = {};

    traverse(ast, {
      // Extract data from variable declarations (arrays of objects)
      VariableDeclarator(path: any) {
        const id = path.node.id;
        const init = path.node.init;

        // Check if this is an array assignment
        if (
          id &&
          id.type === "Identifier" &&
          init &&
          init.type === "ArrayExpression"
        ) {
          const arrayName = id.name;

          // Skip icon-only arrays or non-content arrays
          const skipArrays = ["icons", "images", "colors", "config"];
          if (skipArrays.some((skip) => arrayName.toLowerCase().includes(skip))) {
            return;
          }

          // Process each item in the array
          init.elements.forEach((element: any, index: number) => {
            if (element && element.type === "ObjectExpression") {
              extractStringsFromObject(
                element,
                arrayName,
                index,
                filePath,
                pageName,
                blockName,
                contentMap
              );
            }
          });
        }
      },

      JSXText(path: any) {
        const text = path.node.value.trim();
        if (isTextContent(text)) {
          // Find parent JSX element to get context
          let current = path.parentPath;
          let elementType = "text";

          while (current) {
            if (current.isJSXElement()) {
              elementType = getJSXElementName(current.node.openingElement);
              break;
            }
            current = current.parentPath;
          }

          const count = elementCounts[elementType] || 0;
          elementCounts[elementType] = count + 1;

          const semanticName = getSemanticName(elementType, count);
          const key = `${pageName}.${blockName}.${semanticName}`;

          contentMap[key] = {
            text: text,
            _meta: {
              file: filePath,
              line: path.node.loc?.start.line || 0,
              column: path.node.loc?.start.column || 0,
            },
          };
        }
      },
      StringLiteral(path: any) {
        const parent = path.parent;

        // Skip non-content attributes
        if (parent.type === "JSXAttribute") {
          const attrName = parent.name?.name;
          const skipAttrs = [
            "className",
            "style",
            "id",
            "key",
            "href",
            "src",
            "alt",
            "data-*",
            "aria-*",
          ];
          if (
            typeof attrName === "string" &&
            skipAttrs.some((skip) =>
              skip.endsWith("*")
                ? attrName.startsWith(skip.replace("*", ""))
                : attrName === skip
            )
          ) {
            return;
          }
        }

        if (parent.type === "JSXExpressionContainer") {
          const text = path.node.value;
          if (isTextContent(text)) {
            // Find parent JSX element
            let current = path.parentPath;
            let elementType = "text";

            while (current) {
              if (current.isJSXElement()) {
                elementType = getJSXElementName(current.node.openingElement);
                break;
              }
              current = current.parentPath;
            }

            const count = elementCounts[elementType] || 0;
            elementCounts[elementType] = count + 1;

            const semanticName = getSemanticName(elementType, count);
            const key = `${pageName}.${blockName}.${semanticName}`;

            contentMap[key] = {
              text: text,
              _meta: {
                file: filePath,
                line: path.node.loc?.start.line || 0,
                column: path.node.loc?.start.column || 0,
              },
            };
          }
        }
      },
    });
  } catch (error: any) {
    console.error(`Error parsing ${filePath}:`, error.message);
  }

  return contentMap;
}

function getBlocksFromPage(pageFilePath: string): string[] {
  const content = fs.readFileSync(pageFilePath, "utf-8");
  const blocks: string[] = [];

  try {
    const ast = parse(content, {
      sourceType: "module",
      plugins: ["jsx", "typescript"],
    });

    traverse(ast, {
      ImportDeclaration(path: any) {
        if (path.node.source.value.includes("../blocks/")) {
          path.node.specifiers.forEach((spec: any) => {
            if (
              spec.type === "ImportSpecifier" ||
              spec.type === "ImportDefaultSpecifier"
            ) {
              blocks.push(spec.local.name);
            }
          });
        }
      },
    });
  } catch (error: any) {
    console.error(`Error parsing ${pageFilePath}:`, error.message);
  }

  return blocks;
}

function extractContent(): ContentMap {
  const allContent: ContentMap = {};

  const pageFiles = fs
    .readdirSync(PAGES_DIR)
    .filter((f) => f.endsWith(".tsx"));

  pageFiles.forEach((pageFile) => {
    const pageFilePath = path.join(PAGES_DIR, pageFile);
    const pageName = pageFile.replace(".tsx", "").toLowerCase().replace("page", "");

    const blocks = getBlocksFromPage(pageFilePath);

    blocks.forEach((blockName) => {
      const blockFile = `${blockName}.tsx`;
      const blockFilePath = path.join(BLOCKS_DIR, blockFile);

      if (fs.existsSync(blockFilePath)) {
        const blockContent = extractTextFromFile(
          blockFilePath,
          pageName,
          blockName.toLowerCase()
        );

        Object.assign(allContent, blockContent);
      }
    });
  });

  return allContent;
}

function createEditableVersion(content: ContentMap): Record<string, string> {
  const editable: Record<string, string> = {};

  Object.entries(content).forEach(([key, value]) => {
    editable[key] = value.text;
  });

  return editable;
}

function main() {
  console.log("🔍 Extracting content from pages and blocks...\n");

  const content = extractContent();

  // Write full content with metadata
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(content, null, 2));

  // Write editable version (just text, no metadata)
  const editable = createEditableVersion(content);
  fs.writeFileSync(EDITABLE_FILE, JSON.stringify(editable, null, 2));

  console.log(`✅ Content extracted successfully!`);
  console.log(`📄 Full content (with metadata): ${OUTPUT_FILE}`);
  console.log(`📝 Editable content (for AI): ${EDITABLE_FILE}`);

  const totalItems = Object.keys(content).length;
  console.log(`\n📊 Total text elements extracted: ${totalItems}`);

  // Group by page
  const byPage: Record<string, number> = {};
  Object.keys(content).forEach((key) => {
    const page = key.split(".")[0];
    byPage[page] = (byPage[page] || 0) + 1;
  });

  console.log(`\n📄 By page:`);
  Object.entries(byPage).forEach(([page, count]) => {
    console.log(`  ${page}: ${count} items`);
  });

  console.log(`\n💡 Next steps:`);
  console.log(`  1. Send '${EDITABLE_FILE}' to AI for content updates`);
  console.log(`  2. Save AI's response as 'content-updated.json'`);
  console.log(`  3. Run 'npm run apply-content' to apply changes`);
}

main();
