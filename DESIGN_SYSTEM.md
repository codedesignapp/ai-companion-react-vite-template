# Design System Documentation

## Overview

This project uses a **centralized design system** built on Tailwind CSS v4. All design tokens (colors, typography, spacing, borders, shadows) are defined in a single file and automatically adapt to light/dark mode.

## File Structure

```
src/
  ├── design-system.css    ← ALL DESIGN TOKENS (edit this file)
  ├── index.css            ← Imports design system
  ├── theme.config.ts      ← Theme mode (light/dark) control
  ├── animation.config.ts  ← Animation settings (edit this file)
  ├── utils/
  │   └── animations.ts    ← Animation utilities
  ├── hooks/
  │   └── useAnimation.ts ← Animation hooks
  └── components/
      └── AnimatedSection.tsx ← Animation wrapper component
```

## Quick Start

**To change colors, fonts, spacing, or any design token:**

1. Edit `src/design-system.css`
2. Save the file
3. All blocks automatically update

**To switch between light/dark mode:**

1. Edit `src/theme.config.ts` → `defaultMode: "light"` or `"dark"`
2. Save the file
3. Entire app switches themes

**To enable/disable animations or change animation settings:**

1. Edit `src/animation.config.ts`
2. Change `enabled`, `preset`, `duration`, or block-specific settings
3. Save the file
4. All blocks automatically use the new animation settings

## Animation Configuration

### Location

The animation configuration is located at:
```
src/animation.config.ts
```

### Quick Configuration

**To disable all animations:**
```typescript
export const ANIMATION_CONFIG = {
  enabled: false,  // Set to false to disable all animations
  // ... rest of config
}
```

**To change animation preset:**
```typescript
export const ANIMATION_CONFIG = {
  preset: "subtle" | "moderate" | "dynamic",  // Choose animation intensity
  // ... rest of config
}
```

**To change animation duration:**
```typescript
export const ANIMATION_CONFIG = {
  duration: {
    fast: 0.3,      // Quick animations
    normal: 0.6,    // Standard animations
    slow: 1.0,      // Slower animations
    verySlow: 1.5,  // Very slow animations
  },
  // ... rest of config
}
```

### Available Animation Types

- **`fadeIn`** - Simple fade in
- **`fadeInUp`** - Fade in from bottom (most common)
- **`fadeInDown`** - Fade in from top
- **`fadeInLeft`** - Fade in from left
- **`fadeInRight`** - Fade in from right
- **`scaleIn`** - Scale up while fading in
- **`slideInUp`** - Slide up without fade
- **`slideInDown`** - Slide down without fade
- **`slideInLeft`** - Slide in from left
- **`slideInRight`** - Slide in from right

### Block-Specific Animation Configuration

Each block has its own animation configuration:

```typescript
blockAnimations: {
  hero: {
    type: "fadeInUp",
    enabled: true,
  },
  features: {
    type: "fadeInUp",
    enabled: true,
    stagger: true,  // Stagger child items
  },
  // ... other blocks
}
```

**To change a specific block's animation:**
```typescript
blockAnimations: {
  hero: {
    type: "scaleIn",  // Change animation type
    enabled: true,
  },
}
```

**To disable animation for a specific block:**
```typescript
blockAnimations: {
  hero: {
    type: "fadeInUp",
    enabled: false,  // Disable this block's animation
  },
}
```

### Scroll Trigger Settings

Animations trigger when elements enter the viewport:

```typescript
scrollTrigger: {
  enabled: true,           // Enable scroll-triggered animations
  start: "top 80%",        // Start when element is 80% from top
  end: "bottom 20%",       // End when element is 20% from bottom
  toggleActions: "play none none reverse", // Play on enter, reverse on leave
}
```

### Using AnimatedSection Component

All blocks automatically use the `AnimatedSection` component, which reads from `animation.config.ts`:

```tsx
import { AnimatedSection } from "../components/AnimatedSection";
import { ANIMATION_CONFIG } from "../animation.config";

export function MyBlock() {
  const config = ANIMATION_CONFIG.blockAnimations.myBlock;
  
  return (
    <AnimatedSection
      type={config.type}
      enabled={config.enabled}
      className="bg-surface"
    >
      {/* Your content */}
    </AnimatedSection>
  );
}
```

### Using Animation Hooks

For custom animations, use the hooks:

```tsx
import { useAnimation } from "../hooks/useAnimation";

function MyComponent() {
  const elementRef = useAnimation("fadeInUp", {
    duration: 0.8,
    delay: 0.2,
  });

  return <div ref={elementRef}>Animated content</div>;
}
```

