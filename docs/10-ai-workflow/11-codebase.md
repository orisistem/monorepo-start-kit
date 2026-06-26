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
├── frontend/         # Node.js (stack a definir)
│   └── src/
│       ├── app/              # Entry point, routing, providers
│       ├── modules/          # Feature modules (FSD + Clean Architecture)
│       │   └── [modulo]/
│       │       ├── domain/          # Entidades, ports, regras de negócio
│       │       ├── application/     # Use cases, DTOs, mappers
│       │       ├── infrastructure/  # Repositories, API clients
│       │       └── presentation/    # Components, pages, hooks, store
│       └── shared/           # Código reutilizável entre módulos
├── infrastructure/   # Terraform, Ansible, Nginx, Docker
├── docs/             # Documentação
└── .opencode/        # Skills e agentes de IA
```

---

## Módulos — Backend

| Módulo | Responsabilidade | Camadas ativas | Depende de | Usado por |
|--------|-----------------|----------------|------------|-----------|
| `auth` | Autenticação e autorização | domain, application, infrastructure, presentation (todas scaffolded) | `shared/` (futuro) | — |

## Módulos — Frontend

| Módulo | Responsabilidade | Camadas ativas | Depende de | Usado por |
|--------|-----------------|----------------|------------|-----------|
| `auth` | Autenticação (login, registro, sessão) | domain, application, infrastructure, presentation (todas scaffolded) | `shared/` (futuro) | — |

---

## Código Compartilhado

### Backend (`backend/src/shared/`)

| Camada | Conteúdo | Status |
|--------|----------|--------|
| `domain/` | Entidades base, interfaces compartilhadas | Vazio (`.gitkeep`) |
| `application/` | Use cases compartilhados, DTOs genéricos | Vazio (`.gitkeep`) |
| `infrastructure/` | Clientes base (DB, HTTP), configurações | Vazio (`.gitkeep`) |
| `presentation/` | Middleware base, helpers de resposta | Vazio (`.gitkeep`) |

### Frontend (`frontend/src/shared/`)

| Camada | Conteúdo | Status |
|--------|----------|--------|
| `domain/` | Entidades base, interfaces | Vazio (`.gitkeep`) |
| `application/` | Use cases compartilhados, DTOs | Vazio (`.gitkeep`) |
| `infrastructure/` | API client, storage, utils | Vazio (`.gitkeep`) |
| `presentation/` | Componentes base, assets, hooks | Vazio (`.gitkeep`) |

---

## Entry Points

| Componente | Caminho | Propósito |
|------------|---------|-----------|
| Backend config | `backend/src/config/` | DI wiring, env vars, setup do framework |
| Frontend app | `frontend/src/app/` | Entry point, routing, providers |
| Docker backend | `backend/Dockerfile` | Imagem Node.js 20 Alpine |
| Docker frontend | `frontend/Dockerfile` | Imagem Node.js 20 Alpine (multi-stage) |
| Docker Compose | `docker-compose.yml` | Orquestração local (frontend, backend, postgres, nginx) |

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
backend/
  └── modules/auth/ → shared/ (futuro) | database

frontend/
  └── modules/auth/ → shared/ (futuro) | API (backend)

infrastructure/
  ├── nginx/ → frontend:80, backend:8080
  ├── terraform/ → AWS
  ├── monitoring/ → backend, database
  └── docker-compose → todos os serviços

Regras:
- Módulos não importam infrastructure de outros módulos
- Frontend e backend não se importam entre si
- Comunicação frontend↔backend via API (HTTP)
```

---

## Template para Novo Módulo

Ao criar um módulo, adicione uma linha nas tabelas de **Módulos — Backend** ou **Módulos — Frontend** acima, preenchendo:

```markdown
| `[nome]` | [responsabilidade] | [camadas implementadas] | [módulos que usa] | [quem o usa] |
```
