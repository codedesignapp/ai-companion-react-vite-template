# Flowbite React Components

All Flowbite React components have been extracted from the [flowbite-react repository](https://github.com/themesberg/flowbite-react) into this codebase.

## Structure

```
src/
├── components/          # All Flowbite React components
├── helpers/            # Utility functions used by components
├── hooks/              # React hooks used by components
├── types/              # TypeScript type definitions
├── theme/              # Theme configuration and provider
├── icons/              # Icon components
└── store/              # Global state management
```

## Available Components

All components are available from `src/components`:

- Accordion
- Alert
- Avatar
- Badge
- Banner
- Blockquote
- Breadcrumb
- Button
- Card
- Carousel
- Checkbox
- Clipboard
- DarkThemeToggle
- Datepicker
- Drawer
- Dropdown
- FileInput
- FloatingLabel
- Footer
- HelperText
- HR
- Kbd
- Label
- List
- ListGroup
- MegaMenu
- Modal
- Navbar
- Pagination
- Popover
- Progress
- Radio
- RangeSlider
- Rating
- Select
- Sidebar
- Spinner
- Table
- Tabs
- Textarea
- TextInput
- Timeline
- Toast
- ToggleSwitch
- Tooltip

## Usage

### Import from local components

```tsx
import { Button, Card, Modal } from "./components";
// or
import { Button } from "./components/Button";
```

### Example

```tsx
import { Button, Card } from "./components";

function MyComponent() {
  return (
    <Card>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021.
      </p>
      <Button>Read more</Button>
    </Card>
  );
}
```

## Dependencies

The extracted components require the following dependencies (already installed):

- `@floating-ui/core` - For floating UI components (Tooltip, Popover, etc.)
- `@floating-ui/react` - React bindings for floating UI
- `classnames` - For conditional class names
- `deepmerge-ts` - For deep merging theme objects
- `klona` - For deep cloning objects
- `tailwind-merge` - For merging Tailwind CSS classes

## Customization

Since the components are now in your codebase, you can:

1. **Modify components directly** - Edit any component file in `src/components/`
2. **Customize themes** - Modify theme files in each component directory
3. **Add new components** - Create new components following the same structure
4. **Override styles** - Modify Tailwind classes directly in component files

## Notes

- The components use relative imports (e.g., `../../helpers/`) which work with the current structure
- All components are TypeScript and include type definitions
- Theme customization is available through the `theme` prop on most components
- Dark mode support is built-in and can be toggled using `DarkThemeToggle`

