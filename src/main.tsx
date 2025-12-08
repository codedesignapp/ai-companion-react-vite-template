import { initThemeMode } from "flowbite-react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeInit } from "../.flowbite-react/init";
import App from "./App.tsx";
import "./index.css";
import { THEME_CONFIG } from "./theme.config";
import { forceThemeFromConfig } from "./utils/sync-theme";

// Force theme from config IMMEDIATELY (before React renders)
// This ensures config always takes precedence over localStorage
forceThemeFromConfig();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeInit />
      <App />
    </BrowserRouter>
  </StrictMode>,
);

// Initialize theme mode using centralized config
// This handles runtime changes and system preference updates
initThemeMode({
  mode: THEME_CONFIG.defaultMode,
  defaultMode: THEME_CONFIG.defaultMode,
  localStorageKey: THEME_CONFIG.storageKey,
});

// Force theme again after initThemeMode (in case it changed it)
// This ensures config always wins
forceThemeFromConfig();
