# Backend

This directory contains the server-side application, built with **Feature-Sliced Design (FSD)** combined with **Clean Architecture**. The structure mirrors the frontend to maintain consistency across the monorepo.

## Structure

### `src/shared/`

Cross-cutting code shared across all modules. Follows Clean Architecture layering:

- **`domain/`**: Shared entities, value objects, and base interfaces.
- **`application/`**: Shared use cases, DTOs, and mappers.
- **`infrastructure/`**: Base clients, shared database config, utility services.
- **`presentation/`**: Base controllers, middleware, error handlers.

### `src/modules/`

Business logic isolated by feature (domain slice). Each module is independent and follows Clean Architecture internally:

- **`domain/`**: Entities, value objects, and Ports (interfaces). Pure business rules with zero external dependencies.
- **`application/`**: Use Cases (orchestrating domain logic), DTOs, and Mappers. Depends only on domain.
- **`infrastructure/`**: Adapters that implement the Ports — database repositories, external API clients.
- **`presentation/`**: Controllers, request/response handling, and route definitions.

### Example: `modules/auth/`

```
modules/auth/
├── domain/                 # Entities (User, Session), Ports (IUserRepository)
├── application/            # Use cases (LoginUseCase, RegisterUseCase), DTOs
├── infrastructure/         # UserRepository (Prisma/TypeORM), JwtService
│   ├── database/
│   │   ├── migrations/     # Version-controlled schema changes
│   │   └── seeds/          # Development/test data population
│   └── external-services/  # Email, SMS, third-party APIs
└── presentation/           # AuthController, login/register routes
```

### `src/config/`

Dependency injection wiring, environment variables, and framework setup.

## Golden Rules

1. **Dependency Rule**: Dependencies point inward. `domain/` knows nothing about `infrastructure/` or `presentation/`.
2. **Module Isolation**: Modules cannot directly import each other's infrastructure. Cross-module communication happens through shared interfaces in `shared/` or via the application layer.
3. **Shared Code**: Anything reused across multiple modules must live in `src/shared/`, never duplicated inside modules.
