# Plano de Implementação — Mobile

> **Template genérico.** Substitua `[framework]`, `[estado]` pela stack escolhida e preencha as tarefas conforme o domínio do projeto.

---

## Stack

| Camada | Tecnologia |
|--------|-----------|
| Framework | `[framework: React Native / Flutter / Expo]` |
| Linguagem | `[linguagem: TypeScript / Dart]` |
| Estado | `[estado: Zustand / Riverpod / BLoC]` + `[server-state: TanStack Query / SWR]` |
| HTTP | `[HTTP: axios / dio / fetch]` |
| Navegação | `[nav: React Navigation / GoRouter]` |
| Storage local | `[storage: AsyncStorage / MMKV / Hive]` |
| Testes | `[testes: Jest / flutter_test]` + `[e2e: Detox / Maestro]` |

---

## Sprints

### Sprint 1 — Setup e Autenticação

| # | Tarefa | Camada | Status |
|---|--------|--------|--------|
| M-01 | Scaffold do projeto | — | ⬜ |
| M-02 | Configurar tema global (cores, tipografia, espaçamento) | shared/presentation | ⬜ |
| M-03 | Estrutura FSD do módulo `auth` | auth | ⬜ |
| M-04 | Auth store — login, logout, sessão persistida | auth/application | ⬜ |
| M-05 | API client com interceptors + token refresh | shared/infrastructure | ⬜ |
| M-06 | Tela de login com validação | auth/presentation | ⬜ |
| M-07 | Navegação protegida + navegação principal | app | ⬜ |
| M-08 | Splash screen + onboarding (primeiro uso) | app | ⬜ |

### Sprint 2 — Módulo Core

| # | Tarefa | Camada | Depende | Status |
|---|--------|--------|---------|--------|
| M-09 | Domain entities + enums | [modulo]/domain | M-04 | ⬜ |
| M-10 | Ports (interfaces de repositório) | [modulo]/domain/ports | M-09 | ⬜ |
| M-11 | DTOs e mappers | [modulo]/application/dto | M-09 | ⬜ |
| M-12 | Hooks / queries | [modulo]/application/hooks | M-10 | ⬜ |
| M-13 | Repository concreto | [modulo]/infrastructure | M-11, M-05 | ⬜ |
| M-14 | ListScreen com FlatList / paginação / pull-to-refresh | [modulo]/presentation/screens | M-12 | ⬜ |
| M-15 | FormScreen (criação/edição) com validação | [modulo]/presentation/screens | M-13 | ⬜ |
| M-16 | DetailScreen com ações contextuais | [modulo]/presentation/screens | M-14 | ⬜ |

### Sprint 3 — Funcionalidades Offline e Nativas

| # | Tarefa | Camada | Depende | Status |
|---|--------|--------|---------|--------|
| M-17 | Cache offline | shared/infrastructure | M-05 | ⬜ |
| M-18 | Sincronização quando online (background) | shared/infrastructure | M-17 | ⬜ |
| M-19 | Push notifications (FCM / APNs) | shared/infrastructure | M-05 | ⬜ |
| M-20 | Deep linking | app | M-07 | ⬜ |
| M-21 | Câmera / galeria (upload de fotos) | shared/infrastructure | M-17 | ⬜ |
| M-22 | Biometria (fingerprint / face ID) para login | auth/presentation | M-06 | ⬜ |

### Sprint 4 — Testes e Qualidade

| # | Tarefa | Camada | Depende | Status |
|---|--------|--------|---------|--------|
| M-23 | Testes unitários | tests/unit | M-12 | ⬜ |
| M-24 | Testes de componentes | tests/unit | M-14, M-15 | ⬜ |
| M-25 | Testes de integração | tests/integration | M-24 | ⬜ |
| M-26 | Testes e2e | tests/e2e | M-25 | ⬜ |
| M-27 | Acessibilidade (VoiceOver / TalkBack) | — | M-26 | ⬜ |

### Sprint 5 — Performance e Deploy

| # | Tarefa | Camada | Depende | Status |
|---|--------|--------|---------|--------|
| M-28 | Code splitting + lazy loading | app | M-22 | ⬜ |
| M-29 | Otimização de bundle | — | M-28 | ⬜ |
| M-30 | Configuração de CI/CD (EAS Build / fastlane) | — | M-29 | ⬜ |
| M-31 | Publicação na App Store + Google Play (checklist) | — | M-30 | ⬜ |
| M-32 | Runbook de deploy e debugging | docs/05-manuals | M-31 | ⬜ |

---

> Instruções: marque o status de cada tarefa ao longo do desenvolvimento. Ajuste o escopo conforme o framework escolhido.
