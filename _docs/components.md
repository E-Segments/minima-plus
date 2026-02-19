---
title: "Components"
description: "Reusable UI components for your pages"
order: 3
parent: "Getting Started"
version: "2.1"
---

This theme includes several reusable components you can use in your pages.

## Badges

Badges are great for showing versions, status, and other metadata using Shields.io or Badgen.net.

### Static Badge

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

**Result:**

<div class="not-prose mb-4">
{% include components/badge.html label="Jekyll" message="4.3+" color="CC0000" logo="jekyll" logoColor="white" style="for-the-badge" %}
</div>

### Dynamic Badge (GitHub)

```liquid
{% raw %}{% include components/badge.html
   type="github/v/release"
   repo="E-Segments/minima-plus"
   style="flat-square"
%}{% endraw %}
```

### Badge Styles

- `flat` (default)
- `flat-square`
- `plastic`
- `for-the-badge`
- `social`

### Badge Group

Display multiple badges from a data file:

```liquid
{% raw %}{% include components/badge-group.html badges=site.data.badges.theme %}{% endraw %}
```

**Result:**

<div class="not-prose mb-4">
{% include components/badge-group.html badges=site.data.badges.theme %}
</div>

### Badge Parameters

| Parameter | Description |
|-----------|-------------|
| `service` | `shields` (default) or `badgen` |
| `type` | Dynamic badge type (e.g., `github/stars`, `npm/v`) |
| `repo` | GitHub repo for GitHub badges |
| `label` | Left side text for static badges |
| `message` | Right side text for static badges |
| `color` | Badge color (hex without #, or color name) |
| `style` | Badge style |
| `logo` | Logo from Simple Icons |
| `logoColor` | Logo color |
| `link` | Optional URL to wrap badge |

---

## Cards

Cards are great for highlighting features or linking to content.

### Basic Card

```liquid
{% raw %}{% include components/card.html
   title="Card Title"
   description="A brief description of the card content."
   link="/path/to/page"
   link_text="Learn more"
%}{% endraw %}
```

### Card with Icon

```liquid
{% raw %}{% include components/card.html
   title="Feature"
   description="Description here"
   icon='<svg>...</svg>'
%}{% endraw %}
```

---

## Buttons

Buttons come in three styles and three sizes.

### Button Styles

```liquid
{% raw %}{% include components/button.html text="Primary" link="/" style="primary" %}
{% include components/button.html text="Secondary" link="/" style="secondary" %}
{% include components/button.html text="Outline" link="/" style="outline" %}{% endraw %}
```

### Button Sizes

```liquid
{% raw %}{% include components/button.html text="Small" link="/" size="sm" %}
{% include components/button.html text="Medium" link="/" size="md" %}
{% include components/button.html text="Large" link="/" size="lg" %}{% endraw %}
```

---

## Alerts

Use alerts to draw attention to important information.

### Alert Types

<div class="callout callout-info">
  <strong>Info:</strong> This is an informational message.
</div>

<div class="callout callout-warning">
  <strong>Warning:</strong> This is a warning message.
</div>

<div class="callout callout-success">
  <strong>Success:</strong> This is a success message.
</div>

<div class="callout callout-danger">
  <strong>Danger:</strong> This is an error message.
</div>

### Usage

```html
<div class="callout callout-info">
  <strong>Note:</strong> Your message here.
</div>
```

---

## Steps List

Create numbered step lists:

<ol class="steps">
  <li>First step in the process</li>
  <li>Second step with more details</li>
  <li>Third step to complete</li>
</ol>

```html
<ol class="steps">
  <li>First step</li>
  <li>Second step</li>
  <li>Third step</li>
</ol>
```

---

## Code Blocks

Code blocks are automatically syntax highlighted:

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet('World');
```

```python
def greet(name):
    print(f"Hello, {name}!")

greet("World")
```

---

## Tables

Tables are styled automatically in prose:

| Feature | Free | Pro | Enterprise |
|---------|------|-----|------------|
| Users | 1 | 10 | Unlimited |
| Storage | 1GB | 50GB | 500GB |
| Support | Community | Email | Dedicated |

---

## Images

Images in markdown are responsive:

```markdown
![Alt text](/path/to/image.jpg)
```

---

## Blockquotes

> This is a blockquote. It's great for highlighting quotes or important excerpts from content.
>
> — Author Name

---

## Tabs

Create tabbed content sections for organizing related content.

### Basic Tabs

```liquid
{% raw %}{% include components/tabs.html id="demo" tabs="HTML,CSS,JavaScript" %}
<div data-tab-content="demo-0">HTML content here</div>
<div data-tab-content="demo-1">CSS content here</div>
<div data-tab-content="demo-2">JavaScript content here</div>
{% include components/tabs.html id="demo" end=true %}{% endraw %}
```

### Tab Styles

- `underline` (default) - Underlined active tab
- `pills` - Pill-style buttons

---

## Code Tabs

Tabbed code blocks for showing multiple languages or package managers.

```liquid
{% raw %}{% include components/code-tabs.html id="install" tabs=page.install_examples %}{% endraw %}
```

Define tabs in front matter:

```yaml
install_examples:
  - label: "npm"
    language: "bash"
    code: "npm install package-name"
  - label: "yarn"
    language: "bash"
    code: "yarn add package-name"
```

---

## Accordion

Expandable/collapsible sections for FAQs or grouped content.

### With Data Array

```liquid
{% raw %}{% include components/accordion.html items=page.faq %}{% endraw %}
```

Define in front matter:

```yaml
faq:
  - question: "What is Jekyll?"
    answer: "Jekyll is a static site generator."
  - question: "Is it free?"
    answer: "Yes, completely free and open source."
```

### Manual Wrapping

```liquid
{% raw %}{% include components/accordion.html id="faq" %}
{% include components/accordion-item.html title="First Question" %}
Answer to first question with **markdown** support.
{% include components/accordion-item.html end=true %}
{% include components/accordion.html end=true %}{% endraw %}
```

### Accordion Styles

- `default` - Divided list with borders
- `bordered` - Single border around all items
- `separated` - Each item has its own border with spacing

---

## API Endpoint

Document REST API endpoints with method badges, parameters, and responses.

```liquid
{% raw %}{% include components/endpoint.html
   method="GET"
   path="/api/users/:id"
   description="Retrieve a user by ID"
   auth="required"
   params=page.user_params
   responses=page.user_responses
%}{% endraw %}
```

Or use the `api` layout to auto-render endpoints from front matter.

---

## CLI Command

Document command-line interface commands.

```liquid
{% raw %}{% include components/cli-command.html
   name="serve"
   description="Start development server"
   usage="jekyll serve [options]"
   options=page.serve_options
   examples=page.serve_examples
%}{% endraw %}
```

Or use the `cli` layout for a full CLI reference page.

---

## Stats Counter

Animated number counters that count up when scrolled into view.

### With Data Array

```liquid
{% raw %}{% include components/stats-counter.html stats=page.stats %}{% endraw %}
```

Define in front matter:

```yaml
stats:
  - value: 10000
    label: "Downloads"
    suffix: "+"
  - value: 99.9
    label: "Uptime"
    suffix: "%"
    decimals: 1
  - value: 50
    label: "Contributors"
  - value: 24
    label: "Support"
    suffix: "/7"
```

### Inline Format

```liquid
{% raw %}{% include components/stats-counter.html stats="10K+:Downloads,50:Contributors,99%:Uptime,24/7:Support" %}{% endraw %}
```

### Stats Counter Parameters

| Parameter | Description |
|-----------|-------------|
| `stats` | Array of stat objects or comma-separated string |
| `columns` | Grid columns: 2, 3, 4 (default: auto) |
| `style` | Display style: `default`, `cards`, `minimal` |
| `duration` | Animation duration in ms (default: 2000) |

### Stat Object Properties

| Property | Description |
|----------|-------------|
| `value` | The number to count to |
| `label` | Text below the number |
| `prefix` | Text before number (e.g., "$") |
| `suffix` | Text after number (e.g., "+", "%") |
| `decimals` | Decimal places (default: 0) |

---

## Custom CSS Classes

You can use these utility classes in your markdown:

- `.not-prose` - Escape prose styling
- `.cards-grid` - Create a card grid
- `.steps` - Numbered steps list
- `.callout` - Alert boxes
- `.badge-group` - Group of badges
- `.tabs-container` - Tabbed content
- `.accordion` - Expandable sections
- `.endpoint-card` - API endpoint documentation
- `.cli-command` - CLI command documentation
- `.stats-counter` - Animated statistics counters

---

## Next Steps

- Learn about [Accessibility](/docs/accessibility/) features and ARIA support
- See the [Customization Guide](/docs/customization/) for advanced styling
- Check the [Troubleshooting Guide](/docs/troubleshooting/) for common issues
