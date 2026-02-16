<div align="center">

# ✨ Minima+ ✨

### A beautiful, minimal Jekyll theme powered by Tailwind CSS v4

The next evolution of Jekyll's classic Minima theme — now with dark mode, modern design, and zero build steps.

[![Jekyll](https://img.shields.io/badge/Jekyll-4.3+-CC0000?style=for-the-badge&logo=jekyll&logoColor=white)](https://jekyllrb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Ready-222?style=for-the-badge&logo=github&logoColor=white)](https://pages.github.com/)

[**🌐 Live Demo**](https://e-segments.github.io/minima-plus/) • [**📖 Documentation**](https://e-segments.github.io/minima-plus/docs/) • [**🚀 Get Started**](#-quick-start)

<br>

<img src="https://via.placeholder.com/800x400/4F46E5/FFFFFF?text=Minima%2B+Preview" alt="Minima+ Preview" width="100%" style="border-radius: 12px;">

</div>

---

## 🎯 Why Minima+?

| Feature | Minima (Classic) | Minima+ |
|---------|:----------------:|:-------:|
| Dark Mode | ❌ | ✅ |
| Tailwind CSS | ❌ | ✅ |
| No Build Step | ✅ | ✅ |
| Responsive | ⚠️ Basic | ✅ Full |
| Blog + Docs | ⚠️ Blog only | ✅ Both |
| Syntax Highlighting | ⚠️ Rouge | ✅ Prism.js |
| Copy Code Button | ❌ | ✅ |
| Table of Contents | ❌ | ✅ |
| SEO Optimized | ⚠️ Basic | ✅ Full |

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎨 Design
- 🌈 **16 Color Themes** — One line config change
- 🌙 **Dark Mode** — Auto-detects system preference
- 📱 **Fully Responsive** — Mobile-first design
- ✏️ **Beautiful Typography** — Tailwind's prose classes

</td>
<td width="50%">

### ⚡ Performance
- 🚀 **No Build Step** — Tailwind via CDN
- 📦 **Static Output** — Lightning fast
- 🔍 **SEO Ready** — Meta tags, sitemap, Open Graph
- ♿ **Accessible** — WCAG compliant

</td>
</tr>
<tr>
<td width="50%">

### 📝 Content
- 📰 **Blog Ready** — Categories, tags, reading time
- 📚 **Documentation** — Sidebar + table of contents
- 🎯 **Components** — Cards, callouts, steps
- 🖨️ **Code Blocks** — Prism.js + copy button

</td>
<td width="50%">

### 🛠️ Developer Experience
- ⚙️ **Configurable** — Everything in `_config.yml`
- 🔌 **Remote Theme** — Use in existing repos
- 🤖 **Auto Deploy** — GitHub Actions included
- 📄 **MIT License** — Use anywhere, free forever

</td>
</tr>
</table>

---

## 🚀 Quick Start

### 🆕 Starting Fresh? Use the Template!

<a href="https://github.com/E-Segments/minima-plus/generate">
  <img src="https://img.shields.io/badge/Use_This_Template-238636?style=for-the-badge&logo=github&logoColor=white" alt="Use Template">
</a>

1. Click **"Use this template"** above
2. Name your repo `username.github.io` (for personal site) or any name
3. Clone → Edit `_config.yml` → Push
4. 🎉 Your site is live!

---

### 📁 Adding Docs to Existing Repo? Use Remote Theme!

Perfect for adding beautiful documentation to your code projects.

**Step 1:** Create `docs/_config.yml`:
```yaml
remote_theme: E-Segments/minima-plus
baseurl: "/your-repo-name"

title: "My Project"
description: "Documentation for my awesome project"

theme_config:
  colors:
    primary: "emerald"  # 🎨 Pick your color!
```

**Step 2:** Create `docs/Gemfile`:
```ruby
source "https://rubygems.org"
gem "jekyll", "~> 4.3"
gem "jekyll-remote-theme"
```

**Step 3:** Create `docs/index.md`:
```markdown
---
layout: landing
---

# Welcome to My Project! 👋

Your awesome landing page content here...
```

**Step 4:** Enable GitHub Pages:
> **Settings** → **Pages** → **Branch:** `main` → **Folder:** `/docs`

✅ Done! Your docs site will be at `https://username.github.io/your-repo/`

---

## 🎨 Color Themes

Change your entire site's color scheme with one line:

```yaml
theme_config:
  colors:
    primary: "indigo"  # 👈 Change this!
```

<table>
<tr>
<td>🔴 <code>red</code></td>
<td>🟠 <code>orange</code></td>
<td>🟡 <code>amber</code></td>
<td>🟢 <code>emerald</code></td>
<td>🔵 <code>blue</code></td>
<td>🟣 <code>violet</code></td>
</tr>
<tr>
<td>💗 <code>pink</code></td>
<td>🌹 <code>rose</code></td>
<td>💜 <code>purple</code></td>
<td>🩵 <code>cyan</code></td>
<td>🌊 <code>teal</code></td>
<td>💙 <code>indigo</code></td>
</tr>
</table>

Plus: `slate`, `gray`, `zinc`, `neutral`, `stone`, `yellow`, `lime`, `green`, `sky`, `fuchsia`

---

## 📁 Project Structure

```
📦 your-site/
├── 📄 _config.yml        # ⚙️ Site configuration
├── 📁 _data/
│   ├── 📄 navigation.yml # 🧭 Header menu
│   ├── 📄 social.yml     # 🔗 Social links
│   └── 📄 footer.yml     # 📋 Footer columns
├── 📁 _docs/             # 📚 Documentation pages
├── 📁 _posts/            # 📰 Blog posts
├── 📁 _layouts/          # 🖼️ Page templates
├── 📁 _includes/         # 🧩 Reusable components
├── 📁 assets/css/        # 🎨 Custom styles
├── 📁 blog/              # 📰 Blog listing
├── 📁 docs/              # 📚 Docs listing
└── 📄 index.html         # 🏠 Homepage
```

---

## 📝 Writing Content

### 📰 Blog Posts

Create `_posts/2024-01-15-my-post.md`:

```markdown
---
title: "My Awesome Post 🚀"
description: "A brief description of the post"
date: 2024-01-15
author: "Your Name"
categories: [Tutorial]
tags: [jekyll, blogging]
image: /assets/images/post-cover.jpg  # Optional
---

Your content here! Supports **Markdown** and HTML.
```

### 📚 Documentation

Create `_docs/getting-started.md`:

```markdown
---
title: "Getting Started"
description: "Learn how to get started"
order: 1  # 👈 Controls sidebar order
---

## Installation

Step-by-step guide here...
```

---

## 🧩 Components

### 💬 Callouts

```html
<div class="callout callout-info">
  💡 <strong>Pro Tip:</strong> This is helpful information!
</div>

<div class="callout callout-warning">
  ⚠️ <strong>Warning:</strong> Be careful with this!
</div>

<div class="callout callout-success">
  ✅ <strong>Success:</strong> You did it!
</div>

<div class="callout callout-danger">
  🚨 <strong>Danger:</strong> Don't do this!
</div>
```

### 📋 Steps List

```html
<ol class="steps">
  <li>First, do this</li>
  <li>Then, do that</li>
  <li>Finally, celebrate! 🎉</li>
</ol>
```

### 🃏 Cards Grid

```html
<div class="not-prose cards-grid">
  <a href="/docs/" class="card">
    <div class="card-title">📚 Documentation</div>
    <div class="card-description">Learn how to use Minima+</div>
  </a>
  <a href="/blog/" class="card">
    <div class="card-title">📰 Blog</div>
    <div class="card-description">Read our latest posts</div>
  </a>
</div>
```

---

## ⚙️ Configuration

Full `_config.yml` options:

```yaml
# 🏷️ Site Basics
title: "My Site"
description: "My awesome site"
author: "Your Name"
url: "https://username.github.io"
baseurl: "/repo-name"  # Leave empty for user sites

# 🎨 Theme Configuration
theme_config:
  colors:
    primary: "indigo"      # Main color
    secondary: "slate"     # Secondary color
    accent: "amber"        # Accent color

  components:
    show_toc: true         # 📑 Table of contents
    show_reading_time: true # ⏱️ Reading time
    show_date: true        # 📅 Post dates
    show_author: true      # 👤 Author names
    show_tags: true        # 🏷️ Post tags
    show_categories: true  # 📁 Categories

  features:
    dark_mode: true        # 🌙 Dark mode toggle

# 📊 Analytics (optional)
analytics:
  google_analytics: "G-XXXXXXXXXX"
  plausible: "your-domain.com"
```

---

## 🚀 Deployment

### GitHub Pages (Automatic) ✨

This template includes GitHub Actions for automatic deployment!

1. Go to **Settings** → **Pages**
2. Under **Build and deployment**, select **GitHub Actions**
3. Push to `main` branch
4. 🎉 Your site deploys automatically!

### Custom Domain 🌐

1. Create a `CNAME` file:
   ```
   yourdomain.com
   ```
2. Configure DNS at your registrar
3. Enable **Enforce HTTPS** in Pages settings

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

- 🐛 Report bugs
- 💡 Suggest features
- 🔧 Submit pull requests

---

## 📄 License

MIT License — use it for anything! Free forever. ❤️

---

## 🙏 Credits

Built with love using:

- [Jekyll](https://jekyllrb.com/) — Static site generator
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS
- [Prism.js](https://prismjs.com/) — Syntax highlighting
- [Heroicons](https://heroicons.com/) — Beautiful icons

---

<div align="center">

**⭐ Star this repo if you find it useful! ⭐**

Made with ❤️ by [E-Segments](https://github.com/E-Segments)

</div>
