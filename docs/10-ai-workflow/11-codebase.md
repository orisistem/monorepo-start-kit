# Mapa do Sistema (CODEBASE.md)

Documento vivo que mapeia a estrutura do código-fonte, dependências entre módulos e pontos de entrada. Deve ser atualizado sempre que novos módulos forem criados ou a arquitetura sofrer alterações.

---

## Visão Geral

```
monorepo-start-kit
├── backend/          # Node.js (stack a definir)
│   └── src/
│       ├── config/           # DI wiring, env vars, setup do framework
│       ├── modules/          # Feature modules (FSD + Clean Architecture)
│       │   └── [modulo]/
│       │       ├── domain/          # Entidades, regras de negócio, ports
│       │       ├── application/     # Use cases, DTOs, mappers
│       │       ├── infrastructure/  # Adaptadores (banco, APIs externas)
│       │       └── presentation/    # Controllers, middleware
│       └── shared/           # Código reutilizável entre módulos
├── frontend/
│   ├── web/           # React + Vite + Zustand (scaffolded)
│   │   └── src/
│   │       ├── app/              # Entry point, routing, providers
│   │       ├── modules/          # Feature modules (FSD)
│   │       └── shared/           # Código reutilizável
│   ├── desktop/       # Tauri v2 + React 19 + TypeScript + Tailwind v4
│   │   ├── src/
│   │   │   ├── app/              # Entry point, App.tsx, routing
│   │   │   ├── modules/          # Feature modules (FSD)
│   │   │   │   ├── auth/         # Autenticação (login, sessão)
│   │   │   │   └── dashboard/    # Template de dashboard (métricas vazias)
│   │   │   └── shared/
│   │   │       ├── theme/        # Design System (colors, typography, spacing)
│   │   │       └── presentation/ # MainLayout, Sidebar, TopNav
│   │   └── src-tauri/            # Rust backend (Tauri commands, plugins)
│   └── mobile/         # React Native / Expo (future)
├── infrastructure/   # Terraform, Ansible, Nginx, Docker
├── docs/             # Documentação
└── .opencode/        # Skills e agentes de IA
```

---

## Módulos — Backend

| Módulo | Responsabilidade | Camadas ativas | Depende de | Usado por |
|--------|-----------------|----------------|------------|-----------|
| `auth` | Autenticação e autorização | domain, application, infrastructure, presentation (todas scaffolded) | `shared/` (futuro) | — |

## Módulos — Frontend Web (`frontend/web/src/modules/`)

| Módulo | Responsabilidade | Camadas ativas | Depende de | Usado por |
|--------|-----------------|----------------|------------|-----------|
| `auth` | Autenticação (login, registro, sessão) | domain, application, infrastructure, presentation (todas scaffolded) | `shared/` (futuro) | — |

## Módulos — Frontend Desktop (`frontend/desktop/src/modules/`)

| Módulo | Responsabilidade | Camadas ativas | Depende de | Usado por |
|--------|-----------------|----------------|------------|-----------|
| `auth` | Autenticação (login, sessão) | domain, application, infrastructure, presentation | `shared/` | — |
| `dashboard` | Template de dashboard (métricas genéricas) | presentation | `shared/theme`, `shared/presentation` | — |

---

## Código Compartilhado

### Backend (`backend/src/shared/`)

| Camada | Conteúdo | Status |
|--------|----------|--------|
| `domain/` | Entidades base, interfaces compartilhadas | Vazio (`.gitkeep`) |
| `application/` | Use cases compartilhados, DTOs genéricos | Vazio (`.gitkeep`) |
| `infrastructure/` | Clientes base (DB, HTTP), configurações | Vazio (`.gitkeep`) |
| `presentation/` | Middleware base, helpers de resposta | Vazio (`.gitkeep`) |

### Frontend Web (`frontend/web/src/shared/`)

