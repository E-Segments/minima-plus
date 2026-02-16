---
title: "Components"
description: "Reusable UI components for your pages"
order: 3
---

This theme includes several reusable components you can use in your pages.

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

## Tables

Tables are styled automatically in prose:

| Feature | Free | Pro | Enterprise |
|---------|------|-----|------------|
| Users | 1 | 10 | Unlimited |
| Storage | 1GB | 50GB | 500GB |
| Support | Community | Email | Dedicated |

## Images

Images in markdown are responsive:

```markdown
![Alt text](/path/to/image.jpg)
```

## Blockquotes

> This is a blockquote. It's great for highlighting quotes or important excerpts from content.
>
> — Author Name

## Custom CSS Classes

You can use these utility classes in your markdown:

- `.not-prose` - Escape prose styling
- `.cards-grid` - Create a card grid
- `.steps` - Numbered steps list
- `.callout` - Alert boxes
