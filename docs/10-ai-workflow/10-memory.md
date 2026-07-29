# Memória de Contexto (MEMORY.md)

Arquivo vivo que mantém o contexto entre sessões de IA. Leia no **início** de cada sessão para retomar o estado e registre as alterações ao **final** para a próxima sessão.

---

## Estado Atual

- **Última sessão:** N/A (projeto em estruturação)
- **Branch ativa:** `main`
- **Foco atual:** Estruturação da documentação e planos de implementação
- **Próxima sessão sugerida:** Implementação de funcionalidades do desktop (dashboard, pipeline comercial)

---

## Módulos Existentes

### Backend (`backend/src/modules/`)

| Módulo | Camadas | Status |
|--------|---------|--------|
| `auth` | domain, application, infrastructure (database, external-services), presentation (controllers) | Scaffolded (apenas `.gitkeep`) |

### Frontend Web (`frontend/web/src/modules/`)

| Módulo | Camadas | Status |
|--------|---------|--------|
| `auth` | domain (entities, ports), application (dto, mappers, usecases), infrastructure (repositories), presentation (components, guards, hooks, pages, store) | Scaffolded (apenas `.gitkeep`) |

### Frontend Desktop (`frontend/desktop/src/modules/`)

| Módulo | Camadas | Status |
|--------|---------|--------|
| `counter` | domain (CounterEntity), application (CounterUseCase), infrastructure (TauriCounterRepository), presentation (CounterPage) | ✅ Implementado (exemplo FSD) |
| `greeting` | domain (GreetingEntity), application (GreetUseCase), infrastructure (TauriGreetingRepository), presentation (GreetingForm) | ✅ Implementado (exemplo FSD) |
| `dashboard` | domain (types: Deal, PipelineStage, DashboardMetrics), infrastructure (dashboardMockService), presentation (DashboardPage, KPICards, SalesPipeline, GoalProgress, RecentDeals) | ✅ Implementado (CRM pipeline) |

### Frontend Mobile (`frontend/mobile/`)

| Módulo | Camadas | Status |
|--------|---------|--------|
| — | — | Apenas `.gitkeep` — estrutura reservada para fase futura |

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

Ver planos detalhados em `02-planning/`:

1. **Desktop** (`02-planning/desktop-implementation.md`): Dashboard comercial (Sprint 3) — expandir pipeline com módulos de orçamento, proposta e contrato
2. **Backend** (`02-planning/backend-implementation.md`): Setup → Fundação → Casos de Uso → API
3. **Web** (`02-planning/web-implementation.md`): Setup → 5 sprints
4. **Infra** (`02-planning/infrastructure-implementation.md`): Docker → Nginx → PostgreSQL → CI/CD → Cloud

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
