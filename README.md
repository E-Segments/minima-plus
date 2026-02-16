# Minima+

A minimal, modern Jekyll theme with Tailwind CSS v4. The next evolution of Jekyll's classic Minima theme.

![Jekyll](https://img.shields.io/badge/Jekyll-4.3-red?logo=jekyll)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-38B2AC?logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- 🎨 **Tailwind CSS v4** via CDN (no build step required)
- 🌙 **Dark Mode** with system preference detection and toggle
- 📱 **Fully Responsive** - looks great on all devices
- ⚡ **Fast** - static site, no JavaScript frameworks
- 🔍 **SEO Optimized** - meta tags, Open Graph, sitemap
- 📝 **Blog Ready** - posts with categories, tags, reading time
- 📚 **Documentation** - sidebar navigation, table of contents
- 🎯 **Customizable** - colors, fonts, layout via `_config.yml`
- 🖨️ **Prism.js** - syntax highlighting with copy button
- ♿ **Accessible** - semantic HTML, focus states, ARIA labels

## 🚀 Quick Start

### Use This Template

1. Click the **"Use this template"** button above
2. Name your repository (e.g., `username.github.io` for user site)
3. Clone your new repository
4. Edit `_config.yml` with your details
5. Push changes - GitHub Actions will deploy automatically!

### Local Development

```bash
# Clone your repository
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO

# Install dependencies
bundle install

# Start local server
bundle exec jekyll serve

# Open http://localhost:4000
```

## 📁 Project Structure

```
├── _config.yml          # Site configuration
├── _data/
│   ├── navigation.yml   # Header navigation
│   ├── social.yml       # Social media links
│   └── footer.yml       # Footer columns
├── _docs/               # Documentation pages
├── _posts/              # Blog posts
├── _layouts/            # Page templates
├── _includes/           # Reusable components
├── assets/css/          # Custom CSS
├── blog/                # Blog listing page
├── docs/                # Docs listing page
└── index.html           # Homepage
```

## ⚙️ Configuration

Edit `_config.yml` to customize your site:

```yaml
# Site basics
title: "My Site"
description: "Your site description"
author: "Your Name"

# Theme Configuration
theme_config:
  colors:
    primary: "indigo"    # indigo, blue, emerald, rose, amber, etc.

  components:
    show_toc: true       # Table of contents
    show_reading_time: true
    show_date: true
    show_author: true
    show_tags: true

  features:
    dark_mode: true
```

### Available Colors

`slate`, `gray`, `zinc`, `neutral`, `stone`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`

## 📝 Creating Content

### Blog Posts

Create files in `_posts/` with this format:

```markdown
---
title: "My First Post"
description: "A brief description"
date: 2024-01-15
author: "Your Name"
categories: [Tutorial]
tags: [jekyll, blogging]
---

Your content here...
```

### Documentation

Create files in `_docs/` with:

```markdown
---
title: "Getting Started"
description: "How to get started"
order: 1
---

Your docs content...
```

## 🎨 Components

### Callouts

```html
<div class="callout callout-info">
  <strong>Note:</strong> This is an info callout.
</div>

<div class="callout callout-warning">
  <strong>Warning:</strong> This is a warning callout.
</div>

<div class="callout callout-success">
  <strong>Success:</strong> This is a success callout.
</div>

<div class="callout callout-danger">
  <strong>Danger:</strong> This is a danger callout.
</div>
```

### Steps List

```html
<ol class="steps">
  <li>First step</li>
  <li>Second step</li>
  <li>Third step</li>
</ol>
```

### Cards Grid

```html
<div class="not-prose cards-grid">
  <a href="/link" class="card">
    <div class="card-title">Card Title</div>
    <div class="card-description">Card description goes here.</div>
  </a>
</div>
```

## 🚀 Deployment

### GitHub Pages (Automatic)

This template includes a GitHub Actions workflow that automatically builds and deploys your site when you push to the `main` branch.

1. Go to your repository **Settings** → **Pages**
2. Under **Build and deployment**, select **GitHub Actions**
3. Push to `main` branch - your site will deploy!

### Custom Domain

1. Add a `CNAME` file with your domain:
   ```
   example.com
   ```
2. Configure DNS with your registrar
3. Enable HTTPS in GitHub Pages settings

## 📄 License

MIT License - feel free to use this template for any project!

## 🙏 Credits

- [Jekyll](https://jekyllrb.com/) - Static site generator
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Prism.js](https://prismjs.com/) - Syntax highlighting
