---
title: "Troubleshooting"
description: "Common issues and solutions for Jekyll and theme problems"
order: 8
parent: "Advanced"
version: "2.1"
---

This guide covers common issues you might encounter and how to resolve them.

## Build Errors

### Gemfile Lock Conflict

**Error:**
```
Could not find gem 'jekyll (~> 4.3)' in any of the gem sources
```

**Solution:**
Delete `Gemfile.lock` and reinstall:
```bash
rm Gemfile.lock
bundle install
```

### Plugin Not Found

**Error:**
```
Unknown tag 'include components/...'
```

**Solution:**
Ensure all plugins are in your Gemfile:
```ruby
group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
  gem "jekyll-paginate-v2"
end
```

Then run:
```bash
bundle install
```

### Liquid Syntax Error

**Error:**
```
Liquid syntax error: Unknown tag 'raw'
```

**Solution:**
This usually means you're using Liquid tags in a context where they're not supported. Wrap code examples in `{% raw %}{% raw %}{% endraw %}...{% raw %}{% endraw %}{% endraw %}`:

```liquid
{% raw %}{% raw %}
{% include components/card.html %}
{% endraw %}{% endraw %}
```

### YAML Front Matter Error

**Error:**
```
YAML Exception: mapping values are not allowed here
```

**Solution:**
Check your front matter for:
- Missing colons
- Incorrect indentation
- Special characters not in quotes

```yaml
# Wrong
title: My Post: A Guide

# Correct
title: "My Post: A Guide"
```

## GitHub Pages Issues

### Site Not Building

**Symptoms:**
- Push completes but site doesn't update
- No build error in GitHub Actions

**Solutions:**

1. Check GitHub Pages settings:
   - Go to Settings > Pages
   - Verify source branch is correct

2. Check for build restrictions:
   - Go to Settings > Actions > General
   - Ensure Actions are allowed

3. View build logs:
   - Go to Actions tab
   - Click on the latest workflow run

### 404 on All Pages

**Cause:** Incorrect `baseurl` configuration

**Solution:**
```yaml
# For username.github.io/repo-name
url: "https://username.github.io"
baseurl: "/repo-name"

# For custom domain
url: "https://example.com"
baseurl: ""
```

### Assets Not Loading

**Symptoms:**
- CSS/JS files return 404
- Images not displaying

**Solution:**
Use `relative_url` filter for all assets:
```liquid
{% raw %}<link href="{{ '/assets/css/style.css' | relative_url }}" rel="stylesheet">
<img src="{{ '/assets/images/logo.png' | relative_url }}" alt="Logo">{% endraw %}
```

### Remote Theme Not Working

**Error:**
```
Build Error: could not read file
```

**Solutions:**

1. Check the remote theme syntax:
```yaml
remote_theme: E-Segments/minima-plus
```

2. Add the remote theme plugin:
```yaml
plugins:
  - jekyll-remote-theme
```

3. Verify the theme repository exists and is public

## Search Not Working

### Search Returns No Results

**Causes:**
- Search index not generated
- JavaScript error

**Solutions:**

1. Verify `search.json` exists:
   - Visit `yoursite.com/assets/search.json`
   - Check it contains your content

2. Check browser console for errors:
   - Press F12 > Console tab
   - Look for red error messages

3. Ensure search is enabled:
```yaml
theme_config:
  features:
    search: true
```

### Search Index Too Large

**Symptom:** Search loads slowly or fails

**Solution:**
Limit content indexed in `assets/search.json`:
```liquid
{% raw %}{% for post in site.posts limit: 100 %}
  <!-- Index only recent posts -->
{% endfor %}{% endraw %}
```

### Lunr.js Not Loading

**Error:**
```
ReferenceError: lunr is not defined
```

**Solution:**
Check that Lunr.js CDN is accessible. If blocked, download and serve locally:
```html
<script src="{{ '/assets/js/lunr.min.js' | relative_url }}"></script>
```

## Dark Mode Issues

### Dark Mode Not Toggling

**Causes:**
- JavaScript error
- localStorage blocked

**Solutions:**

1. Check browser console for errors

2. Clear localStorage:
```javascript
localStorage.removeItem('theme');
```

3. Verify dark mode is enabled:
```yaml
theme_config:
  features:
    dark_mode: true
```

### Flash of Wrong Theme

**Symptom:** Page briefly shows light mode before switching to dark

**Solution:**
Add this script to `<head>` before CSS:
```html
<script>
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  }
</script>
```

### Styles Not Changing

