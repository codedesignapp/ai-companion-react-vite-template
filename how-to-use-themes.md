# Design System Theme Creation Guide

## Quick Start: New Theme Template

```css
:root[data-theme="my-theme"] {
   /* Colors - Required */
   --primary: #yourcolor;
   --secondary: #yourcolor;
   --surface: #background;
   --surface-elevated: #card-bg;
   --text-primary: #main-text;
   --text-secondary: #muted-text;
   --text-tertiary: #faint-text;
   --border: #border-color;
   
   /* Decorative - Optional */
   --card-radius: 1rem;
   --button-radius: 0.5rem;
   --deco-gradient-opacity: 0.1;
}
```

## Theme CSS Structure

Themes are defined using `data-theme` attribute selectors:
```css
:root[data-theme="theme-name"] { /* variables */ }
:root[data-theme="theme-name"] [data-section="hero"] { /* hero-specific */ }
:root[data-theme="theme-name"] .ds-card { /* component overrides */ }
```

## Section Data Attributes

Each section has `data-section` attribute:
- `data-section="hero"` - Hero section
- `data-section="features"` - Features section  
- `data-section="stats"` - Stats section
- `data-section="testimonials"` - Testimonials
- `data-section="team"` - Team section
- `data-section="pricing"` - Pricing
- `data-section="contact"` - Contact form
- `data-section="faq"` - FAQ section
- `data-section="values"` - Values section

## Hero Layout System

Controlled by `data-hero-layout` attribute on `:root`:
- `off` - Full-width centered text, no images
- `split` - Text left, images right (50/50)
- `left` - Images left, text right
- `fullbleed` - Edge-to-edge image below text
- `background` - Background image with overlay
- `offset` - Images break out of container

## ⚠️ CRITICAL: Things That BREAK (Updated Based on Production Fixes)

### 1. HERO VERTICAL CENTERING - The #1 Issue

**Problem**: Hero content appears pushed down or off-center vertically.

**ROOT CAUSE**: Overriding `.ds-hero-wrapper`, `.ds-hero-container`, or `[data-section="hero"]` display/positioning breaks the base layout system.

```css
/* ❌ BREAKS EVERYTHING - DO NOT DO THIS */
:root[data-theme="minimal"] [data-section="hero"] {
   min-height: 100vh;
   display: flex;
   align-items: center;  /* BREAKS layout modes */
}

:root[data-theme="minimal"] .ds-hero-wrapper {
   display: flex !important;
   justify-content: center !important;  /* BREAKS image layouts */
}
```

**✅ CORRECT FIX**: Only remove `padding-top` on `.ds-hero-content`:

```css
/* This is ALL you need for centering */
:root[data-theme="minimal"] .ds-hero-content {
   padding-top: 0;
}

/* For BG layout ONLY, if needed */
:root[data-theme="minimal"][data-hero-layout="background"] .ds-hero-wrapper {
   min-height: 100vh;
   display: flex;
   align-items: center;
}

:root[data-theme="minimal"][data-hero-layout="background"] [data-section="hero"] .ds-hero-content {
   padding: 4rem 0;  /* Equal top/bottom padding */
}
```

**WHY**: The base hero layout system in `design-system.css` already handles:
- Vertical centering via `.ds-hero-wrapper { justify-content: center }`
- All 6 image layout modes (off, split, left, fullbleed, background, offset)
- Trust section positioning with `margin-top: auto`

Overriding these breaks the entire system.

---

### 2. BUTTON STYLING - Two-Color Approach (Primary + Secondary)

**Problem**: Buttons not visible on white backgrounds, or both buttons look the same.

**WRONG APPROACH** - Using vague selectors:
```css
/* ❌ DOESN'T WORK - Too vague */
:root[data-theme="finance"] .ds-button:not([class*="outline"]) {
   background: green;
}
```

**✅ CORRECT APPROACH** - Target specific Tailwind classes:

