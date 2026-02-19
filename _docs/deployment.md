---
title: "Deployment"
description: "Deploy your site to GitHub Pages, Netlify, or Vercel"
order: 5
parent: "Getting Started"
version: "2.1"
---

This guide covers deploying your Jekyll site to various hosting platforms.

## Prerequisites

Make sure your `Gemfile` includes all required plugins:

```ruby
source "https://rubygems.org"

gem "jekyll", "~> 4.3"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.17"
  gem "jekyll-seo-tag", "~> 2.8"
  gem "jekyll-sitemap", "~> 1.4"
  gem "jekyll-paginate-v2", "~> 3.0"
end
```

## GitHub Pages

The easiest way to deploy is with GitHub Pages.

### Setup Steps

<ol class="steps">
  <li>Push your code to a GitHub repository</li>
  <li>Go to Settings → Pages</li>
  <li>Select your branch (usually <code>main</code>)</li>
  <li>Your site will be live at <code>username.github.io/repo</code></li>
</ol>

### Using Remote Theme

If you're adding Minima+ to an existing repo using `remote_theme`, create these files in your docs folder:

**docs/_config.yml:**
```yaml
remote_theme: E-Segments/minima-plus
baseurl: "/your-repo-name"
plugins:
  - jekyll-remote-theme
  - jekyll-paginate-v2
```

**docs/404.html** (Custom 404 page):
```yaml
---
layout: 404
title: "Page not found"
permalink: /404.html
---
```

**docs/coming-soon.html** (Optional pre-launch page):
```yaml
---
layout: coming-soon
title: "Coming Soon"
headline: "Launching Soon!"
launch_date: "2025-06-01T00:00:00"
permalink: /coming-soon/
---
```

<div class="callout callout-success">
  <strong>Tip:</strong> All layouts (<code>404</code>, <code>coming-soon</code>, <code>api</code>, <code>cli</code>, <code>changelog</code>) are automatically available when using <code>remote_theme</code>.
</div>

### Custom Domain

To use a custom domain:

1. Add a `CNAME` file with your domain
2. Configure DNS with your registrar
3. Enable HTTPS in GitHub Pages settings

```
example.com
```

<div class="callout callout-info">
  <strong>Note:</strong> DNS changes can take up to 48 hours to propagate.
</div>

## Netlify

Netlify offers more features like form handling and serverless functions.

### Deploy Steps

<ol class="steps">
  <li>Connect your GitHub repository to Netlify</li>
  <li>Set build command: <code>jekyll build</code></li>
  <li>Set publish directory: <code>_site</code></li>
  <li>Deploy!</li>
</ol>

### Environment Variables

Add these in Netlify's dashboard:

```
JEKYLL_ENV=production
```

### netlify.toml

Create a `netlify.toml` for build configuration:

```toml
[build]
  command = "jekyll build"
  publish = "_site"

[build.environment]
  JEKYLL_ENV = "production"

[[redirects]]
  from = "/*"
  to = "/404.html"
  status = 404
```

## Vercel

Vercel is great for performance and global CDN.

### Setup

<ol class="steps">
  <li>Import your repository in Vercel</li>
  <li>Select "Jekyll" as the framework</li>
  <li>Deploy</li>
</ol>

### vercel.json

```json
{
  "buildCommand": "jekyll build",
  "outputDirectory": "_site"
}
```

## Cloudflare Pages

Fast and free hosting with Cloudflare's network.

### Configuration

- **Build command:** `jekyll build`
- **Build output:** `_site`
- **Environment variable:** `JEKYLL_ENV=production`

## Performance Tips

### Enable Compression

Add to your web server config or use a CDN.

### Optimize Images

Use modern formats like WebP:

```html
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description">
</picture>
```

### Caching Headers

Example for Netlify (`_headers` file):

```
/assets/*
  Cache-Control: public, max-age=31536000
```

## Custom 404 Page

Minima+ includes a beautiful, animated 404 error page that works automatically with GitHub Pages.

### How It Works

GitHub Pages automatically serves `404.html` from your site root when a page is not found. The theme includes this file pre-configured.

### Customizing 404

Edit `404.html` to customize the error page:

```yaml
---
layout: 404
title: "Page not found"
description: "Custom description here"
permalink: /404.html
suggestions:  # Optional: override navigation suggestions
  - title: "Home"
    url: "/"
  - title: "Docs"
    url: "/docs/"
---
```

### 404 for Other Platforms

**Netlify:** Add to `netlify.toml`:
```toml
[[redirects]]
  from = "/*"
  to = "/404.html"
  status = 404
```

**Vercel:** Add to `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/((?!assets|api).*)", "destination": "/404.html" }
  ]
}
```

**Cloudflare Pages:** Automatically uses `404.html` from root.

---

## Coming Soon / Maintenance Page

Use the Coming Soon page for pre-launch or maintenance mode.

### Setup

The theme includes `coming-soon.html` ready to use:

```yaml
---
layout: coming-soon
title: "Coming Soon"
headline: "Something Amazing is Coming"
tagline: "We're working hard to bring you something special."
launch_date: "2025-06-01T00:00:00"
social:
  - name: "Twitter"
    icon: "twitter"
    url: "https://twitter.com/handle"
  - name: "GitHub"
    icon: "github"
    url: "https://github.com/repo"
---
```

### Using as Homepage (Pre-Launch)

To make Coming Soon your homepage temporarily:

**Option 1:** Rename files
```bash
mv index.html index-backup.html
mv coming-soon.html index.html
```

**Option 2:** Change permalink in `coming-soon.html`:
```yaml
---
layout: coming-soon
permalink: /
---
```

### GitHub Pages Pre-Launch Strategy

<ol class="steps">
  <li>Create a <code>prelaunch</code> branch from <code>main</code></li>
  <li>On <code>prelaunch</code>, set Coming Soon as the index</li>
  <li>Deploy <code>prelaunch</code> branch to GitHub Pages</li>
  <li>When ready, switch Pages to deploy from <code>main</code></li>
</ol>

### Email Collection

By default, emails are stored in browser localStorage (demo mode). For production, connect to an email service:

```yaml
# coming-soon.html front matter
form_action: "https://buttondown.email/api/emails/embed-subscribe/newsletter"
# Or Mailchimp, ConvertKit, etc.
```

<div class="callout callout-info">
  <strong>Tip:</strong> Set <code>noindex: true</code> in front matter to prevent search engines from indexing your Coming Soon page.
</div>

---

## Troubleshooting

### Build Fails

<div class="callout callout-warning">
  <strong>Common causes:</strong>
  <ul style="margin-top: 0.5rem; margin-bottom: 0;">
    <li>Missing dependencies in Gemfile</li>
    <li>Incorrect Ruby version</li>
    <li>Syntax errors in YAML files</li>
  </ul>
</div>

### 404 Errors

Make sure your `baseurl` is set correctly in `_config.yml`:

```yaml
# For username.github.io/repo
baseurl: "/repo"

# For custom domain
baseurl: ""
```

### Coming Soon Not Showing

Ensure the `permalink` is correct and there's no conflicting `index.html`.

---

## Next Steps

- Set up [Analytics](/docs/configuration/#analytics) to track visitors
- Configure [SEO settings](/docs/configuration/#seo-configuration)
- Customize your [404 page](#custom-404-page) design
- Set up [Coming Soon](#coming-soon--maintenance-page) for pre-launch
