---
title: "Features"
description: "Learn about search, pagination, changelog, and badges"
order: 2
parent: "Getting Started"
version: "2.1"
---

Minima+ includes several powerful features to enhance your Jekyll site.

## Search

Full-text search across your site powered by [Lunr.js](https://lunrjs.com/).

### Opening Search

- **Keyboard shortcut:** Press `Cmd+K` (Mac) or `Ctrl+K` (Windows/Linux)
- **Click:** Use the search button in the header

### Search Features

- Searches posts, documentation, and pages
- Filter by content type (All / Posts / Docs)
- Keyboard navigation with arrow keys
- Recent searches saved in localStorage
- Highlighted search matches

### Enabling Search

Search is enabled by default. To toggle it:

```yaml
# _config.yml
theme_config:
  features:
    search: true  # or false to disable
```

### How It Works

Jekyll generates a search index at `/assets/search.json` containing all your content. When you open the search modal, Lunr.js loads this index and performs client-side search.

---

## Pagination

Built-in pagination for blog posts using [jekyll-paginate-v2](https://github.com/sverrirs/jekyll-paginate-v2).

### Configuration

```yaml
# _config.yml
pagination:
  enabled: true
  per_page: 6
  permalink: '/page/:num/'
  sort_field: 'date'
  sort_reverse: true
```

### Page Setup

Enable pagination in your blog index:

```yaml
# blog/index.html
---
layout: blog
title: Blog
pagination:
  enabled: true
  collection: posts
---
```

### Pagination Features

- Previous/Next navigation buttons
- Page numbers with ellipsis for many pages
- "Showing X-Y of Z" counter
- Responsive design (simplified on mobile)

---

## Changelog

Automatically fetch and display releases from your GitHub repository.

### Setup

1. Set your GitHub repo in `_config.yml`:

```yaml
github_repo: "username/repo"
```

2. Create a changelog page:

```yaml
# changelog.md
---
layout: changelog
title: Changelog
description: Track all releases and updates
permalink: /changelog/
---
```

3. Add to navigation in `_data/navigation.yml`:

```yaml
main:
  - title: "Changelog"
    url: "/changelog/"
```

### Changelog Features

- **Auto-fetch:** Pulls releases from GitHub API
- **Search:** Filter releases by keyword
- **Filters:** All releases, major only, minor & major, pre-releases
- **Pagination:** Navigate through many releases
- **Markdown:** Release notes rendered with full markdown support
- **Downloads:** Asset download links displayed
- **Badges:** Version and status badges

### Fallback

If the GitHub API fails (rate limiting, network issues), users see a friendly error message with a retry button.

---

## Badges

Easy integration with [Shields.io](https://shields.io/) and [Badgen.net](https://badgen.net/) for dynamic badges.

### Static Badge

Create a custom badge with label and message:

```liquid
{% raw %}{% include components/badge.html
   label="version"
   message="1.0.0"
   color="blue"
   style="flat-square"
%}{% endraw %}
```

### Dynamic Badge

Fetch live data from services like GitHub:

```liquid
{% raw %}{% include components/badge.html
   type="github/stars"
   repo="E-Segments/minima-plus"
   style="for-the-badge"
   logo="github"
%}{% endraw %}
```

### Badge with Logo

```liquid
{% raw %}{% include components/badge.html
   label="Jekyll"
   message="4.3+"
   color="CC0000"
   logo="jekyll"
   logoColor="white"
   style="for-the-badge"
%}{% endraw %}
```

### Badge Group

Display multiple badges from a data file:

```liquid
{% raw %}{% include components/badge-group.html badges=site.data.badges.theme %}{% endraw %}
```

### Badge Data File

Define badges in `_data/badges.yml`:

```yaml
theme:
  - label: "Jekyll"
    message: "4.3+"
    color: "CC0000"
    logo: "jekyll"
    style: "for-the-badge"

  - type: "github/v/release"
    repo: "E-Segments/minima-plus"
    style: "for-the-badge"
```

### Available Badge Types

**GitHub:**
- `github/stars/owner/repo`
- `github/forks/owner/repo`
- `github/issues/owner/repo`
- `github/v/release/owner/repo`
- `github/license/owner/repo`
- `github/actions/workflow/status/owner/repo/workflow.yml`

**NPM:**
- `npm/v/package`
- `npm/dm/package` (downloads)

**PyPI:**
- `pypi/v/package`

### Badge Styles

| Style | Description |
|-------|-------------|
| `flat` | Default, minimal |
| `flat-square` | Square corners |
| `plastic` | 3D effect |
| `for-the-badge` | Large, uppercase |
| `social` | Social media style |

---

## 404 Error Page

A creative, animated 404 page with search, suggestions, and fun rotating messages.

### Features

- Animated gradient 404 text with floating animation
- Background particles effect
- Built-in search box
- Automatic navigation suggestions from `_data/navigation.yml`
- Rotating fun error messages
- Dark mode support

### Customization

Override the default page in your `404.html`:

```yaml
---
layout: 404
title: "Page not found"
description: "Custom description here"
permalink: /404.html
suggestions:  # Override default suggestions
  - title: "Home"
    url: "/"
  - title: "Blog"
    url: "/blog/"
---
```

---

## Coming Soon Page

A beautiful landing page for pre-launch with countdown timer and email capture.

### Setup

Create `coming-soon.html`:

```yaml
---
layout: coming-soon
title: "Coming Soon"
headline: "Something Amazing is Coming"
tagline: "We're working hard to bring you something special."
launch_date: "2025-06-01T00:00:00"
notify_text: "Get notified when we launch:"
button_text: "Notify Me"
# form_action: "https://your-email-service.com/subscribe"
social:
  - name: "Twitter"
    icon: "twitter"
    url: "https://twitter.com/handle"
  - name: "GitHub"
    icon: "github"
    url: "https://github.com/repo"
---
```

### Features

- **Countdown Timer:** Live countdown to launch date
- **Email Capture:** Newsletter signup form
- **Social Links:** Connect social profiles
- **Animated Background:** Glowing orbs effect
- **Responsive:** Works on all screen sizes

### Social Icons

Supported icons: `twitter`, `github`, `linkedin`, `instagram`, `discord`

### Email Form

By default, emails are stored in localStorage (demo mode). Set `form_action` to post to your email service:

```yaml
form_action: "https://buttondown.email/api/emails/embed-subscribe/your-newsletter"
```

---

## Dark Mode

Automatic dark mode with manual toggle.

### How It Works

1. Checks `localStorage` for saved preference
2. Falls back to system preference (`prefers-color-scheme`)
3. Defaults to light mode

### Toggle

The dark mode toggle in the header lets users switch between modes. Their preference is saved to `localStorage`.

### Styling

Use Tailwind's dark mode classes:

```html
<div class="bg-white dark:bg-slate-900">
  <p class="text-slate-900 dark:text-white">Content</p>
</div>
```

### Disabling

To remove dark mode:

```yaml
# _config.yml
theme_config:
  features:
    dark_mode: false
```
