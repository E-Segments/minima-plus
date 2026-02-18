<div align="center">

# ✨ Minima+ ✨

### A beautiful, minimal Jekyll theme powered by Tailwind CSS v4

The next evolution of Jekyll's classic Minima theme — now with dark mode, search, pagination, and zero build steps.

[![Jekyll](https://img.shields.io/badge/Jekyll-4.3+-CC0000?style=for-the-badge&logo=jekyll&logoColor=white)](https://jekyllrb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Ready-222?style=for-the-badge&logo=github&logoColor=white)](https://pages.github.com/)

[**🌐 Live Demo**](https://e-segments.github.io/minima-plus/) • [**📖 Documentation**](https://e-segments.github.io/minima-plus/docs/) • [**📋 Changelog**](https://e-segments.github.io/minima-plus/changelog/)

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
| **🔍 Search (Lunr.js)** | ❌ | ✅ |
| **📄 Pagination** | ❌ | ✅ |
| **📋 Changelog** | ❌ | ✅ |
| **🏷️ Badges** | ❌ | ✅ |
| **📊 Stats Counter** | ❌ | ✅ |
| **🗂️ Tabs & Accordions** | ❌ | ✅ |
| **📚 Versioned Docs** | ❌ | ✅ |
| **📡 API Reference** | ❌ | ✅ |
| **💻 CLI Reference** | ❌ | ✅ |
| **🚫 404 Page** | ⚠️ Basic | ✅ Animated |
| **🚀 Coming Soon** | ❌ | ✅ |
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
- 🚫 **Animated 404** — Creative error page
- 🚀 **Coming Soon** — Pre-launch landing page

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
- 📚 **Documentation** — Sidebar + versioning
- 📡 **API Reference** — REST endpoint docs
- 💻 **CLI Reference** — Command documentation
- 🔍 **Search** — Lunr.js powered, Cmd+K shortcut
- 📋 **Changelog** — Auto-fetch from GitHub releases

</td>
<td width="50%">

### 🛠️ Developer Experience
- ⚙️ **Configurable** — Everything in `_config.yml`
- 📄 **Pagination** — For blog, docs, and releases
- 🏷️ **Badges** — Shields.io integration
- 📊 **Stats Counter** — Animated number counters
- 🗂️ **Tabs & Accordions** — Interactive components
- 🤖 **Auto Deploy** — GitHub Actions included

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

### 📦 Adding to Existing Repo? Use Remote Theme!

**Step 1:** Create `docs/_config.yml`:
```yaml
remote_theme: E-Segments/minima-plus
baseurl: "/your-repo-name"

title: "My Project"
description: "Documentation for my awesome project"
github_repo: "username/repo"  # For changelog

theme_config:
  colors:
    primary: "emerald"
  features:
    search: true
```

**Step 2:** Create `docs/Gemfile`:
```ruby
source "https://rubygems.org"
gem "jekyll", "~> 4.3"
gem "jekyll-remote-theme"
gem "jekyll-paginate-v2"
```

**Step 3:** Enable GitHub Pages:
> **Settings** → **Pages** → **Branch:** `main` → **Folder:** `/docs`

**Step 4 (Optional):** Add 404 and Coming Soon pages:

Create `docs/404.html`:
```yaml
---
layout: 404
title: "Page not found"
permalink: /404.html
---
```

Create `docs/coming-soon.html` (for pre-launch):
```yaml
---
layout: coming-soon
title: "Coming Soon"
headline: "Something Amazing is Coming"
launch_date: "2025-06-01T00:00:00"
permalink: /coming-soon/
---
```

<div class="callout callout-info">
  <strong>Note:</strong> When using <code>remote_theme</code>, layouts like <code>404</code>, <code>coming-soon</code>, <code>api</code>, and <code>cli</code> are automatically available from the theme.
</div>

---

## 🆕 New Features

### 🔍 Search (Cmd+K)

Full-text search across posts, docs, and pages powered by Lunr.js.

- Press `Cmd+K` (Mac) or `Ctrl+K` (Windows/Linux) to open
- Filter by content type (All / Posts / Docs)
- Keyboard navigation with arrow keys
- Recent searches saved locally

Enable in `_config.yml`:
```yaml
theme_config:
  features:
    search: true
```

### 📄 Pagination

Built-in pagination for blog posts using jekyll-paginate-v2.

- Configurable posts per page
- Previous/Next navigation
- Page numbers with ellipsis
- "Showing X-Y of Z" counter

Configure in `_config.yml`:
```yaml
pagination:
  enabled: true
  per_page: 6
  permalink: '/page/:num/'
```

### 📋 Changelog

Auto-fetch releases from GitHub API with search and filtering.

- Pulls releases from your GitHub repo
- Search and filter releases
- Version badges and download links
- Markdown release notes rendered

Set your repo in `_config.yml`:
```yaml
github_repo: "username/repo"
```

Then create `changelog.md`:
```yaml
---
layout: changelog
title: Changelog
permalink: /changelog/
---
```

### 🏷️ Badges (Shields.io)

Easy badge integration with Shields.io and Badgen.net.

```liquid
{% include components/badge.html
   label="Jekyll"
   message="4.3+"
   color="CC0000"
   logo="jekyll"
   style="for-the-badge"
%}

{% include components/badge.html
   type="github/v/release"
   repo="E-Segments/minima-plus"
   style="flat-square"
%}
```

Or use badge groups from data:
```liquid
{% include components/badge-group.html badges=site.data.badges.theme %}
```

### 📊 Stats Counter

Animated number counters that count up when scrolled into view.

```liquid
{% include components/stats-counter.html
   stats="10K+:Downloads,500+:Stars,50+:Contributors,99%:Satisfaction"
   style="cards"
   columns=4
%}
```

Or use data arrays:
```yaml
# In front matter
stats:
  - value: 10000
    label: "Downloads"
    suffix: "+"
  - value: 99.9
    label: "Uptime"
    suffix: "%"
    decimals: 1
```

Styles: `default`, `cards`, `minimal`

### 🗂️ Tabs & Accordions

Interactive tabbed content and collapsible sections.

**Tabs:**
```liquid
{% include components/tabs.html id="demo" tabs="HTML,CSS,JS" %}
<div data-tab-content="demo-0">HTML content</div>
<div data-tab-content="demo-1">CSS content</div>
<div data-tab-content="demo-2">JS content</div>
{% include components/tabs.html id="demo" end=true %}
```

**Accordion:**
```liquid
{% include components/accordion.html items=page.faq %}
```

With front matter:
```yaml
faq:
  - question: "What is Jekyll?"
    answer: "A static site generator."
  - question: "Is it free?"
    answer: "Yes, completely free."
```

Styles: `default`, `bordered`, `separated` | Tab styles: `underline`, `pills`

### 📚 Versioned Documentation

Support multiple documentation versions with a dropdown selector.

Configure in `_data/versions.yml`:
```yaml
current: "2.0"
versions:
  - number: "2.0"
    name: "v2.0 (Latest)"
    path: "/docs/"
    latest: true
  - number: "1.0"
    name: "v1.0"
    path: "/docs/v1/"
```

Features:
- Version dropdown in docs sidebar
- Warning banner for old versions
- Automatic "latest" detection
- localStorage preference saving

### 🚫 404 Error Page

Beautiful animated 404 page with:
- Gradient animated "404" text
- Floating particles background
- Built-in search box
- Auto-populated navigation suggestions
- Rotating fun error messages

**GitHub Pages automatically uses `404.html`** — no configuration needed!

Customize in `404.html`:
```yaml
---
layout: 404
title: "Page not found"
description: "Custom message here"
---
```

### 🚀 Coming Soon Page

Pre-launch landing page with countdown timer and email capture.

```yaml
---
layout: coming-soon
title: "Coming Soon"
headline: "Something Amazing is Coming"
tagline: "Sign up to be notified!"
launch_date: "2025-06-01T00:00:00"
social:
  - name: "Twitter"
    icon: "twitter"
    url: "https://twitter.com/handle"
  - name: "GitHub"
    icon: "github"
    url: "https://github.com/repo"
# form_action: "https://your-email-service.com/subscribe"
---
```

Features:
- Live countdown timer
- Email signup form
- Social links (Twitter, GitHub, LinkedIn, Instagram, Discord)
- Animated glowing background
- Mobile responsive

**Pre-launch tip:** Rename `coming-soon.html` to `index.html` until launch!

### 📡 API Reference Layout

Document REST APIs with method badges, parameters, and response codes.

```yaml
---
layout: api
title: API Reference
api_version: "v1"
base_url: "https://api.example.com/v1"
endpoints:
  - method: "GET"
    path: "/users"
    description: "List all users"
    auth: "required"
    params:
      - name: "page"
        type: "integer"
        in: "query"
    responses:
      - status: 200
        description: "Success"
---
```

Features:
- Method badges (GET, POST, PUT, DELETE)
- Parameter tables (query, path, body)
- Response status codes
- Sidebar navigation

### 💻 CLI Reference Layout

Document command-line tools with arguments, options, and examples.

```yaml
---
layout: cli
title: CLI Reference
cli_name: "mytool"
cli_version: "1.0.0"
commands:
  - name: "init"
    description: "Initialize a new project"
    usage: "mytool init [options]"
    options:
      - flag: "-f, --force"
        description: "Force overwrite"
    examples:
      - title: "Basic usage"
        code: "mytool init my-project"
---
```

Features:
- Command documentation
- Arguments and options tables
- Code examples with output
- Terminal-style headers

---

## 🎨 Color Themes

Change your entire site's color scheme with one line:

```yaml
theme_config:
  colors:
    primary: "indigo"  # Change this!
```

Available colors: `red`, `orange`, `amber`, `emerald`, `blue`, `violet`, `pink`, `rose`, `purple`, `cyan`, `teal`, `indigo`, `slate`, `gray`, `zinc`, `neutral`, `stone`, `yellow`, `lime`, `green`, `sky`, `fuchsia`

---

## 📁 Project Structure

```
your-site/
├── _config.yml          # Site configuration
├── _data/
│   ├── navigation.yml   # Header menu
│   ├── social.yml       # Social links
│   ├── footer.yml       # Footer columns
│   ├── badges.yml       # Badge definitions
│   └── versions.yml     # Doc versions
├── _docs/               # Documentation pages
├── _posts/              # Blog posts
├── _layouts/
│   ├── default.html     # Base layout
│   ├── post.html        # Blog post
│   ├── docs.html        # Documentation
│   ├── api.html         # API reference
│   ├── cli.html         # CLI reference
│   ├── changelog.html   # GitHub releases
│   ├── 404.html         # Error page
│   └── coming-soon.html # Pre-launch page
├── _includes/
│   ├── components/      # UI components
│   │   ├── badge.html
│   │   ├── badge-group.html
│   │   ├── card.html
│   │   ├── button.html
│   │   ├── tabs.html
│   │   ├── accordion.html
│   │   ├── stats-counter.html
│   │   ├── endpoint.html
│   │   ├── cli-command.html
│   │   └── version-selector.html
│   ├── search.html      # Search modal
│   └── pagination.html
├── assets/
│   ├── css/custom.css   # Custom styles
│   └── search.json      # Search index
├── blog/                # Blog listing
├── docs/                # Docs listing
├── api.md               # API docs example
├── cli.md               # CLI docs example
├── changelog.md         # Changelog page
├── coming-soon.html     # Coming soon page
├── 404.html             # 404 error page
└── index.html           # Homepage
```

---

## ⚙️ Configuration

Full `_config.yml` options:

```yaml
# Site Basics
title: "My Site"
description: "My awesome site"
author: "Your Name"
url: "https://username.github.io"
baseurl: "/repo-name"

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

# Analytics (optional)
analytics:
  google_analytics: "G-XXXXXXXXXX"
  plausible: "your-domain.com"
```

---

## 🧩 Components

### Badges

```liquid
{% include components/badge.html
   service="shields"
   type="github/stars"
   repo="E-Segments/minima-plus"
   style="for-the-badge"
%}
```

### Callouts

```html
<div class="callout callout-info">
  <strong>Pro Tip:</strong> This is helpful information!
</div>
```

### Cards Grid

```html
<div class="not-prose cards-grid">
  <a href="/docs/" class="card">
    <div class="card-title">Documentation</div>
    <div class="card-description">Learn how to use Minima+</div>
  </a>
</div>
```

### Steps List

```html
<ol class="steps">
  <li>First, do this</li>
  <li>Then, do that</li>
  <li>Finally, celebrate!</li>
</ol>
```

---

## 🚀 Deployment

### GitHub Pages (Automatic)

This template includes GitHub Actions for automatic deployment!

1. Go to **Settings** → **Pages**
2. Under **Build and deployment**, select **GitHub Actions**
3. Push to `main` branch
4. Your site deploys automatically!

### Custom Domain

1. Create a `CNAME` file with your domain
2. Configure DNS at your registrar
3. Enable **Enforce HTTPS** in Pages settings

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Report bugs
- Suggest features
- Submit pull requests

---

## 📄 License

MIT License — use it for anything! Free forever.

---

## 💖 Credits

Built with:

- [Jekyll](https://jekyllrb.com/) — Static site generator
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS
- [Lunr.js](https://lunrjs.com/) — Client-side search
- [Prism.js](https://prismjs.com/) — Syntax highlighting
- [Shields.io](https://shields.io/) — Badges
- [Heroicons](https://heroicons.com/) — Beautiful icons

---

<div align="center">

**Star this repo if you find it useful!**

Made with care by [E-Segments](https://github.com/E-Segments)

</div>
