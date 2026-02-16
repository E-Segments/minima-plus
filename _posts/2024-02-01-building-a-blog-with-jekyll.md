---
title: "Building a Blog with Jekyll"
description: "A complete guide to creating a beautiful blog using Jekyll and GitHub Pages."
date: 2024-02-01
author: "Your Name"
categories: [Guide]
tags: [jekyll, blogging, github-pages]
---

Jekyll is a static site generator that transforms your plain text into beautiful websites. Let's learn how to build a blog from scratch.

## Why Jekyll?

Jekyll offers several advantages for blogging:

- **No database required** - Everything is files
- **Version control** - Track changes with Git
- **Free hosting** - Deploy to GitHub Pages
- **Markdown support** - Write in plain text
- **Fast performance** - Static files are speedy

## Project Structure

A typical Jekyll blog has this structure:

```
my-blog/
├── _config.yml      # Site configuration
├── _posts/          # Blog posts
├── _layouts/        # Page templates
├── _includes/       # Reusable components
├── assets/          # CSS, JS, images
└── index.html       # Homepage
```

## Writing Posts

Create posts in the `_posts` folder with this naming convention:

```
YYYY-MM-DD-title-of-post.md
```

### Front Matter

Every post starts with YAML front matter:

```yaml
---
title: "My First Post"
date: 2024-02-01
categories: [Tutorial]
tags: [jekyll, beginner]
---
```

### Content

Write your content in Markdown below the front matter. Jekyll converts it to HTML automatically.

## Layouts

Layouts define the structure of your pages. Here's a simple post layout:

```html
---
layout: default
---

<article>
  <h1>{{ page.title }}</h1>
  <time>{{ page.date | date: "%B %d, %Y" }}</time>
  {{ content }}
</article>
```

## Categories and Tags

Organize posts with categories and tags:

| Feature | Purpose |
|---------|---------|
| Categories | Broad groupings (Tutorial, News) |
| Tags | Specific topics (jekyll, css) |

## Local Development

Run your site locally:

```bash
bundle exec jekyll serve
```

Visit `http://localhost:4000` to preview.

## Deployment

Push to GitHub and enable GitHub Pages:

<ol class="steps">
  <li>Create a repository named <code>username.github.io</code></li>
  <li>Push your Jekyll site</li>
  <li>Enable GitHub Pages in Settings</li>
  <li>Your blog is live!</li>
</ol>

## Conclusion

Jekyll makes blogging simple and enjoyable. Start writing and let Jekyll handle the rest!