```css
/* Primary Button - FILLED (has bg-primary-600 class) */
:root[data-theme="finance"] .ds-button[class*="bg-primary-600"] {
   background-color: #059669 !important;
   color: #ffffff !important;
   border: none !important;
}

/* Secondary Button - OUTLINE (has bg-white/5 class) */
:root[data-theme="finance"] .ds-button[class*="bg-white"] {
   background: transparent !important;
   color: #d97706 !important;
   border: 2px solid #fbbf24 !important;
}
```

**KEY INSIGHT**: Check the actual HTML classes using browser DevTools. The buttons have:
- Primary: `bg-primary-600` class
- Secondary: `bg-white/5` class

Target these EXACT classes, not generic patterns.

**For BG Layout Mode**:
```css
:root[data-theme="finance"][data-hero-layout="background"] [data-section="hero"] .ds-button[class*="bg-white"] {
   background: rgba(0, 0, 0, 0.3) !important;
   border-color: #fbbf24 !important;
   color: #ffffff !important;
   backdrop-filter: blur(10px) !important;
}
```

---

### 3. IMAGE LAYOUTS COMPLETELY BROKEN

**Problem**: All hero image modes (Right, Left, Full, BG, Break) don't work in your theme.

**CAUSE**: You overrode `.ds-hero-wrapper`, `.ds-hero-container`, or `.ds-hero-images` too aggressively.

```css
/* ❌ THIS BREAKS ALL IMAGE LAYOUTS */
:root[data-theme="broken"] .ds-hero-container {
   display: flex !important;
   flex-direction: column !important;  /* Breaks split/left modes */
}
```

**✅ FIX**: DON'T override these layout containers. Only override:
- `.ds-hero-content` - For text spacing
- `.ds-hero-heading` - For heading styles  
- `.ds-hero-description` - For description styles
- Specific layout modes like `[data-hero-layout="background"]`

**Reference**: Look at Holographic theme - it works perfectly because it doesn't mess with the layout system.

---

### 4. PADDING-TOP Issue

**Problem**: Hero content sits too low on the page.

**CAUSE**: Default `.ds-hero-content { padding: 4rem 0 }` adds 4rem to the top.

**✅ SIMPLE FIX**:
```css
:root[data-theme="minimal"] .ds-hero-content {
   padding-top: 0;  /* Remove top padding */
}
```

**For different layouts**:
```css
/* BG layout needs balanced padding */
:root[data-theme="minimal"][data-hero-layout="background"] [data-section="hero"] .ds-hero-content {
   padding: 4rem 0;  /* Equal top/bottom */
}
```

---

### 5. DON'T USE `nth-child` or `nth-of-type` FOR BUTTONS

**Problem**: Trying to target "first button" and "second button" with nth selectors.

**WHY IT'S BAD**: 
- Fragile - breaks if button order changes
- Not semantic - doesn't reflect what the button IS
- Hard to maintain

**✅ USE CLASS TARGETING** instead:
```css
/* Target by what it IS, not where it sits */
.ds-button[class*="bg-primary-600"]  /* Primary button */
.ds-button[class*="bg-white"]        /* Secondary button */
```

---

### 6. NEVER set `display: flex/grid` on `[data-section="hero"]`

```css
/* ❌ BAD - Breaks trust section positioning */
:root[data-theme="x"] [data-section="hero"] {
   display: flex !important;
}

/* ✅ GOOD - Style wrapper or container instead */
:root[data-theme="x"] .ds-hero-wrapper {
   /* your styles */
}
```

---

### 7. NEVER use unscoped selectors for layout-specific styling

```css
/* ❌ BAD - Affects ALL h1 on page */
:root[data-hero-layout="background"] h1 { color: white }

/* ✅ GOOD - Scoped to hero section only */
:root[data-hero-layout="background"] [data-section="hero"] h1 { color: white }
```

---

### 8. NEVER override `.ds-hero-trust` positioning

The trust section uses `margin-top: auto` in a flex column. Don't override this.

---

### 9. NEVER use `text-white` utilities on cards with light backgrounds

Use explicit CSS color overrides instead:
```css
:root[data-theme="x"] [data-section="stats"] .ds-card * {
   color: #1f2937 !important;
}
```