### Animation Presets

- **`subtle`** - Gentle, minimal animations (0.7x duration multiplier)
- **`moderate`** - Balanced animations (1.0x duration multiplier) - **Default**
- **`dynamic`** - More pronounced, energetic animations (1.3x duration multiplier)

## Theme Mode Configuration

### Location

The theme mode configuration is located at:
```
src/theme.config.ts
```

### Options

```typescript
export const THEME_CONFIG = {
  // Change this to switch themes:
  defaultMode: "light" | "dark" | "auto",
  
  // Whether to save user preference
  persist: true,
  
  // localStorage key
  storageKey: "flowbite-theme-mode",
}
```

### Mode Options

- **`"light"`** - Always use light/white mode
- **`"dark"`** - Always use dark mode
- **`"auto"`** - Follow system preference (light during day, dark at night)

### How It Works

1. **Single Source of Truth**: `src/theme.config.ts` controls the entire app
2. **Automatic Application**: All blocks automatically respect this config
3. **No Code Changes Needed**: Just change the config value

### Affected Blocks

All blocks automatically use the theme configuration:
- ✅ Hero
- ✅ Features
- ✅ Content
- ✅ CTA
- ✅ HeaderNavigation
- ✅ FooterSection
- ✅ TeamSection
- ✅ PricingTables
- ✅ SocialProof
- ✅ FAQSection
- ✅ ContactForm

### Programmatic Control

You can also control the theme programmatically:

```typescript
import { useThemeMode } from "flowbite-react";

function MyComponent() {
  const { mode, setMode, toggleMode } = useThemeMode();
  
  // Set to light mode
  setMode("light");
  
  // Set to dark mode
  setMode("dark");
  
  // Toggle between light/dark
  toggleMode();
}
```

## Design Tokens

### Colors

#### Primary Colors
```css
--color-primary-50 through --color-primary-950
```
Used for: Buttons, links, badges, brand elements

**To change primary color:**
```css
@theme {
  --color-primary-50: #f5f3ff;
  --color-primary-100: #ede9fe;
  --color-primary-200: #ddd6fe;
  --color-primary-300: #c4b5fd;
  --color-primary-400: #a78bfa;
  --color-primary-500: #8b5cf6;
  --color-primary-600: #7c3aed;  /* Main brand color */
  --color-primary-700: #6d28d9;  /* Hover states */
  --color-primary-800: #5b21b6;
  --color-primary-900: #4c1d95;
  --color-primary-950: #2e1065;
}
```

**Usage in blocks:**
- `bg-primary-600` - Background color
- `text-primary-600` - Text color
- `border-primary-600` - Border color
- `hover:bg-primary-700` - Hover states
- `focus:ring-primary-300` - Focus rings

#### Secondary Colors
```css
--color-secondary-50 through --color-secondary-950
```
Used for: Success states, alternative accents

**Current secondary colors (teal/cyan):**
```css
--color-secondary-50: #f0fdfa;
--color-secondary-100: #ccfbf1;
--color-secondary-200: #99f6e4;
--color-secondary-300: #5eead4;
--color-secondary-400: #2dd4bf;
--color-secondary-500: #14b8a6;
--color-secondary-600: #0d9488;
--color-secondary-700: #0f766e;
--color-secondary-800: #115e59;
--color-secondary-900: #134e4a;
--color-secondary-950: #042f2e;
```

#### Semantic Colors (Auto-adapt to light/dark)
```css
--color-surface          /* Background */
--color-surface-elevated /* Cards, elevated surfaces */
--color-surface-subtle   /* Subtle backgrounds */
--color-text-primary     /* Main text */
--color-text-secondary   /* Secondary text */
--color-text-tertiary    /* Tertiary text */
--color-border           /* Borders */
--color-border-subtle    /* Subtle borders */
```

These automatically change in dark mode - no need to use `dark:` variants!

**Current dark mode surfaces (slate theme):**
```css
:root.dark {
  --surface: #0f172a;              /* Slate 900 - Deep dark blue-gray */
  --surface-elevated: #1e293b;     /* Slate 800 - Elevated surfaces */
  --surface-subtle: #334155;       /* Slate 700 - Subtle backgrounds */
  --text-primary: #f1f5f9;          /* Slate 100 - High contrast text */
  --text-secondary: #cbd5e1;       /* Slate 300 - Secondary text */
  --text-tertiary: #94a3b8;         /* Slate 400 - Tertiary text */
  --border: #475569;                /* Slate 600 - Borders */
  --border-subtle: #64748b;        /* Slate 500 - Subtle borders */
}
```

