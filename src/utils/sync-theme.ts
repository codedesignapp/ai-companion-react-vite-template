/**
 * Utility to sync theme configuration between theme.config.ts and index.html
 * 
 * This ensures the theme is applied correctly and both files stay in sync
 */

import { THEME_CONFIG } from "../theme.config";

/**
 * Forces the theme mode from config, overriding localStorage if needed
 * Call this immediately on app load to ensure config takes precedence
 */
export function forceThemeFromConfig(): void {
  if (typeof window === "undefined") return;

  const { defaultMode } = THEME_CONFIG;
  
  // Compute the actual mode (handle "auto")
  const computedMode =
    defaultMode === "auto"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : defaultMode;

  // Force apply the theme
  const html = document.documentElement;
  if (computedMode === "dark") {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }

  // Update localStorage to match config
  if (THEME_CONFIG.persist) {
    window.localStorage.setItem(THEME_CONFIG.storageKey, defaultMode);
  }
}