**Cause:** CSS not using Tailwind dark mode classes

**Solution:**
Use `dark:` prefix for dark mode styles:
```css
.my-element {
  background: white;
}

.dark .my-element {
  background: #1e293b;
}
```

## Changelog Not Loading

### GitHub API Rate Limit

**Error:**
```
API rate limit exceeded
```

**Solutions:**

1. **Wait:** Rate limit resets hourly

2. **Cache locally:** Download releases once:
```bash
curl -s https://api.github.com/repos/owner/repo/releases > _data/releases.json
```

3. **Use GitHub token** (for higher limits):
   Add to GitHub Actions workflow:
```yaml
env:
  GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

### No Releases Showing

**Causes:**
- Repository has no releases
- `github_repo` not configured

**Solution:**
```yaml
# _config.yml
github_repo: "username/repo"
```

Create releases on GitHub:
1. Go to your repository
2. Click "Releases" > "Create a new release"
3. Add version tag and release notes

### Markdown Not Rendering

**Symptom:** Release notes show raw markdown

**Solution:**
The theme uses `marked.js` to render markdown. Verify it's loading:
```html
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
```

## Pagination Problems

### Pagination Not Working

**Causes:**
- Plugin not installed
- Wrong front matter

**Solutions:**

1. Install the plugin:
```ruby
gem "jekyll-paginate-v2"
```

2. Configure in `_config.yml`:
```yaml
pagination:
  enabled: true
  per_page: 6
```

3. Add to page front matter:
```yaml
---
layout: blog
pagination:
  enabled: true
---
```

### All Posts on One Page

**Cause:** Using `site.posts` instead of `paginator.posts`

**Solution:**
```liquid
{% raw %}{% for post in paginator.posts %}
  <!-- Post content -->
{% endfor %}{% endraw %}
```

### Wrong Post Count

**Cause:** Drafts included in count

**Solution:**
Run without drafts:
```bash
bundle exec jekyll serve
```

To include drafts:
```bash
bundle exec jekyll serve --drafts
```

## Component Issues

### Component Not Rendering

**Causes:**
- Wrong include path
- Missing parameters

**Solution:**
Check the include path matches exactly:
```liquid
{% raw %}{% include components/card.html title="Test" %}{% endraw %}
```

Not:
```liquid
{% raw %}{% include card.html %}{% endraw %}
```

### Styles Missing

**Cause:** CSS not loaded or component outside prose

**Solution:**
Wrap components properly:
```html
<div class="not-prose">
  {% raw %}{% include components/card.html %}{% endraw %}
</div>
```

### JavaScript Not Running

**Cause:** Script loaded before DOM ready

**Solution:**
Ensure scripts run after DOM loads:
```javascript
document.addEventListener('DOMContentLoaded', function() {
  // Component initialization
});
```

## Performance Issues

### Slow Build Time

**Solutions:**

1. **Exclude unnecessary files:**
```yaml
exclude:
  - node_modules/
  - vendor/
  - .git/
  - "*.md"
```

2. **Use incremental builds:**
```bash
bundle exec jekyll serve --incremental
```

3. **Limit collection size:**
```yaml
collections:
  docs:
    output: true
    limit: 50  # In development
```

### Large Page Size

**Solutions:**

1. **Optimize images:**
   - Use WebP format
   - Compress with tools like TinyPNG
   - Use responsive images

2. **Lazy load images:**
```html
<img src="image.jpg" loading="lazy" alt="Description">
```

3. **Minimize CSS/JS:**
```yaml
sass:
  style: compressed
```

## Getting More Help

If your issue isn't covered here:

1. **Search existing issues:**
   [GitHub Issues](https://github.com/E-Segments/minima-plus/issues)

2. **Check Jekyll documentation:**
   [Jekyll Docs](https://jekyllrb.com/docs/)

3. **Ask the community:**
   [Jekyll Talk Forum](https://talk.jekyllrb.com/)

4. **Open a new issue:**
   Include:
   - Error message
   - Jekyll version (`jekyll -v`)
   - Ruby version (`ruby -v`)
   - Relevant config/code

## Quick Reference

| Issue | Quick Fix |
|-------|-----------|
| Build fails | `rm Gemfile.lock && bundle install` |
| 404 errors | Check `baseurl` in `_config.yml` |
| Search broken | Verify `/assets/search.json` exists |
| Dark mode stuck | `localStorage.removeItem('theme')` |
| Changelog empty | Add `github_repo` to config |
| Pagination off | Add `jekyll-paginate-v2` plugin |
