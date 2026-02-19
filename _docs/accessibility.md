---
title: "Accessibility"
description: "Accessibility features, ARIA support, and keyboard navigation"
order: 7
parent: "Advanced"
version: "2.1"
---

Minima+ is built with accessibility in mind, following WCAG 2.1 guidelines. This guide covers the accessibility features built into the theme.

## ARIA Attributes

### Tabs Component

The tabs component implements the WAI-ARIA tabs pattern:

```html
<div role="tablist" aria-label="Content tabs">
  <button role="tab"
          aria-selected="true"
          aria-controls="panel-1"
          tabindex="0">
    Tab 1
  </button>
  <button role="tab"
          aria-selected="false"
          aria-controls="panel-2"
          tabindex="-1">
    Tab 2
  </button>
</div>

<div role="tabpanel"
     id="panel-1"
     aria-labelledby="tab-1"
     tabindex="0">
  Content 1
</div>
```

**ARIA attributes used:**
- `role="tablist"` - Container for tab buttons
- `role="tab"` - Each tab button
- `role="tabpanel"` - Each content panel
- `aria-selected` - Indicates active tab
- `aria-controls` - Links tab to its panel
- `aria-labelledby` - Links panel to its tab

### Accordion Component

The accordion follows the WAI-ARIA accordion pattern:

```html
<div role="presentation">
  <h3>
    <button aria-expanded="false"
            aria-controls="panel-1"
            id="trigger-1">
      Section Title
    </button>
  </h3>
  <div id="panel-1"
       role="region"
       aria-labelledby="trigger-1"
       aria-hidden="true">
    Content
  </div>
</div>
```

**ARIA attributes used:**
- `aria-expanded` - Indicates if section is open
- `aria-controls` - Links trigger to panel
- `aria-labelledby` - Links panel to trigger
- `aria-hidden` - Hides collapsed content from screen readers
- `role="region"` - Defines panel as a region

### Search Modal

The search modal implements accessible dialog patterns:

```html
<div role="dialog"
     aria-modal="true"
     aria-labelledby="search-title">
  <label for="search-input" id="search-title">
    Search the site
  </label>
  <input id="search-input"
         aria-label="Search posts, docs, and more"
         aria-describedby="search-instructions"
         aria-controls="search-results"
         aria-autocomplete="list">
  <div id="search-results" aria-live="polite">
    <!-- Results -->
  </div>
</div>
```

**ARIA attributes used:**
- `role="dialog"` - Identifies modal dialog
- `aria-modal="true"` - Indicates modal behavior
- `aria-labelledby` - Labels dialog
- `aria-live="polite"` - Announces result updates
- `aria-autocomplete="list"` - Indicates autocomplete behavior

### Stats Counter

The stats counter provides accessible number display:

```html
<div role="group" aria-label="Statistics">
  <div role="figure" aria-label="10,000+ Downloads">
    <div aria-hidden="true">10,000+</div>
    <div aria-hidden="true">Downloads</div>
    <span class="sr-only">10,000+ Downloads</span>
  </div>
</div>
```

## Keyboard Navigation

### Global Shortcuts

| Shortcut | Action |
|----------|--------|
| `Cmd/Ctrl + K` | Open search |
| `Escape` | Close modals |
| `Tab` | Navigate focusable elements |
| `Shift + Tab` | Navigate backwards |

### Tabs Navigation

| Key | Action |
|-----|--------|
| `Arrow Right` / `Arrow Down` | Next tab |
| `Arrow Left` / `Arrow Up` | Previous tab |
| `Home` | First tab |
| `End` | Last tab |
| `Enter` / `Space` | Activate tab (when focused) |

### Accordion Navigation

| Key | Action |
|-----|--------|
| `Enter` / `Space` | Toggle section |
| `Arrow Down` | Next header |
| `Arrow Up` | Previous header |
| `Home` | First header |
| `End` | Last header |

### Search Navigation

| Key | Action |
|-----|--------|
| `Arrow Down` | Next result |
| `Arrow Up` | Previous result |
| `Enter` | Select result |
| `Escape` | Close search |

## Screen Reader Compatibility

### Tested Screen Readers

- **VoiceOver** (macOS/iOS) - Fully compatible
- **NVDA** (Windows) - Fully compatible
- **JAWS** (Windows) - Fully compatible
- **TalkBack** (Android) - Fully compatible

