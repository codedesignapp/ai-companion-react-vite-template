/**
 * ============================================
 * THEME MODE CONFIGURATION
 * ============================================
 * 
 * Controls whether the app uses light or dark mode.
 * 
 * Design tokens (colors, fonts, spacing, etc.) are defined in:
 * 📁 src/design-system.css
 * 
 * To switch between light and dark mode:
 * 1. Change the `defaultMode` value below
 * 2. Save this file
 * 3. The entire app will switch themes
 * 
 * Options:
 * - "light" - Always use light/white mode
 * - "dark" - Always use dark mode
 * - "auto" - Follow system preference
 */
export const THEME_CONFIG = {
  /**
   * DEFAULT THEME MODE
   * 
   * ✅ CURRENTLY SET TO: LIGHT MODE (white/light theme)
   * 
   * Change this value to switch the entire application's theme:
   * - Set to "light" for white/light mode ← CURRENT
   * - Set to "dark" for dark mode
   * - Set to "auto" to follow system preference
   * 
   * This single change affects ALL blocks:
   * - Hero, Features, Content, CTA
   * - HeaderNavigation, FooterSection
   * - TeamSection, PricingTables
   * - SocialProof, FAQSection, ContactForm
   */
  defaultMode: "light",
  
  /**
   * Whether to persist theme preference in localStorage
   * Set to false if you want theme to always use defaultMode
   */
  persist: true,
  
  /**
   * localStorage key for storing theme preference
   * Only used if persist is true
   */
  storageKey: "flowbite-theme-mode",
} as const;

