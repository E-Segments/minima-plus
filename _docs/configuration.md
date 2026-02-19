---
title: "Configuration"
description: "Learn how to configure colors, fonts, and features"
order: 4
parent: "Getting Started"
version: "2.1"
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

# GitHub repository (for changelog)
github_repo: "username/repo"
```

## Plugins

Required plugins for all features:

```yaml
plugins:
  - jekyll-feed
  - jekyll-seo-tag
  - jekyll-sitemap
  - jekyll-paginate-v2
```

## Pagination

Configure blog pagination:

```yaml
pagination:
  enabled: true
  per_page: 6
  permalink: '/page/:num/'
  sort_field: 'date'
  sort_reverse: true
  trail:
    before: 2
    after: 2

autopages:
  enabled: true
  collections:
    enabled: false
  categories:
    enabled: false
  tags:
    enabled: false
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
| violet | Modern | Design, Creative |
| amber | Bold | Energy, Food |
| cyan | Tech | Developer tools |
| teal | Calm | Health, Wellness |

Full list: `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`, `slate`, `gray`, `zinc`, `neutral`, `stone`

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
    search: true         # Lunr.js search (Cmd+K)
    comments: false      # Comments (coming soon)
```

### Search

When search is enabled:
- A search button appears in the header
- Press `Cmd+K` (Mac) or `Ctrl+K` (Windows) to open
- Searches posts, docs, and pages

### Dark Mode

When dark mode is enabled:
- A toggle appears in the header
- User preference saved to localStorage
- Falls back to system preference

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

## Full Example

Here's a complete `_config.yml`:

```yaml
# Site basics
title: "My Site"
description: "A modern Jekyll theme"
url: "https://username.github.io"
baseurl: "/repo-name"
author: "Your Name"

# GitHub repo for changelog
github_repo: "username/repo"

# Plugins
plugins:
  - jekyll-feed
  - jekyll-seo-tag
  - jekyll-sitemap
  - jekyll-paginate-v2

# Pagination
pagination:
  enabled: true
  per_page: 6
  permalink: '/page/:num/'

# Theme Configuration
theme_config:
  colors:
    primary: "indigo"
    secondary: "slate"
    accent: "amber"

  fonts:
    heading: "Inter"
    body: "Inter"
    mono: "JetBrains Mono"

  layout:
    max_width: "6xl"
    content_width: "3xl"
    sidebar: true

  components:
    show_toc: true
    show_reading_time: true
    show_date: true
    show_author: true
    show_tags: true
    show_categories: true

  features:
    dark_mode: true
    search: true

# SEO
seo:
  og_image: "/assets/images/og-default.png"
  twitter_handle: ""

# Analytics
analytics:
  google_analytics: ""
  plausible: ""
```

## Next Steps

- Read the [Features Guide](/docs/features/) to learn about search, pagination, and changelog
- Check the [Components Guide](/docs/components/) to learn about reusable components
- See the [Deployment Guide](/docs/deployment/) for hosting options
