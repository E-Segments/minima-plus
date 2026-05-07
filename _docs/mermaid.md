---
title: Mermaid Diagram Support
mermaid: true
parent: Features
order: 100
---

# Mermaid Diagrams

Minima+ now supports Mermaid.js diagrams directly in your documentation.

## Example Flowchart

<div class="mermaid">
graph TD
    A[Plan] --> B[Implement]
    B --> C{Verify}
    C -- Success --> D[Submit]
    C -- Fail --> B
</div>

## Example Sequence Diagram

<div class="mermaid">
sequenceDiagram
    participant User
    participant Browser
    participant Server
    User->>Browser: Request Page
    Browser->>Server: GET /docs/
    Server-->>Browser: HTML Content
    Browser->>User: Rendered Page
</div>
