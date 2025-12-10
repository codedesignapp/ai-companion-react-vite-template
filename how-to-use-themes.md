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

## ⚠️ CRITICAL: Things That BREAK

### 1. NEVER set `display: flex/grid` on `[data-section="hero"]`
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

### 2. NEVER use unscoped selectors for layout-specific styling
```css
/* ❌ BAD - Affects ALL h1 on page */
:root[data-hero-layout="background"] h1 { color: white }

/* ✅ GOOD - Scoped to hero section only */
:root[data-hero-layout="background"] [data-section="hero"] h1 { color: white }
```

### 3. NEVER override `.ds-hero-trust` positioning
The trust section uses `margin-top: auto` in a flex column. Don't override this.

### 4. NEVER use `text-white` utilities on cards with light backgrounds
Use explicit CSS color overrides instead:
```css
:root[data-theme="x"] [data-section="stats"] .ds-card * {
   color: #1f2937 !important;
}
```

### 5. AVOID setting `position: absolute` on images in hero
Images should be part of the layout flow.

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
