# MEMORY — Sessão: 29/07/2026

## Frente trabalhada

Frontend Desktop (Tauri v2 + React 19 + Tailwind v4)

## O que foi feito

### D-09 — React Router
- Instalado `react-router-dom`
- `App.tsx` configurado com `BrowserRouter`, layout route via `MainLayout` com `<Outlet />`
- Rotas: `/` (Dashboard), `/clientes`, `/propostas`, `/contratos`, `/configuracoes`
- `Sidebar.tsx` migrada de `<a>` para `<NavLink>` com classe `active` dinâmica

### D-06 — Auth Store
- Instalado `zustand`
- `auth/domain/types.ts` — `User`, `LoginCredentials`, `AuthState`
- `auth/domain/AuthRepository.ts` — porta (interface)
- `auth/infrastructure/mockAuthService.ts` — implementação mock com localStorage
- `auth/application/AuthStore.ts` — Zustand store com `login`, `logout`, `initialize`

### D-07 — AuthGuard
- `auth/presentation/AuthGuard.tsx` — guarda de rota, redireciona para `/login` se não autenticado

### D-08 — LoginPage
- `auth/presentation/LoginPage.tsx` — formulário de login com validação
- Mock credentials: `marcus@orideal.com` / `123456`

### Logout no Sidebar
- Botão "Sair" no footer da sidebar
- Dropdown menu ao clicar no perfil (Configurações + Sair)
- Posicionamento dinâmico com `position: fixed` — abre para cima ou para baixo conforme espaço disponível

### Outros
- Páginas placeholder: Clientes, Propostas, Contratos, Configurações
- `AGENTS.md` atualizado com seção **CSS & Theme** e referência a desktop
- `shared/theme/auth.css` — estilos de login e loading
- Merge do branch `setup` → `main` concluído

## Decisões tomadas

| Decisão | Opção | Motivo |
|---------|-------|--------|
| Estado global | Zustand | Leve, tipado, sem boilerplate |
| Login mock | localStorage + delay 800ms | Permite testar fluxo sem backend |
| Dropdown perfil | `position: fixed` com `getBoundingClientRect` | Evita corte pela viewport |
| Estilos CSS | Híbrido: utilities Tailwind + CSS custom para lógica complexa | Documentado em AGENTS.md |

## Próximos passos sugeridos

1. **D-10** — Integração Tauri commands (Rust ↔ React) em `shared/infrastructure`
2. **Sprint 3** — Módulo Core (pipeline comercial)
3. **Ajustes finos** — notificações, busca funcional, atalhos de teclado

## Tarefas concluídas

- D-01 a D-05 (Sprint 1) — ✅ (pré-existentes)
- D-06 — ✅
- D-07 — ✅
- D-08 — ✅
- D-09 — ✅