### Typography

#### Font Families
```css
--font-family-sans   /* Default UI font */
--font-family-serif  /* Serif font */
--font-family-mono   /* Monospace font */
```

**To use a custom font:**
1. Import font in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

2. Update in `design-system.css`:
```css
@theme {
  --font-family-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
}
```

#### Font Sizes
```css
--font-size-xs: 0.75rem;      /* 12px */
--font-size-sm: 0.875rem;     /* 14px */
--font-size-base: 1rem;       /* 16px */
--font-size-lg: 1.125rem;     /* 18px */
--font-size-xl: 1.25rem;      /* 20px */
--font-size-2xl: 1.5rem;      /* 24px */
--font-size-3xl: 1.875rem;    /* 30px */
--font-size-4xl: 2.25rem;      /* 36px */
--font-size-5xl: 3rem;        /* 48px */
--font-size-6xl: 3.75rem;     /* 60px */
```

#### Font Weights
```css
--font-weight-light: 300
--font-weight-normal: 400
--font-weight-medium: 500
--font-weight-semibold: 600
--font-weight-bold: 700
--font-weight-extrabold: 800
```

### Spacing

```css
--spacing-0: 0
--spacing-1: 0.25rem;   /* 4px */
--spacing-2: 0.5rem;    /* 8px */
--spacing-3: 0.75rem;   /* 12px */
--spacing-4: 1rem;      /* 16px */
--spacing-5: 1.25rem;   /* 20px */
--spacing-6: 1.5rem;    /* 24px */
--spacing-8: 2rem;      /* 32px */
--spacing-10: 2.5rem;   /* 40px */
--spacing-12: 3rem;     /* 48px */
--spacing-16: 4rem;     /* 64px */
--spacing-20: 5rem;     /* 80px */
--spacing-24: 6rem;     /* 96px */
```

Base unit: 0.25rem (4px)

### Borders

#### Border Radius
```css
--radius-none: 0
--radius-sm: 0.125rem;    /* 2px */
--radius-base: 0.25rem;   /* 4px */
--radius-md: 0.375rem;    /* 6px */
--radius-lg: 0.5rem;      /* 8px */
--radius-xl: 0.75rem;     /* 12px */
--radius-2xl: 1rem;       /* 16px */
--radius-3xl: 1.5rem;     /* 24px */
--radius-full: 9999px
```

**To change default border radius:**
```css
--radius-base: 0.5rem;  /* Change from 4px to 8px */
```

#### Border Width
```css
--border-width-0: 0
--border-width-1: 1px
--border-width-2: 2px
--border-width-4: 4px
--border-width-8: 8px
```

### Shadows

```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-base: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
--shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
--shadow-none: 0 0 #0000;
```

## Usage in Blocks

### Colors

**Before (hardcoded):**
```tsx
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
```

**After (semantic tokens):**
```tsx
<div className="bg-surface text-text-primary">
```

### Typography

**Before:**
```tsx
<h1 className="text-4xl font-extrabold">
```

**After (same, but centralized):**
```tsx
<h1 className="text-4xl font-extrabold">
<!-- Tokens are already applied via Tailwind defaults -->
```

### Spacing

**Before:**
```tsx
<div className="p-4 m-2">
```

**After (same, but centralized):**
```tsx
<div className="p-4 m-2">
<!-- Values come from design-system.css -->
```

### Border Radius

**Before:**
```tsx
<button className="rounded-lg">
```

**After (using tokens):**
```tsx
<button className="rounded-lg">
<!-- Uses --radius-lg from design-system.css -->
```

## Examples

### Example 1: Change Primary Color to Green

Edit `src/design-system.css`:
```css
@theme {
  --color-primary-50: #f0fdf4;
  --color-primary-100: #dcfce7;
  --color-primary-200: #bbf7d0;
  --color-primary-300: #86efac;
  --color-primary-400: #4ade80;
  --color-primary-500: #22c55e;
  --color-primary-600: #16a34a;  /* Main brand color */
  --color-primary-700: #15803d;   /* Hover states */
  --color-primary-800: #166534;
  --color-primary-900: #14532d;
  --color-primary-950: #052e16;
}
```

All buttons, links, and primary elements automatically become green!

### Example 2: Change Default Font

Edit `src/design-system.css`:
```css
@theme {
  --font-family-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
}
```

