---
layout: api
title: API Reference
description: Complete REST API documentation for the Minima+ example API
permalink: /api/
api_version: "v1"
base_url: "https://api.example.com/v1"
auth_type: "Bearer Token"
endpoints:
  - method: "GET"
    path: "/users"
    description: "List all users with optional filtering and pagination"
    auth: "required"
    params:
      - name: "page"
        type: "integer"
        in: "query"
        description: "Page number for pagination"
        default: "1"
      - name: "limit"
        type: "integer"
        in: "query"
        description: "Number of results per page"
        default: "20"
      - name: "status"
        type: "string"
        in: "query"
        description: "Filter by user status (active, inactive, pending)"
    responses:
      - status: 200
        description: "Successful response"
      - status: 401
        description: "Unauthorized - Invalid or missing token"

  - method: "GET"
    path: "/users/:id"
    description: "Get a specific user by their unique ID"
    auth: "required"
    params:
      - name: "id"
        type: "string"
        in: "path"
        required: true
        description: "The unique user identifier"
    responses:
      - status: 200
        description: "User found"
      - status: 404
        description: "User not found"

  - method: "POST"
    path: "/users"
    description: "Create a new user account"
    auth: "required"
    params:
      - name: "email"
        type: "string"
        in: "body"
        required: true
        description: "User's email address"
      - name: "name"
        type: "string"
        in: "body"
        required: true
        description: "User's full name"
      - name: "role"
        type: "string"
        in: "body"
        description: "User role (admin, user, guest)"
        default: "user"
    responses:
      - status: 201
        description: "User created successfully"
      - status: 400
        description: "Invalid request body"
      - status: 409
        description: "Email already exists"

  - method: "PUT"
    path: "/users/:id"
    description: "Update an existing user's information"
    auth: "required"
    params:
      - name: "id"
        type: "string"
        in: "path"
        required: true
        description: "The unique user identifier"
      - name: "name"
        type: "string"
        in: "body"
        description: "Updated name"
      - name: "email"
        type: "string"
        in: "body"
        description: "Updated email"
    responses:
      - status: 200
        description: "User updated"
      - status: 404
        description: "User not found"

  - method: "DELETE"
    path: "/users/:id"
    description: "Delete a user account permanently"
    auth: "required"
    params:
      - name: "id"
        type: "string"
        in: "path"
        required: true
        description: "The unique user identifier"
    responses:
      - status: 204
        description: "User deleted"
      - status: 404
        description: "User not found"
---

## Overview

This API provides a RESTful interface for managing users. All endpoints require authentication via Bearer token.

## Authentication

Include your API key in the `Authorization` header:

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
  https://api.example.com/v1/users
```

## Rate Limiting

- **Rate limit:** 100 requests per minute
- **Headers:** `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset`

## Error Handling

All errors return a consistent JSON structure:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Email is required",
    "details": []
  }
}
```
