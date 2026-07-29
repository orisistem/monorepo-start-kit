# Plano de Implementação — Desktop (Tauri + React)

> **Template específico para apps desktop com Tauri.** Substitua os placeholders conforme o projeto.

---

## Stack

| Camada | Tecnologia |
|--------|-----------|
| Framework Desktop | Tauri v2 (Rust backend) |
| Framework UI | React 19 + TypeScript |
| Bundler | Vite 7 |
| Estilos | Tailwind CSS v4 |
| Estado | `[estado: Zustand / Context API]` |
| Tauri Plugins | `[plugins: opener, shell, dialog, fs, etc.]` |
| Testes | Vitest + Testing Library + `@tauri-apps/test` |
| Distribuição | Tauri bundler (MSI, DMG, AppImage) |

---

## Sprints

### Sprint 1 — Setup e Scaffold

| # | Tarefa | Camada | Status |
|---|--------|--------|--------|
| D-01 | Criar projeto Tauri + React + Vite | — | ⬜ |
| D-02 | Configurar estrutura FSD (domain, application, infrastructure, presentation) | — | ⬜ |
| D-03 | Configurar Tailwind v4 + tema global (design tokens) | shared/theme | ⬜ |
| D-04 | Configurar Tauri plugins essenciais (`tauri.conf.json`) | src-tauri | ⬜ |
| D-05 | Criar layout base (MainLayout com Sidebar + TopNav) | shared/presentation/layouts | ⬜ |

### Sprint 2 — Autenticação e Navegação

| # | Tarefa | Camada | Depende | Status |
|---|--------|--------|---------|--------|
| D-06 | Auth store — login, logout, sessão | auth/application | D-02 | ⬜ |
| D-07 | AuthGuard + rotas protegidas | auth/presentation | D-06 | ⬜ |
| D-08 | LoginPage com validação | auth/presentation | D-07 | ⬜ |
| D-09 | Navegação por abas / páginas com React Router | app | D-05 | ⬜ |
| D-10 | Integração com Tauri commands (Rust ↔ React) | shared/infrastructure | D-04 | ⬜ |

### Sprint 3 — Módulo Core — Pipeline Comercial

| # | Tarefa | Camada | Depende | Status |
|---|--------|--------|---------|--------|
| D-11 | Domain entities + types do módulo core | [modulo]/domain | D-06 | ⬜ |
| D-12 | Ports (interfaces de repositório) | [modulo]/domain/ports | D-11 | ⬜ |
| D-13 | Mock service / service concreto | [modulo]/infrastructure | D-12 | ⬜ |
| D-14 | DashboardPage com KPIs e métricas | [modulo]/presentation/pages | D-13 | ⬜ |
| D-15 | Componentes de pipeline (kanban / funil) | [modulo]/presentation/components | D-14 | ⬜ |
| D-16 | CRUD pages (list, form, detail) | [modulo]/presentation/pages | D-13 | ⬜ |

### Sprint 4 — Módulos Comerciais

| # | Tarefa | Camada | Depende | Status |
|---|--------|--------|---------|--------|
| D-17 | Módulo de orçamentos | [modulo] | D-16 | ⬜ |
| D-18 | Módulo de propostas | [modulo] | D-17 | ⬜ |
| D-19 | Módulo de contratos | [modulo] | D-18 | ⬜ |
| D-20 | Handoff / integração com backend remoto | [modulo]/infrastructure | D-10 | ⬜ |
| D-21 | Storage local (SQLite via Tauri) | src-tauri | D-20 | ⬜ |

### Sprint 5 — Tauri Integrations

| # | Tarefa | Camada | Depende | Status |
|---|--------|--------|---------|--------|
| D-22 | Comandos Rust personalizados | src-tauri/commands | D-04 | ⬜ |
| D-23 | Notificações nativas (sistema) | shared/infrastructure | D-04 | ⬜ |
| D-24 | File dialogs (abrir/salvar) | shared/infrastructure | D-04 | ⬜ |
| D-25 | Auto-update (Tauri updater) | src-tauri | D-22 | ⬜ |
| D-26 | Shortcuts de teclado | app | D-09 | ⬜ |

### Sprint 6 — Testes

| # | Tarefa | Camada | Depende | Status |
|---|--------|--------|---------|--------|
| D-27 | Testes unitários — stores, hooks, utils | tests/unit | D-14 | ⬜ |
| D-28 | Testes de componentes — pages e UI | tests/unit | D-16 | ⬜ |
| D-29 | Testes de integração — Tauri driver (WebDriver) | tests/integration | D-28 | ⬜ |
| D-30 | Testes e2e — fluxos críticos | tests/e2e | D-29 | ⬜ |

### Sprint 7 — Build e Distribuição

| # | Tarefa | Camada | Depende | Status |
|---|--------|--------|---------|--------|
| D-31 | Configurar Tauri bundler (MSI, DMG, AppImage) | src-tauri | D-26 | ⬜ |
| D-32 | Code signing (Windows + macOS) | — | D-31 | ⬜ |
| D-33 | CI/CD para desktop (GitHub Actions + Tauri) | .github | D-31 | ⬜ |
| D-34 | Runbook de deploy e debugging | docs/05-manuals | D-33 | ⬜ |

---

> Instruções: marque o status de cada tarefa ao longo do desenvolvimento. Tarefas já implementadas devem ser marcadas como ✅. Ajuste o escopo conforme o app desktop do projeto.
