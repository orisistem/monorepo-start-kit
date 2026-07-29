# Frontend

This directory contains the client-side application, built with a **Module-Based Architecture** (Feature-Sliced Design). This structure is scalable and highly cohesive, making it easy to add or remove features without affecting the rest of the app.

## Structure

We use **Feature-Sliced Design (FSD)** combined with **Clean Architecture** — the same architecture used in the backend, ensuring consistency across the monorepo.

- **`src/app/`**: Application entry point, global routing, and global providers.
- **`src/shared/`**: Global, reusable elements across all modules.
  - `domain/`: Shared entities, types, and base interfaces.
  - `application/`: Shared use cases, DTOs, and utilities.
  - `infrastructure/`: Base API clients (e.g., Axios instance).
  - `presentation/`: Generic UI components (Atoms, Molecules), global styles, assets.
- **`src/modules/`**: Business logic isolated by feature. Inside each module, we apply Clean Architecture:
  - Example (`auth/`):
    - `domain/`: Entities and Ports (interfaces).
    - `application/`: Use Cases, DTOs, and Mappers.
    - `infrastructure/`: Repositories that implement the Ports and call the API.
    - `presentation/`: Pages, UI Components, Hooks, and global state (e.g., `store/` using Zustand).
- **`tests/`**: Global tests and E2E configuration.
