---
layout: page
title: Documentation
description: Learn how to use and customize this theme
permalink: /docs/
---

Welcome to the documentation. Here you'll find everything you need to get started with this Jekyll theme.

## Quick Start

<ol class="steps">
  <li>Clone the repository</li>
  <li>Run <code>bundle install</code></li>
  <li>Run <code>bundle exec jekyll serve</code></li>
  <li>Open <a href="http://localhost:4000">http://localhost:4000</a></li>
</ol>

## Documentation Sections

<div class="not-prose cards-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
  {% assign docs = site.docs | sort: "order" %}
  {% for doc in docs %}
  <a href="{{ doc.url | relative_url }}" class="card">
    <div class="card-title">{{ doc.title }}</div>
    {% if doc.description %}<div class="card-description">{{ doc.description }}</div>{% endif %}
    <div class="card-link">Learn more →</div>
  </a>
  {% endfor %}
</div>

## Need Help?

If you have questions or need help, feel free to:

- Check the [GitHub repository](https://github.com)
- Open an issue for bugs or feature requests
- Read through existing documentation pages

<div class="callout callout-info">
  <strong>Tip:</strong> Start with the Getting Started guide to learn the basics of configuring this theme.
</div>