Add font import to `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Example 3: Change Border Radius Globally

Edit `src/design-system.css`:
```css
@theme {
  --radius-base: 0.5rem;  /* Change from 4px to 8px */
  --radius-lg: 1rem;     /* Change from 8px to 16px */
}
```

### Example 4: Customize Spacing Scale

Edit `src/design-system.css`:
```css
@theme {
  --spacing-4: 1.5rem;   /* Change from 16px to 24px */
  --spacing-8: 3rem;     /* Change from 32px to 48px */
}
```

### Example 5: Customize Dark Mode Colors

Edit `src/design-system.css`:
```css
:root.dark {
  --surface: #your-dark-bg;
  --surface-elevated: #your-elevated-bg;
  --text-primary: #your-dark-text;
  --border: #your-border-color;
}
```

## Dark Mode

Dark mode is handled automatically:

1. **Semantic colors** automatically switch (surface, text, border)
2. **Primary/secondary colors** remain the same (you can override if needed)
3. **All other tokens** (spacing, typography, etc.) remain consistent

**To customize dark mode colors:**

Edit `src/design-system.css`:
```css
:root.dark {
  --surface: #your-dark-bg;
  --surface-elevated: #your-elevated-bg;
  --text-primary: #your-dark-text;
  /* ... */
}
```

## Where Colors Are Used

### Primary Colors
- **Hero Section**: Badge, buttons, focus rings
- **Features Section**: Icon backgrounds, icon colors
- **Header Navigation**: "Get started" button, active nav links
- **CTA Section**: Primary button
- **Pricing Tables**: "Get started" buttons
- **Contact Form**: Input focus states, submit button
- **FAQ Section**: Link colors
- **Footer**: Logo background

### Font Usage
- **Headings**: `font-extrabold`, `font-bold`, `font-semibold`
- **Body Text**: `font-normal`, `font-light`
- **UI Elements**: `font-medium`

All font weights and sizes use the centralized theme configuration.

## Best Practices

1. **Use semantic tokens** for surfaces, text, borders
2. **Use primary/secondary** for brand elements
3. **Keep tokens consistent** - don't mix hardcoded values
4. **Test in both modes** after making changes
5. **Document custom tokens** if you add new ones
6. **Always use theme config file** for mode switching
7. **Ensure sufficient contrast** for accessibility (WCAG AA minimum)
8. **Use semantic names**: Primary for main actions, secondary for alternatives

## Migration Guide

To migrate existing blocks to use design tokens:

1. Replace `bg-white dark:bg-gray-900` → `bg-surface`
2. Replace `text-gray-900 dark:text-white` → `text-text-primary`
3. Replace `border-gray-300 dark:border-gray-700` → `border-border`
4. Keep `primary-*` colors as-is (they're already tokens)
5. Replace `color="blue"` → `color="primary"` (Button component)

## Troubleshooting

**Colors not updating?**
- Clear browser cache
- Restart dev server
- Check that you're editing `design-system.css`
- Verify color names match exactly (e.g., `primary-600` not `primary-6`)

**Dark mode not working?**
- Check `theme.config.ts` → `defaultMode`
- Verify `.dark` class is on `<html>` element
- Check browser DevTools → Application → LocalStorage
- Clear localStorage if `persist: true`
- Restart dev server: `npm run dev`

**Theme not changing?**
- Clear browser cache
- Check that you saved `theme.config.ts`
- Restart dev server: `npm run dev`
- Clear localStorage if `persist: true`

**Tokens not applying?**
- Ensure `design-system.css` is imported in `index.css`
- Check Tailwind v4 syntax is correct
- Verify no conflicting CSS

**Fonts not loading?**
- Check font import in `index.html`
- Verify font name spelling in `@theme`
- Include fallback fonts
- Check browser console for font loading errors

**Buttons still showing old colors?**
- Ensure Button component theme uses `primary-*` not `blue-*`
- Check that `color="blue"` prop maps to primary colors
- Verify all component themes are updated

**Animations not working?**
- Check `animation.config.ts` → `enabled: true`
- Verify GSAP is installed: `npm install gsap`
- Check browser console for errors
- Ensure ScrollTrigger plugin is registered (automatic)
- Try disabling scroll trigger: `scrollTrigger: false` in block config

**Animations too fast/slow?**
- Adjust `duration` values in `animation.config.ts`
- Change `preset` to "subtle" (slower) or "dynamic" (faster)
- Override duration per block in `blockAnimations` config

**Animations not triggering on scroll?**
- Check `scrollTrigger.enabled: true` in config
- Verify elements are visible in viewport
- Check `start` and `end` values in scrollTrigger config
- Try reducing `start` value (e.g., "top 90%")