---

### 10. AVOID setting `position: absolute` on images in hero

Images should be part of the layout flow.

---

### 11. LIGHT THEMES: ALWAYS Override Card Text Colors Explicitly

**Problem**: Light-themed cards (white/light backgrounds) inherit text colors from other themes, resulting in invisible/unreadable text.

**ROOT CAUSE**: Card text might use light colors (designed for dark backgrounds) which are invisible on light card backgrounds.

```css
/* ❌ BAD - Light theme without card text overrides */
:root[data-theme="notion"] {
   --surface: #FFFFFF;  /* White */
   --text-primary: #1A1A1A;  /* Dark */
}

:root[data-theme="notion"] .ds-card {
   background: var(--surface);  /* White card */
   /* Text inherits from somewhere else - might be light! */
}
```

**✅ CORRECT FIX** - Explicitly set dark text on light cards:

```css
:root[data-theme="notion"] .ds-card {
   background: #FFFFFF;
   border-color: #E3E3E3;
}

/* CRITICAL: Force dark text on light cards */
:root[data-theme="notion"] .ds-card h2,
:root[data-theme="notion"] .ds-card h3,
:root[data-theme="notion"] .ds-card h4 {
   color: #1A1A1A !important;  /* Dark headings */
}

:root[data-theme="notion"] .ds-card p,
:root[data-theme="notion"] .ds-card span,
:root[data-theme="notion"] .ds-card div {
   color: #5A5A5A !important;  /* Medium gray body text */
}
```

**WHY**: Cards can appear in any section (Stats, Features, Testimonials, Pricing, etc.). Without explicit overrides, they may inherit incompatible colors from:
- Global theme defaults
- Section-specific styles
- Other theme overrides

**RULE**: For ANY light theme, you MUST add these card text overrides. No exceptions.

**Quick Test**: If your theme has `--surface: #FFFFFF` or any light color, add card text overrides immediately.


## Safe Theme Patterns

### Background Image Hero
```css
:root[data-theme="x"] [data-section="hero"] {
   background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)),
      url('image.jpg');
   background-size: cover;
   min-height: 100vh;
   /* NO display:flex here! */
}
:root[data-theme="x"] [data-section="hero"] * {
   color: #ffffff !important;
}
```

### Light Theme with Gradient Text
```css
:root[data-theme="x"] [data-section="hero"] h1 span {
   background: linear-gradient(135deg, #color1, #color2) !important;
   -webkit-background-clip: text !important;
   background-clip: text !important;
   -webkit-text-fill-color: transparent !important;
}
```

### Force Readable Text on Cards
```css
:root[data-theme="x"] .ds-card,
:root[data-theme="x"] .ds-card * {
   color: #1f2937 !important;
}
:root[data-theme="x"] .ds-card h3 {
   color: #111827 !important;
}
```

## Theme-Safe Classes

These classes are safe to override without side effects:
- `.ds-card` - Card containers
- `.ds-button` - Buttons
- `.ds-badge` - Badges
- `.ds-heading-1/2/3` - Headings
- `.ds-body-lg/md/sm` - Body text
- `.ds-hero-heading` - Hero heading only
- `.ds-hero-description` - Hero description only

## CSS Variable Reference

| Variable | Purpose | Default |
|----------|---------|---------|
| `--primary` | Primary brand color | blue |
| `--secondary` | Secondary accent | purple |
| `--surface` | Main background | dark gray |
| `--surface-elevated` | Card/modal bg | lighter gray |
| `--text-primary` | Main text | white/black |
| `--text-secondary` | Muted text | gray |
| `--card-radius` | Card border radius | 1rem |
| `--button-radius` | Button radius | 0.5rem |
| `--deco-gradient-opacity` | Decorative gradients | 0.1 |

## Registering New Theme

Add to `src/components/ThemeSwitcher.tsx`:
```tsx
const themes = [
   { id: 'my-theme', name: 'My Theme', emoji: '🎨', description: 'Short desc' },
   // ...existing themes
];
```
