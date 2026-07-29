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
| Estado | Zustand |
| Tauri Plugins | opener |
| Testes | Vitest + Testing Library + `@tauri-apps/test` |
| Distribuição | Tauri bundler (MSI, DMG, AppImage) |

---

## Sprints

### Sprint 1 — Setup e Scaffold

| # | Tarefa | Camada | Status |
|---|--------|--------|--------|
| D-01 | Criar projeto Tauri + React + Vite | — | ✅ |
| D-02 | Configurar estrutura FSD (domain, application, infrastructure, presentation) | — | ✅ |
| D-03 | Configurar Tailwind v4 + tema global (design tokens) | shared/theme | ✅ |
| D-04 | Configurar Tauri plugins essenciais (`tauri.conf.json`) | src-tauri | ✅ |
| D-05 | Criar layout base (MainLayout com Sidebar + TopNav) | shared/presentation/layouts | ✅ |

### Sprint 2 — Autenticação e Navegação

| # | Tarefa | Camada | Depende | Status |
|---|--------|--------|---------|--------|
| D-06 | Auth store — login, logout, sessão | auth/application | D-02 | ✅ |
| D-07 | AuthGuard + rotas protegidas | auth/presentation | D-06 | ✅ |
| D-08 | LoginPage com validação | auth/presentation | D-07 | ✅ |
| D-09 | Navegação por abas / páginas com React Router | app | D-05 | ✅ |
| D-10 | Integração com Tauri commands (Rust ↔ React) | shared/infrastructure | D-04 | ⬜ |

### Sprint 3 — Módulo de Clientes (CRM) — RF-01

**Requisitos (PRD):**
- Cadastro de Clientes **PF e PJ** com informações fiscais e múltiplos contatos
- Histórico cronológico de interações, propostas e contratos por cliente

| # | Tarefa | Camada | Depende | Status |
|---|--------|--------|---------|--------|
| D-11a | Domain entities: PF, PJ, Contato, Endereço, Documento | clients/domain | — | ⬜ |
| D-11b | ClientRepository (port) + types | clients/domain | D-11a | ⬜ |
| D-12 | MockClientService com seed data (~10 clientes) | clients/infrastructure | D-11b | ⬜ |
| D-13 | ClientStore (Zustand: CRUD + list + search) | clients/application | D-12 | ⬜ |
| D-14 | ClientsPage + ClientTable + ClientFilters | clients/presentation | D-13 | ⬜ |
| D-15 | ClientFormModal (PF/PJ toggle, contatos, endereços, docs) | clients/presentation | D-14 | ⬜ |
| D-16 | ClientDetailDrawer (histórico de propostas/contratos) | clients/presentation | D-15 | ⬜ |

**Domain — `clients/domain/types.ts`**

```ts
ClientPF  { id, nome, cpf, rg, orgaoEmissor, dataNascimento, ... }
ClientPJ  { id, razaoSocial, nomeFantasia, cnpj, inscricaoEstadual, inscricaoMunicipal, ... }
Contato   { id, nome, cargo, email, telefone, principal }
Endereco  { id, logradouro, numero, complemento, bairro, cidade, estado, cep, tipo }
DocumentoLink { id, nome, tipo, url, uploadedAt }
```

### Sprint 4 — Pipeline Comercial (Dashboard)

| # | Tarefa | Camada | Depende | Status |
|---|--------|--------|---------|--------|
| D-17 | Domain entities do pipeline (KPI, Stage, Deal) | core/domain | D-06 | ⬜ |
| D-18 | Mock service com métricas do pipeline | core/infrastructure | D-17 | ⬜ |
| D-19 | Componentes de pipeline (kanban / funil) | core/presentation/components | D-18 | ⬜ |
| D-20 | Handoff / integração com backend remoto | core/infrastructure | D-10 | ⬜ |
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
