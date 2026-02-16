---
title: "Configuration"
description: "Learn how to configure colors, fonts, and features"
order: 2
---

This guide covers all configuration options available in the theme.

## Site Settings

Basic site information is configured at the top of `_config.yml`:

```yaml
title: "My Site"
description: "A modern Jekyll theme"
url: "https://example.com"
baseurl: ""
author: "Your Name"
```

## Theme Colors

Change the primary color to match your brand:

```yaml
theme_config:
  colors:
    primary: "indigo"    # Try: blue, violet, emerald, rose
    secondary: "slate"
    accent: "amber"
```

### Available Colors

| Color | Preview | Best For |
|-------|---------|----------|
| indigo | Default | Tech, SaaS |
| blue | Classic | Corporate |
| emerald | Fresh | Health, Nature |
| rose | Warm | Creative, Fashion |
| amber | Bold | Energy, Food |

## Typography

Customize fonts for headings and body text:

```yaml
theme_config:
  fonts:
    heading: "Inter"
    body: "Inter"
    mono: "JetBrains Mono"
```

### Using Custom Fonts

To use a custom Google Font:

1. Add the font to `_includes/head.html`
2. Update the font name in `_config.yml`

## Layout Options

Control the overall layout:

```yaml
theme_config:
  layout:
    max_width: "6xl"      # Container width
    content_width: "3xl"  # Content area width
    sidebar: true         # Show sidebar in docs
```

## Component Visibility

Toggle various UI components:

```yaml
theme_config:
  components:
    show_toc: true           # Table of contents
    show_reading_time: true  # Reading time estimate
    show_date: true          # Post dates
    show_author: true        # Author names
    show_tags: true          # Post tags
    show_categories: true    # Post categories
```

## Features

Enable or disable theme features:

```yaml
theme_config:
  features:
    dark_mode: true      # Dark mode toggle
    search: false        # Search (coming soon)
    comments: false      # Comments (coming soon)
```

## SEO Configuration

Optimize for search engines:

```yaml
seo:
  og_image: "/assets/images/og-default.png"
  twitter_handle: "yourusername"
```

## Analytics

Add analytics tracking:

```yaml
analytics:
  google_analytics: "G-XXXXXXXXXX"
  plausible: "yourdomain.com"
```

## Next Steps

- Read the [Components Guide](/docs/components/) to learn about reusable components
- Check the [Deployment Guide](/docs/deployment/) for hosting options
