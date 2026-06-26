# Memória de Contexto (MEMORY.md)

Arquivo vivo que mantém o contexto entre sessões de IA. Leia no **início** de cada sessão para retomar o estado e registre as alterações ao **final** para a próxima sessão.

---

## Estado Atual

- **Última sessão:** N/A (projeto recém-inicializado)
- **Branch ativa:** `main`
- **Foco atual:** Definição de stack e configuração inicial
- **Próxima sessão sugerida:** Escolher frameworks (Express/NestJS/Fastify, React/Vue/Angular) e configurar entry points

---

## Módulos Existentes

### Backend (`backend/src/modules/`)

| Módulo | Camadas | Status |
|--------|---------|--------|
| `auth` | domain, application, infrastructure (database, external-services), presentation (controllers) | Scaffolded (apenas `.gitkeep`) |

### Frontend (`frontend/src/modules/`)

| Módulo | Camadas | Status |
|--------|---------|--------|
| `auth` | domain (entities, ports), application (dto, mappers, usecases), infrastructure (repositories), presentation (components, guards, hooks, pages, store) | Scaffolded (apenas `.gitkeep`) |

---

## Registro de Sessões

| Data | Foco | Branch | Resumo |
|------|------|--------|--------|
| — | — | — | — |

---

## Decisões

| # | Data | Decisão | Justificativa | Consequências |
|---|------|---------|---------------|---------------|
| — | — | — | — | — |

---

## Problemas Conhecidos & Gotchas

_Nenhum registrado até o momento._

---

## Próximos Passos

1. Definir framework do backend (Express, NestJS, Fastify)
2. Definir framework do frontend (React, Vue, Angular)
3. Configurar `backend/src/config/` (DI wiring, env vars)
4. Configurar `frontend/src/app/` (entry point, routing, providers)
5. Remover `.gitkeep` e implementar primeiro caso de uso real

---

## Template de Sessão (copiar ao final)

```markdown
## Sessão: YYYY-MM-DD

**Foco:** [objetivo principal da sessão]
**Branch:** [branch usada]

### O que foi feito
- [arquivo/feature 1]
- [arquivo/feature 2]

### Decisões tomadas
- [decisão 1] — [motivo]
- [decisão 2] — [motivo]

### Descobertas / Gotchas
- [aprendizado ou problema encontrado]

### Arquivos criados / modificados
- `caminho/do/arquivo` — [o que foi feito]

### Próximos passos
1. [próximo passo 1]
2. [próximo passo 2]
```
