---
title: "Deployment"
description: "Deploy your site to GitHub Pages, Netlify, or Vercel"
order: 4
---

This guide covers deploying your Jekyll site to various hosting platforms.

## GitHub Pages

The easiest way to deploy is with GitHub Pages.

### Setup Steps

<ol class="steps">
  <li>Push your code to a GitHub repository</li>
  <li>Go to Settings → Pages</li>
  <li>Select your branch (usually <code>main</code>)</li>
  <li>Your site will be live at <code>username.github.io/repo</code></li>
</ol>

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

## Next Steps

- Set up [Analytics](/docs/configuration/#analytics) to track visitors
- Configure [SEO settings](/docs/configuration/#seo-configuration)
