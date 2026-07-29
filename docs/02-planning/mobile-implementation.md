# Plano de Implementação — Mobile

> **Template genérico.** Substitua `[framework]`, `[estado]` pela stack escolhida e preencha as tarefas conforme o domínio do projeto.

---

## Stack

| Camada        | Tecnologia                                                                     |
| ------------- | ------------------------------------------------------------------------------ |
| Framework     | `[framework: React Native / Flutter / Expo]`                                   |
| Linguagem     | `[linguagem: TypeScript / Dart]`                                               |
| Estado        | `[estado: Zustand / Riverpod / BLoC]` + `[server-state: TanStack Query / SWR]` |
| HTTP          | `[HTTP: axios / dio / fetch]`                                                  |
| Navegação     | `[nav: React Navigation / GoRouter]`                                           |
| Storage local | `[storage: AsyncStorage / MMKV / Hive]`                                        |
| Testes        | `[testes: Jest / flutter_test]` + `[e2e: Detox / Maestro]`                     |
| Container     | `[Dockerfile? — se houver build server]`                                       |

---

## Sprints

### Sprint 1 — Setup e Autenticação

| #    | Tarefa                                                                             | Camada                | Status |
| ---- | ---------------------------------------------------------------------------------- | --------------------- | ------ |
| M-01 | Scaffold do projeto `[framework]` + estrutura FSD                                  | —                     | ⬜     |
| M-02 | Configurar tema global (cores, tipografia, espaçamento)                            | shared/presentation   | ⬜     |
| M-03 | Estrutura FSD do módulo `auth` (domain, application, infrastructure, presentation) | auth                  | ⬜     |
| M-04 | Auth store ([estado]) — login, logout, sessão persistida                           | auth/application      | ⬜     |
| M-05 | API client ([HTTP]) com interceptors + token refresh                               | shared/infrastructure | ⬜     |
| M-06 | Tela de login com validação                                                        | auth/presentation     | ⬜     |
| M-07 | Navegação protegida (auth guard) + navegação principal                             | app                   | ⬜     |
| M-08 | Splash screen + onboarding (primeiro uso)                                          | app                   | ⬜     |

### Sprint 2 — Módulo Core (CRUD principal)

| #    | Tarefa                                                | Camada                        | Depende    | Status |
| ---- | ----------------------------------------------------- | ----------------------------- | ---------- | ------ |
| M-09 | Domain entities + enums do módulo core                | [modulo]/domain               | M-04       | ⬜     |
| M-10 | Ports (interfaces de repositório)                     | [modulo]/domain/ports         | M-09       | ⬜     |
| M-11 | DTOs e mappers                                        | [modulo]/application/dto      | M-09       | ⬜     |
| M-12 | Hooks / queries ([server-state])                      | [modulo]/application/hooks    | M-10       | ⬜     |
| M-13 | Repository concreto ([HTTP])                          | [modulo]/infrastructure       | M-11, M-05 | ⬜     |
| M-14 | ListScreen com FlatList / paginação / pull-to-refresh | [modulo]/presentation/screens | M-12       | ⬜     |
| M-15 | FormScreen (criação/edição) com validação             | [modulo]/presentation/screens | M-13       | ⬜     |
| M-16 | DetailScreen com ações contextuais                    | [modulo]/presentation/screens | M-14       | ⬜     |

### Sprint 3 — Funcionalidades Offline e Nativas

| #    | Tarefa                                       | Camada                | Depende | Status |
| ---- | -------------------------------------------- | --------------------- | ------- | ------ |
| M-17 | Cache offline com [storage]                  | shared/infrastructure | M-05    | ⬜     |
| M-18 | Sincronização quando online (background)     | shared/infrastructure | M-17    | ⬜     |
| M-19 | Push notifications (FCM / APNs)              | shared/infrastructure | M-05    | ⬜     |
| M-20 | Deep linking                                 | app                   | M-07    | ⬜     |
| M-21 | Câmera / galeria (upload de fotos)           | shared/infrastructure | M-17    | ⬜     |
| M-22 | Biometria (fingerprint / face ID) para login | auth/presentation     | M-06    | ⬜     |

### Sprint 4 — Testes e Qualidade

| #    | Tarefa                                  | Camada            | Depende    | Status |
| ---- | --------------------------------------- | ----------------- | ---------- | ------ |
| M-23 | Testes unitários — stores, hooks, utils | tests/unit        | M-12       | ⬜     |
| M-24 | Testes de componentes — telas           | tests/unit        | M-14, M-15 | ⬜     |
| M-25 | Testes de integração — fluxos críticos  | tests/integration | M-24       | ⬜     |
| M-26 | Testes e2e — [e2e framework]            | tests/e2e         | M-25       | ⬜     |
| M-27 | Acessibilidade (VoiceOver / TalkBack)   | —                 | M-26       | ⬜     |

### Sprint 5 — Performance e Deploy

| #    | Tarefa                                            | Camada          | Depende | Status |
| ---- | ------------------------------------------------- | --------------- | ------- | ------ |
| M-28 | Code splitting + lazy loading de telas            | app             | M-22    | ⬜     |
| M-29 | Otimização de bundle (assets, ícones, fontes)     | —               | M-28    | ⬜     |
| M-30 | Configuração de CI/CD (EAS Build / fastlane)      | —               | M-29    | ⬜     |
| M-31 | Publicação na App Store + Google Play (checklist) | —               | M-30    | ⬜     |
| M-32 | Runbook de deploy e debugging                     | docs/05-manuals | M-31    | ⬜     |

---

> Instruções: copie este arquivo, renomeie para `mobile-implementation.md` (substituindo o template) e marque o status de cada tarefa ao longo do desenvolvimento. Ajuste o escopo conforme o framework escolhido.
