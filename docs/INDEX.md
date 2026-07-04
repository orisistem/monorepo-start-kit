# Índice de Decisão: O Que Ler Quando

> **Use esta tabela para encontrar o documento certo rapidamente.** Se você sabe o que quer fazer mas não sabe qual doc ler, está no lugar certo.

---

## Por tarefa

| Você quer... | Leia isto | E depois isto |
|-------------|-----------|---------------|
| **Entender o projeto pela primeira vez** | `docs/00-onboarding.md` | Siga a trilha do seu perfil |
| **Iniciar uma sessão com IA** | `docs/10-ai-workflow/00-start-prompt.md` | `MEMORY.md` + `CODEBASE.md` |
| **Entender um domínio de negócio novo** | `docs/10-ai-workflow/02-business-discovery.md` | Use os prompts de domain discovery |
| **Escrever requisitos de uma feature** | `docs/01-requirements/PRD-template.md` | `docs/10-ai-workflow/04-fluxo-concepcao.md` |
| **Escrever a especificação técnica** | `docs/03-architecture/tech-spec-template.md` | `docs/10-ai-workflow/04-fluxo-concepcao.md` |
| **Registrar uma decisão arquitetural** | `docs/03-architecture/ADR-template.md` | — |
| **Modelar o banco de dados** | `docs/03-architecture/database/README.md` | `docs/03-architecture/tech-spec-template.md` |
| **Implementar código (feature nova)** | `docs/10-ai-workflow/05-fluxo-desenvolvimento.md` | Skill `feature-sliced` |
| **Revisar código** | `docs/10-ai-workflow/06-fluxo-revisao-testes.md` | Agent `code-reviewer` |
| **Escrever testes** | `docs/09-testing/README.md` | Skill `test-pyramid` + Agent `tester` |
| **Corrigir um bug** | `docs/10-ai-workflow/07-fluxo-manutencao.md` | Template de bug report |
| **Refatorar** | `docs/10-ai-workflow/07-fluxo-manutencao.md` (seção Refatoração) | Skill `tech-debt` |
| **Fazer um commit** | `docs/08-workflow/README.md` | `npm run commit` |
| **Abrir um PR** | `docs/08-workflow/README.md` | `docs/08-workflow/PR-template.md` |
| **Fazer deploy** | `infrastructure/` + `docker-compose.yml` | Runbook em `docs/05-manuals/` |
| **Configurar monitoramento** | `docs/07-monitoring/README.md` | `docker-compose.monitoring.yml` |
| **Escrever um prompt melhor** | `docs/10-ai-workflow/03-prompt-engineering.md` | — |
| **Escolher ferramenta de IA** | `docs/10-ai-workflow/08-ferramentas.md` | `docs/10-ai-workflow/12-workflow-plan.md` (Seção 4.3) |
| **Entender o plano de workflow completo** | `docs/10-ai-workflow/12-workflow-plan.md` | — |
| **Lembrar as regras do projeto** | `docs/10-ai-workflow/09-boas-praticas.md` | — |
| **Saber o que a IA sabe sobre o projeto** | `AGENTS.md` (raiz) | `docs/10-ai-workflow/11-codebase.md` |

---

## Por fase do ciclo de desenvolvimento

```
FASE 0: ONBOARDING
  └── docs/00-onboarding.md

FASE 1: DISCOVERY (entender o negócio)
  └── docs/10-ai-workflow/02-business-discovery.md

FASE 2: CONCEPÇÃO (ideia → requisitos → design)
  ├── docs/10-ai-workflow/04-fluxo-concepcao.md
  ├── docs/01-requirements/PRD-template.md
  ├── docs/03-architecture/tech-spec-template.md
  └── docs/03-architecture/ADR-template.md

FASE 3: PLANEJAMENTO (tasks, sprints)
  └── docs/02-planning/

FASE 4: DESENVOLVIMENTO (código)
  ├── docs/10-ai-workflow/05-fluxo-desenvolvimento.md
  ├── docs/10-ai-workflow/09-boas-praticas.md
  └── .opencode/skills/feature-sliced/

FASE 5: REVISÃO & TESTES
  ├── docs/10-ai-workflow/06-fluxo-revisao-testes.md
  ├── docs/09-testing/README.md
  ├── .opencode/agents/code-reviewer.md
  └── .opencode/agents/tester.md

FASE 6: ENTREGA (PR, CI/CD, deploy)
  ├── docs/08-workflow/README.md
  └── docs/05-manuals/

FASE 7: MANUTENÇÃO (bugs, refatoração)
  ├── docs/10-ai-workflow/07-fluxo-manutencao.md
  └── .opencode/skills/tech-debt/
```

---

## Por papel

| Papel | Docs primários | Docs secundários |
|-------|---------------|-----------------|
| **Product Manager** | `01-requirements/PRD-template.md`, `02-business-discovery.md` | `04-fluxo-concepcao.md` |
| **Tech Lead** | `12-workflow-plan.md`, `09-boas-praticas.md`, `03-architecture/` | `01-principios-gerais.md` |
| **Desenvolvedor** | `05-fluxo-desenvolvimento.md`, `06-fluxo-revisao-testes.md`, `09-boas-praticas.md` | `03-prompt-engineering.md` |
| **QA / SDET** | `09-testing/README.md`, `06-fluxo-revisao-testes.md` | `test-pyramid` skill |
| **DevOps / SRE** | `07-monitoring/README.md`, `infrastructure/` | `docker-compose.yml` |
| **Agente de IA** | `00-start-prompt.md`, `09-boas-praticas.md` | Documento da fase atual (02-07) |

---

## Por tipo de artefato que você precisa gerar

| Artefato | Template | Fluxo de referência |
|----------|---------|---------------------|
| PRD (requisitos) | `docs/01-requirements/PRD-template.md` | `04-fluxo-concepcao.md` |
| Tech-Spec | `docs/03-architecture/tech-spec-template.md` | `04-fluxo-concepcao.md` |
| ADR | `docs/03-architecture/ADR-template.md` | `04-fluxo-concepcao.md` |
| Bug Report | `docs/05-manuals/bug-report-template.md` | `07-fluxo-manutencao.md` |
| Teste unitário | — | `09-testing/README.md` + skill `test-pyramid` |
| Teste de integração | — | `09-testing/README.md` + skill `test-pyramid` |
| Teste E2E | — | `09-testing/README.md` + skill `test-pyramid` |
| PR | PR template | `08-workflow/README.md` |
| Sprint plan | `docs/02-planning/` | — |
| Runbook | `docs/05-manuals/` | — |
| OpenAPI spec | `docs/04-api/` | — |
