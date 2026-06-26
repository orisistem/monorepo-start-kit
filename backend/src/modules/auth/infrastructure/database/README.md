# Database Infrastructure

This directory handles the actual connection and operations with the database (the Adapter in the Clean Architecture).
It implements the interfaces (Ports) defined in `backend/src/modules/auth/domain/`.

## Directory Structure

- **`migrations/`**: Contains version-controlled scripts to update the database schema over time (e.g., `001-create-users.sql`).
- **`seeds/`**: Contains scripts to populate the database with initial or fake data for development and testing.

## Golden Rule

The domain and application layers (Entities and Use Cases) should **never** import anything from this directory. Communication happens solely through the Ports (interfaces) defined in `domain/`.
