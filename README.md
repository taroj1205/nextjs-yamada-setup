# Next.js + Yamada UI Template

This is a modern web application template that integrates [Next.js](https://nextjs.org) with [Yamada UI](https://yamada-ui.com/), providing a powerful foundation for building beautiful, responsive, and theme-aware applications.

## Features

- 🎨 **Theme Switching** - Built-in support for light, dark, and system themes
- 🔗 **Multiple Link Variations** - Examples of different link implementations:
  - Next.js Link integration
  - Standard anchor tags
  - Button-styled links
  - Icon buttons
- 🎯 **Component Examples** - Practical examples of Yamada UI components
- 📱 **Responsive Design** - Mobile-friendly interface
- ⚡ **Fast Development** - Hot reloading and optimized build process

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/nextjs-yamada-setup.git
cd nextjs-yamada-setup
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
  ├── app/              # Next.js app directory
  ├── components/       # Reusable UI components
  └── theme/           # Yamada UI theme customization
      ├── components/   # Component-specific theme customizations
      ├── styles/      # Global styles and CSS customizations
      ├── tokens/      # Design tokens (colors, spacing, etc.)
      ├── config.ts    # Theme configuration (color mode, breakpoints)
      ├── index.ts     # Theme entry point
      └── semantics.ts # Semantic token definitions

The theme directory showcases Yamada UI's powerful customization capabilities:
- **Component Customization**: Define component-specific styles, variants, and sizes in `components/`
- **Global Styles**: Customize application-wide styles and CSS variables
- **Design Tokens**: Manage design system tokens like colors, spacing, and typography
- **Semantic Tokens**: Define semantic aliases for design tokens (e.g., "primary" → specific color)
- **Theme Config**: Control theme behavior like initial color mode and breakpoint settings
```

## Usage Examples

### Theme Switching

The application includes a built-in theme switcher component that allows users to toggle between light, dark, and system themes:

```tsx
<ThemeSwitcher />
```

### Link Variations

Multiple ways to implement links are demonstrated:

```tsx
// Using Next.js Link
<UILink as={Link} href="/demo">
  Link text
</UILink>

// Using standard anchor
<UILink as="a" href="/demo">
  Link text
</UILink>

// Using Button as Link
<Button as={Link} href="/demo" variant="link">
  Button Link
</Button>
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Yamada UI Documentation](https://yamada-ui.com/) - explore Yamada UI components and features

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
