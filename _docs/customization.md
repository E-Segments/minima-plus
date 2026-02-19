---
title: "Customization"
description: "Advanced customization options for colors, styles, and components"
order: 6
parent: "Advanced"
version: "2.1"
---

This guide covers advanced customization options beyond the basic configuration.

## Overriding Component Styles

Components use CSS classes that you can override in your custom CSS.

### Method 1: Custom CSS File

Add your overrides to `assets/css/custom.css`:

```css
/* Override card hover effect */
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 25px 30px -5px rgba(0, 0, 0, 0.1);
}

/* Custom button style */
.btn-custom {
  background: linear-gradient(135deg, #667eea, #764ba2);
  border: none;
}
```

### Method 2: Inline Custom Styles

Add styles directly in `_includes/custom-styles.html`:

```html
<style>
/* Your custom styles here */
.my-custom-class {
  /* styles */
}
</style>
```

### Component Class Reference

| Component | Base Class | Modifiers |
|-----------|-----------|-----------|
| Card | `.card` | `.card-horizontal`, `.card-with-icon` |
| Button | `.btn` | `.btn-primary`, `.btn-secondary`, `.btn-outline` |
| Alert | `.callout` | `.callout-info`, `.callout-warning`, `.callout-success`, `.callout-danger` |
| Accordion | `.accordion` | `.accordion-item`, `.accordion-trigger`, `.accordion-panel` |
| Tabs | `.tabs-container` | `.tabs-header`, `.tabs-content` |

## Custom Color Schemes

### Using Tailwind Color Names

The theme supports all Tailwind CSS color names:

```yaml
# _config.yml
theme_config:
  colors:
    primary: "violet"    # Purple tones
    secondary: "zinc"    # Neutral gray
    accent: "rose"       # Pink accent
```

### Creating a Custom Color Palette

For complete control, override CSS custom properties:

```css
/* assets/css/custom.css */
:root {
  --color-primary-50: #f0f9ff;
  --color-primary-100: #e0f2fe;
  --color-primary-200: #bae6fd;
  --color-primary-300: #7dd3fc;
  --color-primary-400: #38bdf8;
  --color-primary-500: #0ea5e9;
  --color-primary-600: #0284c7;
  --color-primary-700: #0369a1;
  --color-primary-800: #075985;
  --color-primary-900: #0c4a6e;
}
```

### Brand Color Examples

**Corporate Blue:**
```yaml
theme_config:
  colors:
    primary: "blue"
    secondary: "slate"
    accent: "sky"
```

**Nature Green:**
```yaml
theme_config:
  colors:
    primary: "emerald"
    secondary: "stone"
    accent: "lime"
```

**Creative Purple:**
```yaml
theme_config:
  colors:
    primary: "violet"
    secondary: "slate"
    accent: "fuchsia"
```

## Adding Custom CSS

### Global Styles

Create or edit `assets/css/custom.css` for site-wide styles:

```css
/* Custom typography */
.prose h2 {
  font-size: 1.75rem;
  letter-spacing: -0.02em;
}

/* Custom link styles */
.prose a {
  text-decoration-thickness: 2px;
  text-underline-offset: 2px;
}

/* Custom code block */
.prose pre {
  border: 1px solid var(--color-primary-200);
}
```

### Page-Specific Styles

Add styles to individual pages using front matter:

```yaml
---
title: "My Page"
custom_css: |
  .special-section {
    background: linear-gradient(to right, #667eea, #764ba2);
    padding: 2rem;
    border-radius: 1rem;
  }
---
```

Then in your layout, include the styles:

```liquid
{% raw %}{% if page.custom_css %}
<style>{{ page.custom_css }}</style>
{% endif %}{% endraw %}
```

## Extending Components

### Adding New Parameters

Create a wrapper include that adds functionality:

```liquid
{% raw %}<!-- _includes/components/card-extended.html -->
{% assign has_badge = include.badge %}

<div class="card {% if has_badge %}card-with-badge{% endif %}">
  {% if has_badge %}
  <span class="card-badge">{{ include.badge }}</span>
  {% endif %}

  {% include components/card.html
     title=include.title
     description=include.description
     link=include.link
  %}
</div>{% endraw %}
```

### Creating Component Variants

Add new style variants to existing components:

```css
/* Glassmorphism card variant */
.card-glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.dark .card-glass {
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

## Custom Layouts

### Creating a New Layout

Create `_layouts/custom.html`:

```html
{% raw %}---
layout: default
---

<div class="custom-layout">
  <aside class="custom-sidebar">
    <!-- Your sidebar content -->
  </aside>

  <main class="custom-content">
    {{ content }}
  </main>
</div>{% endraw %}
```

### Layout Variables

Access these variables in your layouts:

| Variable | Description |
|----------|-------------|
| `page.title` | Page title |
| `page.description` | Page description |
| `page.layout` | Current layout name |
| `site.theme_config` | Theme configuration |
| `content` | Page content |

### Conditional Layout Elements

```liquid
{% raw %}{% if site.theme_config.layout.sidebar %}
  <!-- Render sidebar -->
{% endif %}

{% if page.show_toc != false and site.theme_config.components.show_toc %}
  {% include toc.html %}
{% endif %}{% endraw %}
```

## Font Customization

### Using Google Fonts

1. Add the font in `_includes/head.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap" rel="stylesheet">
```

2. Update the configuration:

```yaml
theme_config:
  fonts:
    heading: "Outfit"
    body: "Outfit"
```

3. Add the CSS fallback:

```css
.font-heading {
  font-family: 'Outfit', system-ui, sans-serif;
}
```

### Using Local Fonts

1. Add fonts to `assets/fonts/`:

```
assets/
  fonts/
    custom-font.woff2
    custom-font-bold.woff2
```

2. Define the font-face:

```css
@font-face {
  font-family: 'CustomFont';
  src: url('/assets/fonts/custom-font.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: 'CustomFont';
  src: url('/assets/fonts/custom-font-bold.woff2') format('woff2');
  font-weight: 700;
  font-display: swap;
}
```

### Font Weight Reference

| Weight | Name | Usage |
|--------|------|-------|
| 400 | Regular | Body text |
| 500 | Medium | Labels, buttons |
| 600 | Semibold | Subheadings |
| 700 | Bold | Headings |

## Dark Mode Customization

### Custom Dark Mode Colors

```css
.dark {
  --custom-bg: #0f172a;
  --custom-text: #e2e8f0;
  --custom-border: #334155;
}

.dark .my-component {
  background: var(--custom-bg);
  color: var(--custom-text);
  border-color: var(--custom-border);
}
```

### Dark Mode Toggle Behavior

To change the default mode:

```javascript
// Default to dark mode
if (!localStorage.getItem('theme')) {
  document.documentElement.classList.add('dark');
}
```

## Next Steps

- Check the [Accessibility Guide](/docs/accessibility/) to ensure your customizations are accessible
- See the [Components Guide](/docs/components/) for component usage
- Read the [Troubleshooting Guide](/docs/troubleshooting/) if you encounter issues
