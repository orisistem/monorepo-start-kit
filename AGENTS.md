# orideal

## Tech Stack

- **Backend**: Node.js (stack-agnostic template — add your own: Express, NestJS, Fastify, etc.)
- **Frontend Web**: Node.js (stack-agnostic template — add your own: React, Vue, Angular, etc.)
- **Frontend Desktop**: Tauri v2 + React 19 + TypeScript + Tailwind CSS v4
- **Frontend Mobile**: React Native / Expo (future)
- **Infrastructure**: Docker, PostgreSQL 15, Nginx, Terraform (AWS), Prometheus, Grafana

## Architecture

- **Feature-Sliced Design + Clean Architecture** applies to both backend and frontend
- Code is organized into feature modules under `src/modules/[module]/`
- Each module has 4 layers: `domain/`, `application/`, `infrastructure/`, `presentation/`
- Shared code lives in `src/shared/` with the same 4-layer structure
- Dependency Rule: dependencies point inward — `domain/` knows nothing about `infrastructure/` or `presentation/`
- Modules are independent: one module never imports another module's infrastructure directly
- Monorepo with separate `backend/` and `frontend/` directories — no cross-imports between them

## Directory structure

- `backend/src/modules/` — backend feature modules
- `backend/src/shared/` — backend shared code
- `backend/src/config/` — DI wiring, env vars, framework setup
- `frontend/web/src/modules/` — frontend feature modules (web app)
- `frontend/web/src/shared/` — frontend shared code (web app)
- `frontend/web/src/app/` — web app entry point, routing, providers
- `frontend/desktop/src/modules/` — desktop feature modules (Tauri + React)
- `frontend/desktop/src/shared/` — desktop shared code (theme, components, layouts)
- `frontend/desktop/src-tauri/` — Rust backend (Tauri commands, plugins)
- `frontend/mobile/` — mobile app (React Native / Expo, future)
- `docs/02-planning/` — implementation plans (backend, web, desktop, mobile, infra)
- `docs/10-ai-workflow/` — AI-assisted development workflow guidelines
- `infrastructure/` — Terraform, Ansible, Nginx, Docker compose
- `.github/workflows/` — CI/CD pipelines (to be configured)

## Conventions

- Files and folders: kebab-case
- Classes: PascalCase
- Functions: camelCase
- Constants: UPPER_SNAKE_CASE
- Commits: Conventional Commits (`<type>(<scope>): <description>`)
- Types: explicit (no `any`)
- Tests: unit (isolated), integration (real DB), e2e (full stack)

## Commands

- `npm run commit` — interactive commit with Commitizen
- `npm run test` — run test suite (placeholder)
- `npm run ship` — git add + commit + push

## AI Guidelines

- The complete AI workflow guide is in `docs/10-ai-workflow/` — start with `00-start-prompt.md` (Session Commander) at the beginning of every session
- Implementation plans live in `docs/02-planning/` — choose a front (backend, web, desktop, mobile, infra) and follow the plan
- Skills are available under `.opencode/skills/` for reusable agent instructions
- Custom agents are under `.opencode/agents/` — use via `@code-reviewer` or `@tester`
- Spec templates: `docs/01-requirements/PRD-template.md` and `docs/03-architecture/tech-spec-template.md`

## Automation Rules

- **No automatic commits** — the AI must never stage, commit, amend, or push changes unless explicitly asked by the user. Commits are manual only.
