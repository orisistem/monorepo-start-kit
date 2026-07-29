# Plano de Implementação — Frontend Web

> **Template genérico.** Substitua `[framework]`, `[estado]`, `[HTTP]` pela stack escolhida e preencha as tarefas conforme o domínio do projeto.

---

## Stack

| Camada | Tecnologia |
|--------|-----------|
| Framework | `[framework: React / Vue / Angular]` |
| Bundler | `[bundler: Vite / Webpack]` |
| Estado | `[estado: Zustand / Pinia / NgRx]` + `[server-state: TanStack Query / SWR]` |
| HTTP | `[HTTP: axios / fetch]` |
| Formulários | `[forms: React Hook Form / Vue Form]` + Zod |
| Estilos | `[CSS: Tailwind / Styled Components / CSS Modules]` |
| Testes | Vitest + Testing Library + Playwright |
| Container | Docker (multi-stage) |

---

## Sprints

### Sprint 1 — Setup e Autenticação

| # | Tarefa | Camada | Status |
|---|--------|--------|--------|
| W-01 | Scaffold Vite + dependências + configuração de aliases/proxy | — | ⬜ |
| W-02 | Configurar Tailwind / design tokens + tema global | shared/presentation | ⬜ |
| W-03 | Estrutura FSD do módulo `auth` (domain, application, infrastructure, presentation) | auth | ⬜ |
| W-04 | Auth store ([estado]) — login, logout, sessão | auth/application | ⬜ |
| W-05 | API client ([HTTP]) com interceptors JWT | shared/infrastructure | ⬜ |
| W-06 | AuthGuard + rotas protegidas | auth/presentation | ⬜ |
| W-07 | LoginPage com validação ([forms] + Zod) | auth/presentation | ⬜ |
| W-08 | Layout principal (sidebar, header, footer) | shared/presentation | ⬜ |
| W-09 | React Router / roteador com lazy loading | app | ⬜ |

### Sprint 2 — Módulo Core (CRUD principal)

| # | Tarefa | Camada | Depende | Status |
|---|--------|--------|---------|--------|
| W-10 | Domain entities + enums do módulo core | [modulo]/domain | W-04 | ⬜ |
| W-11 | Ports (interfaces de repositório) | [modulo]/domain/ports | W-10 | ⬜ |
| W-12 | DTOs e mappers | [modulo]/application/dto | W-10 | ⬜ |
| W-13 | Hooks ([server-state]) — listagem, criação, atualização | [modulo]/application/hooks | W-11 | ⬜ |
| W-14 | Repository concreto ([HTTP]) | [modulo]/infrastructure | W-12, W-05 | ⬜ |
| W-15 | ListPage com tabela/filtros/paginação | [modulo]/presentation/pages | W-13 | ⬜ |
| W-16 | FormPage (criação/edição) com validação | [modulo]/presentation/pages | W-14 | ⬜ |
| W-17 | Componentes de UI reutilizáveis (card, modal, badge) | shared/presentation | W-02 | ⬜ |

### Sprint 3 — Funcionalidades Avançadas

| # | Tarefa | Camada | Depende | Status |
|---|--------|--------|---------|--------|
| W-18 | Upload de arquivos / anexos | [modulo]/infrastructure | W-14 | ⬜ |
| W-19 | Workflow de aprovação / status | [modulo]/application | W-13 | ⬜ |
| W-20 | Dashboard com métricas e gráficos | [modulo]/presentation | W-15 | ⬜ |
| W-21 | Notificações (toast / snackbar) | shared/presentation | W-02 | ⬜ |
| W-22 | Filtros avançados + busca | [modulo]/presentation | W-15 | ⬜ |

### Sprint 4 — Testes e Qualidade

| # | Tarefa | Camada | Depende | Status |
|---|--------|--------|---------|--------|
| W-23 | Testes unitários — stores e hooks | tests/unit | W-13 | ⬜ |
| W-24 | Testes de componentes — pages e UI | tests/unit | W-15, W-16 | ⬜ |
| W-25 | Testes de integração — fluxos críticos | tests/integration | W-24 | ⬜ |
| W-26 | Testes e2e — Playwright / Cypress | tests/e2e | W-25 | ⬜ |
| W-27 | Acessibilidade (a11y) — revisão e correções | — | W-26 | ⬜ |

### Sprint 5 — Performance e Deploy

| # | Tarefa | Camada | Depende | Status |
|---|--------|--------|---------|--------|
| W-28 | Code splitting + lazy loading de rotas | app | W-22 | ⬜ |
| W-29 | Otimização de bundle (tree-shaking, assets) | — | W-28 | ⬜ |
| W-30 | Dockerfile multi-stage + CI/CD | — | W-29 | ⬜ |
| W-31 | Runbook de deploy | docs/05-manuals | W-30 | ⬜ |

---

> Instruções: copie este arquivo, renomeie para `web-implementation.md` (substituindo o template) e marque o status de cada tarefa ao longo do desenvolvimento. Ajuste o número de sprints conforme a complexidade do projeto.
