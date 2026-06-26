---
name: feature-sliced
description: Enforce Feature-Sliced Design and Clean Architecture rules across backend and frontend modules
license: MIT
---

## What this skill does

Ensures all code generated or reviewed follows the Feature-Sliced Design (FSD) conventions of this monorepo.

## When to use

Use this skill whenever the task involves creating or modifying source files in `backend/src/` or `frontend/src/`.

## Module structure

Every feature module follows this layout:

```
modules/[module-name]/
├── domain/           # Entities, value objects, ports (interfaces)
├── application/      # Use cases, DTOs, mappers
├── infrastructure/   # Adapters: DB repositories, external API clients
└── presentation/     # Controllers (backend), components/pages (frontend)
```

## Shared code

Cross-module code lives in `shared/` with the same 4-layer structure:

```
shared/
├── domain/           # Shared entities, base types, interfaces
├── application/      # Shared use cases, utility functions
├── infrastructure/   # Base clients, DB config, shared services
└── presentation/     # Base components (frontend), middleware (backend)
```

## Golden rules

1. **Dependency Rule**: The `domain/` layer must NEVER import from `infrastructure/` or `presentation/`. Dependencies always point inward.
2. **Module isolation**: A module must NOT import infrastructure from another module. Cross-module communication goes through `shared/` or through use cases.
3. **No framework in domain**: Domain entities and use cases must be plain — no ORM decorators, no HTTP annotations, no framework imports.
4. **Ports and adapters**: Define interfaces (ports) in `domain/`, implement them (adapters) in `infrastructure/`. Inject dependencies via constructor or parameters.

## Anti-patterns to avoid

- ❌ Importing Prisma/TypeORM/Mongoose inside an entity or use case
- ❌ Importing React/Vue/Axios inside a domain entity
- ❌ Importing `frontend/` code from `backend/` or vice versa
- ❌ Putting shared code inside a module (duplicate it across modules instead)
- ❌ Skipping the port/adapter pattern — leaking infrastructure concerns into use cases