| Camada | Conteúdo | Status |
|--------|----------|--------|
| `domain/` | Entidades base, interfaces | Vazio (`.gitkeep`) |
| `application/` | Use cases compartilhados, DTOs | Vazio (`.gitkeep`) |
| `infrastructure/` | API client, storage, utils | Vazio (`.gitkeep`) |
| `presentation/` | Componentes base, assets, hooks | Vazio (`.gitkeep`) |

### Frontend Desktop (`frontend/desktop/src/shared/`)

| Camada | Conteúdo | Status |
|--------|----------|--------|
| `theme/` | Design System (colors, typography, spacing, tokens.css) | ✅ Implementado |
| `presentation/` | MainLayout, Sidebar, TopNav | ✅ Implementado |

---

## Entry Points

| Componente | Caminho | Propósito |
|------------|---------|-----------|
| Backend config | `backend/src/config/` | DI wiring, env vars, setup do framework |
| Frontend web app | `frontend/web/src/app/` | Entry point, routing, providers (scaffolded) |
| Frontend desktop app | `frontend/desktop/src/app/` | Entry point, App.tsx, routing (Tauri + React) |
| Desktop Tauri backend | `frontend/desktop/src-tauri/` | Rust runtime, Tauri commands, plugins |
| Desktop modules | `frontend/desktop/src/modules/` | auth, dashboard (template) |
| Plano backend | `docs/02-planning/backend-implementation.md` | Plano de implementação do backend |
| Plano web | `docs/02-planning/web-implementation.md` | Plano de implementação do frontend web |
| Plano desktop | `docs/02-planning/desktop-implementation.md` | Plano de implementação do desktop (Tauri) |
| Plano mobile | `docs/02-planning/mobile-implementation.md` | Plano de implementação do mobile |
| Plano infra | `docs/02-planning/infrastructure-implementation.md` | Plano de implementação da infraestrutura |
| Docker backend | `backend/Dockerfile` | Imagem Node.js 20 Alpine |
| Docker frontend web | `frontend/web/Dockerfile` | Imagem Node.js 20 Alpine (multi-stage) |
| Docker desktop | `frontend/desktop/Dockerfile` | Build apenas (Tauri depende de sistema nativo) |
| Docker Compose | `docker-compose.yml` | Orquestração local (web, backend, postgres, nginx) |

---

## Serviços Externos

| Serviço | Versão | Acesso | Configuração |
|---------|--------|--------|-------------|
| PostgreSQL | 15 Alpine | `admin:secret@database:5432/template_db` | `docker-compose.yml` |
| Nginx | Alpine | Porta 80 | `infrastructure/nginx/nginx.conf` |
| Prometheus | — | Porta 9090 | `infrastructure/monitoring/prometheus.yml` |
| Grafana | — | Porta 3001 (admin/admin) | `docker-compose.monitoring.yml` |

---

## Grafo de Dependências

```
frontend/desktop/ → standalone (Tauri commands via Rust, sem dependência de backend remoto)
  ├── modules/auth/        → shared/
  └── modules/dashboard/   → shared/theme, shared/presentation

frontend/web/
  └── modules/auth/ → shared/ (futuro) | API (backend)

backend/
  └── modules/auth/ → shared/ (futuro) | database

infrastructure/
  ├── nginx/ → frontend:80, backend:8080
  ├── terraform/ → AWS
  ├── ansible/ → servidor
  ├── monitoring/ → backend, database
  └── docker-compose → todos os serviços

Regras:
- Módulos não importam infrastructure de outros módulos
- Frontend (web) e backend não se importam entre si
- Desktop é standalone (não depende do backend para funcionalidades locais)
- Comunicação web↔backend via API (HTTP)
- Comunicação desktop↔Rust via Tauri commands (IPC)
```

---

## Template para Novo Módulo

Ao criar um módulo, adicione uma linha nas tabelas de **Módulos** acima, preenchendo:

```markdown
| `[nome]` | [responsabilidade] | [camadas implementadas] | [módulos que usa] | [quem o usa] |
```
