---
title: "Getting Started"
description: "Learn how to install and configure the Jekyll theme"
order: 1
parent: "Getting Started"
version: "2.1"
---

This guide will help you get started with this Jekyll theme in just a few minutes.

## Prerequisites

Before you begin, make sure you have the following installed:

- Ruby 3.0 or higher
- Bundler gem (`gem install bundler`)
- Git

## Installation

1. Clone or download this repository:

```bash
git clone https://github.com/username/repo.git
cd repo
```

2. Install dependencies:

```bash
bundle install
```

3. Start the development server:

```bash
bundle exec jekyll serve
```

4. Open your browser and visit [http://localhost:4000](http://localhost:4000)

## Configuration

All theme settings are in `_config.yml`. Here are the main options:

### Site Settings

```yaml
title: "My Site"
description: "Site description"
url: "https://example.com"
```

### Theme Configuration

```yaml
theme_config:
  colors:
    primary: "indigo"    # Primary color (Tailwind color name)
    secondary: "slate"   # Secondary color
    accent: "amber"      # Accent color

  fonts:
    heading: "Inter"     # Font for headings
    body: "Inter"        # Font for body text
    mono: "JetBrains Mono"  # Font for code

  layout:
    max_width: "6xl"     # Max width for containers
    content_width: "3xl" # Max width for content
    sidebar: true        # Show sidebar in docs

  components:
    show_toc: true           # Table of contents
    show_reading_time: true  # Reading time estimate
    show_date: true          # Post dates
    show_author: true        # Author names
    show_tags: true          # Post tags
    show_categories: true    # Post categories

  features:
    dark_mode: true      # Enable dark mode toggle
```

## Adding Content

### Blog Posts

Create new blog posts in the `_posts` directory:

```markdown
---
title: "My New Post"
description: "Post description"
date: 2024-01-15
categories: [Category]
tags: [tag1, tag2]
---

Your content here...
```

### Documentation

Create documentation pages in the `_docs` directory:

```markdown
---
title: "Page Title"
description: "Page description"
order: 1
---

Your documentation content...
```

## Using Components

### Cards

```liquid
{% raw %}{% include components/card.html
   title="Card Title"
   description="Card description"
   link="/path"
   link_text="Learn more"
%}{% endraw %}
```

### Buttons

```liquid
{% raw %}{% include components/button.html
   text="Click me"
   link="/path"
   style="primary"
   size="md"
%}{% endraw %}
```

### Alerts

```liquid
{% raw %}{% include components/alert.html
   type="info"
   title="Note"
   content="This is an info alert."
%}{% endraw %}
```

## Deployment

### GitHub Pages

1. Push your site to a GitHub repository
2. Go to Settings > Pages
3. Select the branch to deploy from
4. Your site will be live at `https://username.github.io/repo`

### Other Platforms

This theme works with any platform that supports Jekyll:

- Netlify
- Vercel
- Cloudflare Pages
- Any static hosting

## Next Steps

- Customize the colors and fonts in `_config.yml`
- Update the navigation in `_data/navigation.yml`
- Add your social links in `_data/social.yml`
- Start writing content!
