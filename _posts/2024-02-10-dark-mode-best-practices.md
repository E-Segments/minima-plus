---
title: "Dark Mode Best Practices"
description: "How to implement dark mode that users will love, with accessibility in mind."
date: 2024-02-10
author: "Your Name"
categories: [Design]
tags: [dark-mode, accessibility, ux]
---

Dark mode has become a must-have feature for modern websites. Here's how to implement it properly.

## Why Dark Mode?

Users love dark mode for several reasons:

- **Reduced eye strain** in low-light conditions
- **Battery savings** on OLED screens
- **Personal preference** - some just prefer it
- **Accessibility** for light-sensitive users

## Implementation Strategies

### 1. CSS Custom Properties

Use CSS variables for easy theme switching:

```css
:root {
  --bg-color: #ffffff;
  --text-color: #1a1a1a;
}

.dark {
  --bg-color: #0f172a;
  --text-color: #f1f5f9;
}

body {
  background: var(--bg-color);
  color: var(--text-color);
}
```

### 2. Tailwind Dark Mode

Tailwind makes it easy with the `dark:` prefix:

```html
<div class="bg-white dark:bg-slate-900">
  <p class="text-gray-900 dark:text-gray-100">
    Content
  </p>
</div>
```

## Respecting User Preferences

Always check the system preference first:

```javascript
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.add('dark');
}
```

## Persistence

Save the user's choice:

```javascript
// Save preference
localStorage.setItem('theme', 'dark');

// Load preference
const theme = localStorage.getItem('theme');
```

## Accessibility Considerations

<div class="callout callout-warning">
  <strong>Important:</strong> Ensure sufficient contrast in both modes. WCAG recommends a minimum contrast ratio of 4.5:1 for normal text.
</div>

### Contrast Ratios

| Element | Light Mode | Dark Mode |
|---------|------------|-----------|
| Body text | 12.6:1 | 13.1:1 |
| Links | 8.2:1 | 7.9:1 |
| Muted text | 4.6:1 | 4.8:1 |

## Common Mistakes

### Don't Just Invert Colors

Simply inverting colors creates poor results:

- Images look wrong
- Brand colors get distorted
- Contrast may become too harsh

### Do Create a Proper Palette

Design intentional dark mode colors:

```css
/* Light mode */
--primary: #4f46e5;

/* Dark mode - slightly brighter for visibility */
--primary: #818cf8;
```

## Smooth Transitions

Add transitions for a polished feel:

```css
body {
  transition: background-color 0.3s ease, color 0.3s ease;
}
```

<div class="callout callout-info">
  <strong>Pro tip:</strong> Disable transitions on page load to prevent a flash of animation.
</div>

## Testing

Test your dark mode thoroughly:

<ol class="steps">
  <li>Check all pages in both modes</li>
  <li>Verify image visibility</li>
  <li>Test form elements</li>
  <li>Validate contrast ratios</li>
  <li>Test the toggle mechanism</li>
</ol>

## Conclusion

Dark mode is more than an aesthetic choice—it's about user comfort and accessibility. Take the time to implement it properly, and your users will thank you.
