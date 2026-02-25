---
layout: docs
title: UI Kit & Components
description: A comprehensive gallery of all built-in components available in Minima+.
order: 100
---

This page showcases all the UI components provided by the Minima+ theme. These components are designed to be highly configurable, accessible, and responsive.

## Buttons

Primary and secondary buttons with various sizes.

### Primary
{% include components/button.html text="Primary Button" link="#" style="primary" %}
```liquid
{% raw %}{% include components/button.html text="Primary Button" link="#" style="primary" %}{% endraw %}
```

### Outline
{% include components/button.html text="Outline Button" link="#" style="outline" %}
```liquid
{% raw %}{% include components/button.html text="Outline Button" link="#" style="outline" %}{% endraw %}
```

### Sizes
{% include components/button.html text="Small" link="#" style="primary" size="sm" %}
{% include components/button.html text="Default" link="#" style="primary" %}
{% include components/button.html text="Large" link="#" style="primary" size="lg" %}

```liquid
{% raw %}
{% include components/button.html text="Small" link="#" style="primary" size="sm" %}
{% include components/button.html text="Default" link="#" style="primary" %}
{% include components/button.html text="Large" link="#" style="primary" size="lg" %}
{% endraw %}
```

## Alerts

Use alerts to provide feedback or call attention to important information.

{% include components/alert.html type="info" title="Information" content="This is an informative message for the user." %}
{% include components/alert.html type="success" title="Success" content="Your action has been completed successfully." %}
{% include components/alert.html type="warning" title="Warning" content="Please be careful with this action." %}
{% include components/alert.html type="danger" title="Error" content="Something went wrong. Please try again." %}

```liquid
{% raw %}
{% include components/alert.html type="info" title="Info" content="..." %}
{% include components/alert.html type="success" title="Success" content="..." %}
{% include components/alert.html type="warning" title="Warning" content="..." %}
{% include components/alert.html type="danger" title="Error" content="..." %}
{% endraw %}
```

## Cards

Cards are versatile containers for content, often used in grids.

<div class="grid md:grid-cols-2 gap-6 not-prose">
  {% include components/card.html title="Feature Card" description="This is a standard feature card with an icon." icon='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>' %}

  {% include components/card.html title="Link Card" description="Cards can also act as links to other pages." link="/docs/getting-started/" %}
</div>

```liquid
{% raw %}{% include components/card.html title="Card Title" description="..." icon="..." link="..." %}{% endraw %}
```

## Tabs

Organize content into tabbed views.

{% include components/tabs.html id="example-tabs" tabs="Overview:This is the overview content.,Details:Here are more details about the subject.,Usage:Examples of how to use this feature." %}

```liquid
{% raw %}{% include components/tabs.html id="example-tabs" tabs="Tab 1:Content 1,Tab 2:Content 2" %}{% endraw %}
```

## Accordion

Collapsible content sections, perfect for FAQs.

{% assign faq_items = "What is Minima+?:Minima+ is a modern Jekyll theme built with Tailwind CSS v4.,How do I install it?:Follow the instructions in the Getting Started guide." | split: "," %}
{% include components/accordion.html items=faq_items id="ui-faq" %}

```liquid
{% raw %}
{% assign items = "Q1:A1,Q2:A2" | split: "," %}
{% include components/accordion.html items=items id="my-accordion" %}
{% endraw %}
```

## Code Tabs

Specialized tabs for showing code in multiple languages or package managers.

{% include components/code-tabs.html id="install-example" %}
<div data-code-tab="install-example" data-label="npm" data-lang="bash">
npm install @esegments/minima-plus
</div>
<div data-code-tab="install-example" data-label="yarn" data-lang="bash">
yarn add @esegments/minima-plus
</div>
<div data-code-tab="install-example" data-label="pnpm" data-lang="bash">
pnpm add @esegments/minima-plus
</div>
{% include components/code-tabs.html id="install-example" end=true %}

```liquid
{% raw %}
{% include components/code-tabs.html id="example" %}
<div data-code-tab="example" data-label="npm" data-lang="bash">...</div>
<div data-code-tab="example" data-label="yarn" data-lang="bash">...</div>
{% include components/code-tabs.html id="example" end=true %}
{% endraw %}
```

## Stats Counter

Animated counters for displaying impressive numbers.

{% include components/stats-counter.html stats="10K+:Downloads,500+:Stars" columns=2 style="cards" %}

```liquid
{% raw %}{% include components/stats-counter.html stats="100:Users,50:Cities" %}{% endraw %}
```

## API Endpoint

Document REST API endpoints with a clean interface.

{% include components/endpoint.html method="POST" path="/api/v1/users" description="Create a new user account." auth="required" params='[{"name":"email","type":"string","required":true,"description":"User email address"}]' body='{"name": "John Doe", "email": "john@example.com"}' responses='[{"status":201,"description":"User created","body":{"id":"user_123"}}]' %}

```liquid
{% raw %}{% include components/endpoint.html method="POST" path="/api/v1/users" description="..." ... %}{% endraw %}
```

## Mermaid Diagrams

Render complex diagrams using a simple text-based syntax.

<div class="mermaid">
graph TD
    A[Start] --> B{Is it working?}
    B -- Yes --> C[Great!]
    B -- No --> D[Fix it]
    D --> B
</div>

```markdown
<div class="mermaid">
graph TD
    A[Start] --> B{Is it working?}
    ...
</div>
```

*Note: Set `mermaid: true` in your page front matter to enable this.*
