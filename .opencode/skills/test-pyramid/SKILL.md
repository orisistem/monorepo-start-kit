---
name: test-pyramid
description: Guide test generation following the testing pyramid: unit, integration, and e2e
license: MIT
---

## What this skill does

Guides the AI agent to generate tests at the correct level of the testing pyramid, following the strategy defined in `docs/09-testing/`.

## When to use

Use this whenever the task involves writing or reviewing tests.

## Test levels

### 1. Unit tests (`tests/unit/`)

- Test the smallest isolable piece of code: an entity, a pure use case, a mapper
- **NO** database, network, or file system access
- **MOCK** all external dependencies (repositories, services)
- Fast execution — run during development

### 2. Integration tests (`tests/integration/`)

- Test collaboration between layers: a use case with a real repository, a controller with a real DB
- Use real (but disposable) database instances (e.g., Docker test containers)
- **MOCK** third-party services only (Stripe, AWS, etc.)
- **DO NOT MOCK** your own database

### 3. E2E tests (`tests/e2e/`)

- Test complete user flows with the full stack running
- Tools: Playwright, Cypress (frontend); Supertest (backend API)
- Run in CI/CD before deployment

## Test best practices

- Follow AAA pattern: Arrange, Act, Assert
- Name tests as: `should_[expected_behavior]_when_[condition]`
- Test behavior, not implementation
- Prefer mocks over spies
- Each test should be deterministic — same input always produces same output
- Clean up test data after each test run

## Coverage goals

- Unit tests: cover all business logic paths (happy path, errors, edge cases)
- Integration tests: cover all repository implementations and API endpoints
- E2E tests: cover critical user journeys (login, purchase, etc.)