### Screen Reader Announcements

The theme provides meaningful announcements for:

- Search results count
- Tab changes
- Accordion expand/collapse
- Loading states
- Error messages

### Hidden Content for Screen Readers

Use the `.sr-only` class to provide screen reader-only content:

```html
<button>
  <svg aria-hidden="true">...</svg>
  <span class="sr-only">Close menu</span>
</button>
```

The `.sr-only` class:
```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

## Color Contrast

### Contrast Ratios

The theme meets WCAG AA standards for color contrast:

| Element | Ratio | Standard |
|---------|-------|----------|
| Body text | 7:1+ | AAA |
| Headings | 7:1+ | AAA |
| Links | 4.5:1+ | AA |
| Buttons | 4.5:1+ | AA |
| Input borders | 3:1+ | AA |

### Checking Contrast

Test your customizations with these tools:

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Colour Contrast Analyser](https://www.tpgi.com/color-contrast-checker/)
- Chrome DevTools (Lighthouse audit)

### Dark Mode Contrast

Dark mode maintains equivalent contrast ratios:

```css
/* Light mode */
.text-slate-900 { color: #0f172a; } /* on white: 15.4:1 */

/* Dark mode */
.dark .text-white { color: #ffffff; } /* on #0f172a: 15.4:1 */
```

## Focus Management

### Focus Visibility

All interactive elements have visible focus states:

```css
*:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}
```

### Focus Trapping

Modal dialogs trap focus to prevent tabbing outside:

```javascript
// Focus is contained within the modal
modal.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    // Handle focus wrap
  }
});
```

### Skip Links

Add skip links for keyboard users:

```html
<a href="#main-content" class="skip-link">
  Skip to main content
</a>

<main id="main-content">
  <!-- Page content -->
</main>
```

```css
.skip-link {
  position: absolute;
  left: -9999px;
  z-index: 999;
  padding: 1rem;
  background: white;
}

.skip-link:focus {
  left: 0;
}
```

### Implementing Skip Links

Add to your layout's `<body>`:

```html
{% raw %}<body>
  <a href="#main-content" class="skip-link">
    Skip to main content
  </a>
  <a href="#navigation" class="skip-link">
    Skip to navigation
  </a>

  <nav id="navigation">...</nav>
  <main id="main-content">{{ content }}</main>
</body>{% endraw %}
```

## Motion Preferences

### Reduced Motion

The theme respects `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Disabling Animations

Users can disable animations in their system settings:

- **macOS**: System Preferences > Accessibility > Display > Reduce motion
- **Windows**: Settings > Ease of Access > Display > Show animations
- **iOS**: Settings > Accessibility > Motion > Reduce Motion

## Testing Accessibility

### Automated Testing

Run these checks on your site:

1. **Lighthouse** (Chrome DevTools)
   - Open DevTools > Lighthouse tab
   - Select "Accessibility" category
   - Run audit

2. **axe DevTools** (Browser extension)
   - Install axe extension
   - Run analysis on each page

3. **WAVE** (Web Accessibility Evaluation Tool)
   - Visit wave.webaim.org
   - Enter your page URL

### Manual Testing

1. **Keyboard navigation**
   - Tab through all interactive elements
   - Verify focus is visible
   - Test all keyboard shortcuts

2. **Screen reader testing**
   - Navigate with screen reader only
   - Verify announcements make sense
   - Check form labels and errors

3. **Zoom testing**
   - Zoom to 200%
   - Verify layout is usable
   - Check text doesn't overflow

### Accessibility Checklist

- [ ] All images have alt text
- [ ] Links have descriptive text
- [ ] Form inputs have labels
- [ ] Color is not the only indicator
- [ ] Headings are hierarchical
- [ ] Focus is visible
- [ ] Modals trap focus
- [ ] Animations respect reduced motion
- [ ] Contrast ratios meet WCAG AA
- [ ] Skip links are available

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WAI-ARIA Practices](https://www.w3.org/WAI/ARIA/apg/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [A11Y Project Checklist](https://www.a11yproject.com/checklist/)

## Next Steps

- Review the [Customization Guide](/docs/customization/) for accessible styling
- Check the [Components Guide](/docs/components/) for component usage
- See the [Troubleshooting Guide](/docs/troubleshooting/) for common issues
