import * as fs from "fs";
import * as path from "path";

/**
 * Extract Design System Themes
 * 
 * Parses design-system.css to extract all 18 themes with their CSS variables.
 * Outputs a JSON file that AI can use to select and modify themes.
 */

interface ThemeVariables {
    [key: string]: string;
}

interface Theme {
    id: string;
    name: string;
    variables: ThemeVariables;
}

interface DesignOutput {
    themes: Theme[];
    currentTheme: string | null;
    _meta: {
        extractedAt: string;
        sourceFile: string;
    };
}

const CSS_FILE = path.join(process.cwd(), "src", "design-system.css");
const OUTPUT_FILE = path.join(process.cwd(), "design.json");
const EDITABLE_FILE = path.join(process.cwd(), "design-editable.json");

// Theme names from ThemeSwitcher.tsx
const THEME_NAMES: Record<string, string> = {
    "holographic": "Holographic",
    "bauhaus": "Bauhaus",
    "zen": "Zen",
    "pastel": "Pastel",
    "editorial": "Editorial",
    "artistic": "Artistic",
    "brutalist": "Brutalist",
    "cyberpunk": "Cyberpunk",
    "terminal": "Terminal",
    "vaporwave": "Vaporwave",
    "photography": "Photography",
    "organic": "Organic",
    "aurora": "Aurora",
    "noir": "Noir",
    "glass-luxe": "Glass Luxe",
    "magazine": "Magazine",
    "mobile-first": "Mobile-First",
    "": "Corporate (Default)",
};

function extractThemes(): Theme[] {
    const cssContent = fs.readFileSync(CSS_FILE, "utf-8");
    const themes: Theme[] = [];

    // Extract default theme variables (no data-theme selector)
    const defaultVarsMatch = cssContent.match(/:root\s*\{([^}]+)\}/);
    if (defaultVarsMatch) {
        const defaultVars = parseVariables(defaultVarsMatch[1]);
        themes.push({
            id: "",
            name: "Corporate (Default)",
            variables: defaultVars,
        });
    }

    // Extract theme-specific variables
    const themeRegex = /:root\[data-theme="([^"]+)"\]\s*\{([^}]+)\}/g;
    let match;

    while ((match = themeRegex.exec(cssContent)) !== null) {
        const themeId = match[1];
        const variablesBlock = match[2];
        const variables = parseVariables(variablesBlock);

        // Only include if we have meaningful variables
        if (Object.keys(variables).length > 0) {
            // Check if we already have this theme (avoid duplicates from multiple blocks)
            const existingIndex = themes.findIndex((t) => t.id === themeId);
            if (existingIndex >= 0) {
                // Merge variables
                themes[existingIndex].variables = {
                    ...themes[existingIndex].variables,
                    ...variables,
                };
            } else {
                themes.push({
                    id: themeId,
                    name: THEME_NAMES[themeId] || themeId,
                    variables,
                });
            }
        }
    }

    return themes;
}

function parseVariables(block: string): ThemeVariables {
    const variables: ThemeVariables = {};
    const varRegex = /--([a-zA-Z0-9-]+)\s*:\s*([^;]+);/g;
    let match;

    while ((match = varRegex.exec(block)) !== null) {
        const name = match[1];
        const value = match[2].trim();
        variables[name] = value;
    }

    return variables;
}

function createEditableVersion(themes: Theme[]): Record<string, ThemeVariables> {
    const editable: Record<string, ThemeVariables> = {};

    themes.forEach((theme) => {
        const key = theme.id || "default";
        editable[key] = theme.variables;
    });

    return editable;
}

function main() {
    console.log("🎨 Extracting design themes from CSS...\n");

    const themes = extractThemes();

    const output: DesignOutput = {
        themes,
        currentTheme: null,
        _meta: {
            extractedAt: new Date().toISOString(),
            sourceFile: CSS_FILE,
        },
    };

    // Write full output with metadata
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2));

    // Write editable version (for AI)
    const editable = createEditableVersion(themes);
    fs.writeFileSync(EDITABLE_FILE, JSON.stringify(editable, null, 2));

    console.log(`✅ Design themes extracted successfully!`);
    console.log(`📄 Full design (with metadata): ${OUTPUT_FILE}`);
    console.log(`📝 Editable design (for AI): ${EDITABLE_FILE}`);
    console.log(`\n📊 Total themes extracted: ${themes.length}`);

    themes.forEach((theme) => {
        console.log(`  ${theme.name}: ${Object.keys(theme.variables).length} variables`);
    });

    console.log(`\n💡 Next steps:`);
    console.log(`  1. Send '${EDITABLE_FILE}' to AI for theme selection/modification`);
    console.log(`  2. AI returns a modified theme or selects one`);
    console.log(`  3. Run 'npm run apply-design' to apply changes`);
}

main();
