---
layout: cli
title: CLI Reference
description: Command-line interface for Jekyll and the Minima+ theme
permalink: /cli/
cli_name: jekyll
cli_version: "4.3.0"
install_command: "gem install jekyll bundler"
commands:
  - name: "new"
    description: "Create a new Jekyll site with default scaffolding"
    usage: "jekyll new PATH [options]"
    arguments:
      - name: "PATH"
        description: "Path where the new site will be created"
        required: true
    options:
      - flag: "--blank"
        description: "Create a blank site without default content"
      - flag: "--skip-bundle"
        description: "Skip running bundle install"
      - flag: "-f, --force"
        description: "Force creation even if PATH is not empty"
    examples:
      - title: "Create a new site"
        code: "jekyll new my-awesome-site"
      - title: "Create a blank site"
        code: "jekyll new my-site --blank"
      - title: "Force create in existing directory"
        code: "jekyll new . --force"

  - name: "serve"
    description: "Build the site and start a local development server"
    usage: "jekyll serve [options]"
    options:
      - flag: "-H, --host"
        type: "string"
        default: "127.0.0.1"
        description: "Host to bind to"
      - flag: "-P, --port"
        type: "number"
        default: "4000"
        description: "Port to listen on"
      - flag: "-l, --livereload"
        description: "Enable live reload"
      - flag: "-o, --open-url"
        description: "Open site in browser after build"
      - flag: "-B, --detach"
        description: "Run server in background"
      - flag: "-w, --watch"
        description: "Watch for changes and rebuild"
        default: "true"
      - flag: "--drafts"
        description: "Include draft posts in build"
      - flag: "--future"
        description: "Include posts with future dates"
    examples:
      - title: "Start development server"
        code: "jekyll serve"
      - title: "Serve with live reload"
        code: "jekyll serve --livereload"
      - title: "Serve on custom port"
        code: "jekyll serve --port 3000"
      - title: "Serve including drafts"
        code: "jekyll serve --drafts --future"

  - name: "build"
    description: "Build the site and output to the _site directory"
    usage: "jekyll build [options]"
    options:
      - flag: "-d, --destination"
        type: "path"
        default: "_site"
        description: "Output directory"
      - flag: "-s, --source"
        type: "path"
        default: "."
        description: "Source directory"
      - flag: "-b, --baseurl"
        type: "string"
        description: "Base URL for the site"
      - flag: "--drafts"
        description: "Include draft posts"
      - flag: "--future"
        description: "Include future-dated posts"
      - flag: "-V, --verbose"
        description: "Show detailed output"
      - flag: "-q, --quiet"
        description: "Suppress output"
      - flag: "--profile"
        description: "Generate Liquid profile"
    examples:
      - title: "Build the site"
        code: "jekyll build"
      - title: "Build to custom directory"
        code: "jekyll build --destination ./public"
      - title: "Build with baseurl"
        code: "jekyll build --baseurl /my-project"
      - title: "Production build"
        code: "JEKYLL_ENV=production jekyll build"

  - name: "clean"
    description: "Remove all generated files and caches"
    usage: "jekyll clean"
    examples:
      - title: "Clean build artifacts"
        code: "jekyll clean"
        output: "Cleaner: Removing _site...\nCleaner: Removing .jekyll-cache..."

  - name: "doctor"
    description: "Check your site for common issues and configuration problems"
    usage: "jekyll doctor"
    examples:
      - title: "Run diagnostics"
        code: "jekyll doctor"
---

## Overview

Jekyll is a static site generator that transforms your plain text into static websites and blogs. This reference covers all available commands.

## Installation

Install Jekyll and Bundler:

```bash
gem install jekyll bundler
```

Verify installation:

```bash
jekyll --version
```

## Quick Start

```bash
# Create a new site
jekyll new my-site

# Navigate to site
cd my-site

# Start development server
bundle exec jekyll serve

# Visit http://localhost:4000
```

## Global Options

These options work with all commands:

| Option | Description |
|--------|-------------|
| `-v, --version` | Print version number |
| `-h, --help` | Show help information |
| `--config FILE` | Use custom config file(s) |
| `--trace` | Show full backtrace on errors |

## Environment Variables

| Variable | Description |
|----------|-------------|
| `JEKYLL_ENV` | Set to `production` for production builds |
| `JEKYLL_LOG_LEVEL` | Logging level (debug, info, warn, error) |
