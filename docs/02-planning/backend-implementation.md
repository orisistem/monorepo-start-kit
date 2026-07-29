# Plano de Implementação — Backend

> **Template genérico.** Substitua `[framework]`, `[ORM]`, `[banco]` pela stack escolhida e preencha as tarefas conforme o domínio do projeto.

---

## Stack

| Camada | Tecnologia |
|--------|-----------|
| Framework | `[framework: NestJS / Express / Fastify]` |
| Linguagem | TypeScript (Node.js 20+) |
| ORM | `[ORM: Prisma / TypeORM / Drizzle]` |
| Banco | `[banco: PostgreSQL 15 / MySQL 8]` |
| Auth | `[auth: JWT / OAuth / sessions]` |
| Testes | Vitest + Supertest |
| Container | Docker (multi-stage) |

---

## Fases

### Fase 1 — Setup e Fundação

| # | Tarefa | Camada | Depende | Status |
|---|--------|--------|---------|--------|
| B-01 | Scaffold do módulo com estrutura FSD (domain, application, infrastructure, presentation) | — | — | ⬜ |
| B-02 | Configurar DI wiring e env vars (`src/config/`) | config | B-01 | ⬜ |
| B-03 | Configurar conexão com banco + schema inicial | infrastructure/database | B-02 | ⬜ |
| B-04 | Implementar camada `shared/` base (entidades, middleware, clientes) | shared | B-01 | ⬜ |
| B-05 | Configurar autenticação (JWT / sessão) | auth | B-04 | ⬜ |
| B-06 | Dockerfile multi-stage + docker-compose | infra | B-01 | ⬜ |

### Fase 2 — Domínio (Domain + Application)

| # | Tarefa | Camada | Depende | Status |
|---|--------|--------|---------|--------|
| B-07 | Definir entities do domínio | domain/entities | B-04 | ⬜ |
| B-08 | Definir ports (interfaces de repositório) | domain/ports | B-07 | ⬜ |
| B-09 | Implementar DTOs e mappers | application/dto | B-07 | ⬜ |
| B-10 | Implementar use cases (regras de négocio) | application/usecases | B-08, B-09 | ⬜ |
| B-11 | Escrever testes unitários dos use cases | tests/unit | B-10 | ⬜ |

### Fase 3 — Infraestrutura

| # | Tarefa | Camada | Depende | Status |
|---|--------|--------|---------|--------|
| B-12 | Implementar repositório concreto ([ORM]) | infrastructure/database | B-08, B-03 | ⬜ |
| B-13 | Implementar serviços externos (e-mail, storage, etc.) | infrastructure/external-services | B-04 | ⬜ |
| B-14 | Escrever testes de integração (banco real) | tests/integration | B-12 | ⬜ |

### Fase 4 — Apresentação (API)

| # | Tarefa | Camada | Depende | Status |
|---|--------|--------|---------|--------|
| B-15 | Implementar controllers REST | presentation/controllers | B-10 | ⬜ |
| B-16 | Implementar middleware (auth, validação, erro) | presentation/middleware | B-12, B-05 | ⬜ |
| B-17 | Documentar endpoints (OpenAPI / Swagger) | docs/04-api | B-15 | ⬜ |
| B-18 | Escrever testes e2e da API | tests/e2e | B-15, B-16 | ⬜ |

### Fase 5 — Qualidade e Entrega

| # | Tarefa | Camada | Depende | Status |
|---|--------|--------|---------|--------|
| B-19 | Adicionar lint + formatter + pre-commit hooks | — | B-15 | ⬜ |
| B-20 | CI/CD pipeline (lint → test → build → deploy) | — | B-19 | ⬜ |
| B-21 | Runbook de deploy e debugging | docs/05-manuals | B-20 | ⬜ |

---

> Instruções: copie este arquivo, renomeie para `backend-implementation.md` (substituindo o template) e marque o status de cada tarefa como `⬜` (pendente), `🔄` (em andamento), `✅` (concluído) ao longo do desenvolvimento.
