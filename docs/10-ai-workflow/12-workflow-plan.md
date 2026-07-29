# Plano de Fluxo de Trabalho AI-Assisted

> **Propósito:** Este documento serve como roteiro-mestre para programador e agente de IA. Ele define o ciclo completo de desenvolvimento assistido por IA, mapeia quais documentos usar em cada fase e estabelece a ordem canônica de execução.

---

## 1. Diagnóstico da Documentação Atual

### 1.1 Seções preenchidas (✅)

| #                  | Seção      | Estado                                                                                    | Destaques |
| ------------------ | ---------- | ----------------------------------------------------------------------------------------- | --------- |
| `01-requirements/` | ✅ Parcial | Template PRD completo com histórias, critérios de aceitação, regras de negócio, DoD       |
| `02-planning/`     | ✅ Parcial | Templates de plano: backend, frontend, mobile, infraestrutura (genéricos, stack-agnostic) |
| `03-architecture/` | ✅ Parcial | Template de tech-spec + database README + diagrama xmind                                  |
| `07-monitoring/`   | ✅ Parcial | README com diretrizes de SLA/SLO/SLI, dashboards e alertas                                |
| `08-workflow/`     | ✅ Sólido  | Conventional Commits, Commitizen, Husky, `npm run commit` e `npm run ship`                |
| `09-testing/`      | ✅ Sólido  | Pirâmide de testes clara (unit/integration/e2e), regras de isolamento, hook pre-push      |
| `10-ai-workflow/`  | ✅ Denso   | 12 documentos cobrindo do business discovery à manutenção                                 |

### 1.2 Seções vazias (⚠️ — apenas `.gitkeep`)

| #              | Seção                                                 | O que deveria conter |
| -------------- | ----------------------------------------------------- | -------------------- |
| `04-api/`      | OpenAPI/Swagger specs, Postman collections, contratos |
| `05-manuals/`  | Runbooks, user guides, admin manuals                  |
| `06-meetings/` | Minutas de dailies, planning, retrospectivas          |

### 1.3 Conteúdo dos 12 arquivos de `10-ai-workflow/`

| Arquivo                       | Função                                                                       | Cobre bem?                                       |
| ----------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------ |
| `00-start-prompt.md`          | Prompt de inicialização de sessão                                            | ✅ — mas é específico do OpenCode                |
| `01-principios-gerais.md`     | Filosofia, regras de ouro, quando usar IA vs manual                          | ✅ Excelente                                     |
| `02-business-discovery.md`    | Domain discovery, linguagem ubíqua, event storming, bounded contexts         | ✅ Excelente — integração DDD+IA                 |
| `03-prompt-engineering.md`    | Anatomia de prompts, templates por tipo de tarefa, armadilhas                | ✅ Bom                                           |
| `04-fluxo-concepcao.md`       | Ideação → requisitos → planning → ADRs                                       | ✅ Bom                                           |
| `05-fluxo-desenvolvimento.md` | Análise de tarefa, TDD, implementação direta, pair programming               | ✅ Bom                                           |
| `06-fluxo-revisao-testes.md`  | Auto-revisão, geração de testes nas 3 camadas, revisão de testes             | ✅ Bom                                           |
| `07-fluxo-manutencao.md`      | Bugs, melhorias, refatoração, dívida técnica                                 | ✅ Bom                                           |
| `08-ferramentas.md`           | OpenCode + Antigravity + Copilot, setup, variáveis de ambiente               | ✅ Bom — mas não cobre Claude Code               |
| `09-boas-praticas.md`         | Regra de dependência, nomenclatura, FSD, idiomas, testes, commits, qualidade | ✅ Excelente — referência canônica               |
| `10-memory.md`                | Template de MEMORY.md para contexto entre sessões                            | ✅ Bom — template existe, vazio por ser template |
| `11-codebase.md`              | CODEBASE.md — mapa do sistema, entry points, serviços externos               | ✅ Bom — template existe, vazio por ser template |

### 1.4 Configuração OpenCode (`.opencode/`)

| Recurso                | Arquivo                                    | Função                                        |
| ---------------------- | ------------------------------------------ | --------------------------------------------- |
| Agent `code-reviewer`  | `.opencode/agents/code-reviewer.md`        | Revisão de código (read-only, sem bash/edit)  |
| Agent `tester`         | `.opencode/agents/tester.md`               | Geração de testes nas 3 camadas               |
| Skill `feature-sliced` | `.opencode/skills/feature-sliced/SKILL.md` | Regras FSD + Clean Architecture               |
| Skill `tech-debt`      | `.opencode/skills/tech-debt/SKILL.md`      | Identificação e priorização de dívida técnica |
| Skill `test-pyramid`   | `.opencode/skills/test-pyramid/SKILL.md`   | Guia de geração de testes por camada          |

---

## 2. Avaliação: Forças

1. **Integração DDD + IA**: O fluxo de business discovery (`02`) é o diferencial mais maduro — domain discovery, linguagem ubíqua, event storming e bounded context mapping com IA _antes_ de qualquer código. Isso evita o problema clássico de IA gerar código desalinhado com o negócio.

2. **Cadeia completa de SDLC**: Da ideação à manutenção, cada fase tem um documento dedicado com prompts reutilizáveis e checklists.

3. **Padrões de código inequívocos**: `09-boas-praticas.md` é uma especificação quase executável — regra de dependência, nomenclatura, estrutura de módulos, política de idiomas. Tudo que a IA precisa para não alucinar arquitetura.

4. **Templates de especificação**: PRD e tech-spec com formato estruturado, prontos para serem preenchidos por IA.

5. **Memória entre sessões**: `10-memory.md` e `11-codebase.md` implementam o conceito de "contexto persistente" para IAs stateless — essencial para trabalho continuado.

6. **Agentes e skills especializados**: Separação de responsabilidades — code-reviewer não edita, tester gera testes, feature-sliced valida arquitetura.

7. **Git rigoroso**: Conventional Commits + Husky + Commitizen + lint-staged — a máquina impede o erro humano.

---

## 3. Avaliação: Gaps

### 3.1 Gaps de conteúdo (documentos ausentes ou vazios)

| Gap                                   | Severidade | O que falta                                                                          |
| ------------------------------------- | ---------- | ------------------------------------------------------------------------------------ |
| Sem guia de onboarding                | 🔴 Alta    | Um documento "primeiro dia" que o desenvolvedor (humano ou IA) lê para se orientar   |
| Sem ADR template                      | 🔴 Alta    | O fluxo de concepção manda "gere um ADR", mas não há template em `03-architecture/`  |
| Sem OpenAPI template                  | 🟡 Média   | `04-api/` vazio — sem ponto de partida para specs de API                             |
| Sem runbooks                          | 🟡 Média   | `05-manuals/` vazio — como rodar, debugar, fazer deploy                              |
| Sem CI/CD docs                        | 🟡 Média   | `.github/workflows/` existe como diretório mas sem documentação do pipeline          |
| Sem decision framework de ferramentas | 🟡 Média   | Quando usar OpenCode vs Antigravity vs Copilot vs Claude Code? A decisão é implícita |

### 3.2 Gaps estruturais

| Gap                                                                                                                                                                                       | Descrição |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| **Seções numeradas sem conteúdo**: `04`, `05`, `06` existem como estrutura mas sem templates. A IA referencia estes diretórios nos prompts mas eles não têm ponto de partida.             |
| **`08-workflow/` é só Git**: O nome sugere workflow completo, mas cobre apenas Conventional Commits. Deveria cobrir branching strategy, code review flow, release flow.                   |
| **`00-start-prompt.md` é OpenCode-específico**: Não contempla Claude Code, Copilot Chat, Cursor, ou outros agentes. Um template multi-agente seria mais útil como referência.             |
| **Falta rastreabilidade entre documentos**: Um PRD em `01-requirements/` deveria linkar para sua tech-spec em `03-architecture/`, seus ADRs, e seus testes. Hoje cada doc vive isolado.   |
| **Falta um índice de "o que ler quando"**: Se estou debugando um bug, quais docs ler? Se estou começando uma feature nova, quais docs ler? A resposta está implícita mas não documentada. |

### 3.3 Gaps no fluxo de IA

| Gap                                                                                                                                                     | Descrição |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| **Sem métricas de eficácia da IA**: Como saber se o fluxo AI-assisted está funcionando? (tempo de ciclo, taxa de aceitação, bugs escapados)             |
| **Sem estratégia de revisão humana mínima**: O fluxo prega "human-in-the-loop", mas não define qual a revisão mínima obrigatória em cada fase           |
| **Sem anti-patterns de IA documentados**: O que a IA tipicamente erra neste projeto? (ex: tenta importar Prisma na entity, esquece política de idiomas) |
| **Falta um "debug prompt" template**: Quando a IA insiste em um erro, como diagnosticar e corrigir o prompt?                                            |

---

## 4. Plano de Fluxo de Trabalho (Roteiro)

### 4.1 Diagrama de fases

```
                    ┌──────────────────────────┐
                    │   FASE 0: ONBOARDING      │
                    │   Ler README + AGENTS.md  │
                    │   + 01-principios-gerais  │
                    │   + 09-boas-praticas      │
                    └────────────┬─────────────┘
                                 │
                                 ▼
                    ┌──────────────────────────┐
                    │   FASE 1: DISCOVERY       │
                    │   02-business-discovery   │
                    │   Domain → Ubíqua → BCs   │
                    └────────────┬─────────────┘
                                 │
                                 ▼
                    ┌──────────────────────────┐
                    │   FASE 2: CONCEPÇÃO       │
                    │   04-fluxo-concepcao      │
                    │   + PRD + Tech-Spec + ADR │
                    └────────────┬─────────────┘
                                 │
                                 ▼
                    ┌──────────────────────────┐
                    │   FASE 3: PLANEJAMENTO    │
                    │   02-planning/ + sprints  │
                    │   Quebrar em tarefas      │
                    └────────────┬─────────────┘
                                 │
                                 ▼
                    ┌──────────────────────────┐
                    │   FASE 4: DESENVOLVIMENTO │
                    │   05-fluxo-desenvolvimento│
                    │   TDD + Clean Arch + FSD  │
                    └────────────┬─────────────┘
                                 │
                                 ▼
                    ┌──────────────────────────┐
                    │   FASE 5: REVISÃO/TESTES  │
                    │   06-fluxo-revisao-testes │
                    │   Lint → Unit → Int → E2E │
                    └────────────┬─────────────┘
                                 │
                                 ▼
                    ┌──────────────────────────┐
                    │   FASE 6: ENTREGA         │
                    │   PR → Code Review → Merge│
                    │   CI/CD → Deploy          │
                    └────────────┬─────────────┘
                                 │
                                 ▼
                    ┌──────────────────────────┐
                    │   FASE 7: MANUTENÇÃO      │
                    │   07-fluxo-manutencao     │
                    │   Bugs → Melhorias → Ref  │
                    └──────────────────────────┘
```

### 4.2 Tabela de fases: documentos consumidos × produzidos

| Fase                   | Documentos de entrada (📖 ler)                                                                                     | Templates a usar (📋 preencher)                          | Artefatos de saída (📝 gerar)                                                                          |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| **0. Onboarding**      | `README.md`, `AGENTS.md`, `01-principios-gerais.md`, `09-boas-praticas.md`, `11-codebase.md`, `00-start-prompt.md` | —                                                        | —                                                                                                      |
| **1. Discovery**       | `02-business-discovery.md`                                                                                         | —                                                        | Linguagem ubíqua (YAML), mapa de bounded contexts, event storming, classificação core/suporte/genérico |
| **2. Concepção**       | `04-fluxo-concepcao.md`, `03-prompt-engineering.md`                                                                | `PRD-template.md`, `tech-spec-template.md`, ADR template | PRD, Tech-Spec, ADRs                                                                                   |
| **3. Planejamento**    | Tech-Spec da fase 2                                                                                                | Sprint/milestone template                                | Tasks quebradas por camada (domain → application → infra → presentation → tests)                       |
| **4. Desenvolvimento** | `05-fluxo-desenvolvimento.md`, `09-boas-praticas.md`, skill `feature-sliced`                                       | —                                                        | Código fonte (entities → ports → use cases → adapters → controllers/components), testes unitários      |
| **5. Revisão/Testes**  | `06-fluxo-revisao-testes.md`, `09-testing/README.md`, agent `code-reviewer`, skill `test-pyramid`                  | —                                                        | Testes (unit + integração + e2e), relatório de code review                                             |
| **6. Entrega**         | `08-workflow/README.md`                                                                                            | PR template                                              | PR, changelog, deploy                                                                                  |
| **7. Manutenção**      | `07-fluxo-manutencao.md`, skill `tech-debt`                                                                        | Bug report template                                      | Fix + teste de regressão, relatório de dívida técnica                                                  |

### 4.3 Matriz de decisão: qual ferramenta de IA usar

| Tarefa                                  | Ferramenta                                  | Motivo                                                     |
| --------------------------------------- | ------------------------------------------- | ---------------------------------------------------------- |
| Business discovery, pesquisa de domínio | Antigravity / Claude                        | Melhor para exploração aberta, sem contexto de código      |
| Implementação dentro do projeto         | OpenCode / Claude Code                      | Acesso ao sistema de arquivos, git, contexto de código     |
| Autocomplete em tempo real              | GitHub Copilot                              | Integração com IDE, baixa latência                         |
| Code review                             | Agent `code-reviewer`                       | Especializado, read-only, sem risco de alteração acidental |
| Geração de testes                       | Agent `tester` + skill `test-pyramid`       | Especializado por camada                                   |
| Validação arquitetural                  | Skill `feature-sliced`                      | Regras FSD + Clean Architecture                            |
| Análise de dívida técnica               | Skill `tech-debt`                           | Categorização e priorização                                |
| Debugging                               | OpenCode / Claude Code                      | Precisa ler arquivos, logs, stack traces                   |
| Documentação                            | Antigravity / Claude                        | Geração de texto livre                                     |
| Refatoração                             | OpenCode / Claude Code + code review humano | Mudanças precisam de validação dupla                       |

---

## 5. Roteiro de Tarefas (para implementar as melhorias)

### 5.1 Prioridade 🔴 — Bloqueantes (devem existir antes do primeiro uso real)

| #    | Tarefa                                       | Descrição                                                   | Saída                                                                                                      |
| ---- | -------------------------------------------- | ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| T-01 | Criar ADR template                           | ✅ **Concluído** — `docs/03-architecture/ADR-template.md`   | Template com: Contexto, Decisão, Consequências (positivas/negativas/mitigações), Alternativas, Referências |
| T-02 | Criar guia de onboarding                     | ✅ **Concluído** — `docs/00-onboarding.md`                  | Trilhas para dev novo, dev experiente, tech lead, e IA agent com ordem e tempo estimado                    |
| T-03 | Criar índice de decisão ("o que ler quando") | ✅ **Concluído** — `docs/INDEX.md`                          | Tabelas por tarefa, fase do ciclo, papel e tipo de artefato                                                |
| T-04 | Criar template de bug report                 | ✅ **Concluído** — `docs/05-manuals/bug-report-template.md` | Template completo com seção de diagnóstico por IA e template rápido para prompt                            |

### 5.2 Prioridade 🟡 — Importantes (devem existir no primeiro sprint)

| #    | Tarefa                                                  | Descrição                                                                      | Saída                                                                                                                                                               |
| ---- | ------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| T-05 | Criar template de plano de implementação backend        | ✅ **Concluído** — `docs/02-planning/backend-implementation.md`                | Template genérico: 5 fases (Setup → Domínio → Infra → API → Qualidade), ~21 tasks stack-agnostic                                                                    |
| T-06 | Criar template de plano de implementação frontend       | ✅ **Concluído** — `docs/02-planning/frontend-implementation.md`               | Template genérico: 5 sprints (Setup → Core → Avançado → Testes → Deploy), ~31 tasks stack-agnostic                                                                  |
| T-07 | Criar template de plano de implementação infraestrutura | ✅ **Concluído** — `docs/02-planning/infrastructure-implementation.md`         | Template genérico: 7 áreas (Docker → Nginx → DB → CI/CD → Cloud → Monitoring → Ansible), ~42 tasks                                                                  |
| T-08 | Criar template de plano de implementação mobile         | ✅ **Concluído** — `docs/02-planning/mobile-implementation.md`                 | Template genérico: 5 sprints (Setup → Core → Offline → Testes → Deploy), ~32 tasks stack-agnostic                                                                   |
| T-09 | Criar template de OpenAPI                               | Em `docs/04-api/` — ponto de partida para specs de API REST                    | Arquivo base com info, servers, paths, components, security                                                                                                         |
| T-10 | Criar template de PR                                    | ✅ **Concluído** — `docs/08-workflow/PR-template.md`                           | Checklist do autor + checklist do revisor + artefatos relacionados                                                                                                  |
| T-11 | Documentar CI/CD pipeline                               | Em `docs/08-workflow/` ou `.github/` — o que roda, quando, por que             | Diagrama do pipeline: lint → test → build → deploy                                                                                                                  |
| T-12 | Criar runbook base                                      | Em `docs/05-manuals/` — como rodar localmente, como debugar, como fazer deploy | Runbook de dev environment                                                                                                                                          |
| T-13 | Expandir `08-workflow/` além de Git                     | ✅ **Concluído** — `docs/08-workflow/README.md` reescrito                      | Branching, PR flow, code review rules, merge rules (7 critérios), release flow                                                                                      |
| T-14 | Criar decision framework multi-agente                   | ✅ **Concluído** — `08-ferramentas.md` reescrito como framework multi-agente   | Claude Code, OpenCode, Copilot, Copilot Chat, Cursor, Antigravity; matriz de decisão por fase, tipo de tarefa e complexidade; fluxo de alternância com exemplo real |

### 5.3 Prioridade 🔵 — Desejáveis (melhorias contínuas)

| #    | Tarefa                                           | Descrição                                                                                                                  | Saída                                                              |
| ---- | ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| T-15 | Criar índice de rastreabilidade                  | Template que linka PRD → Tech-Spec → ADRs → Tasks → Tests — rastreabilidade fim a fim                                      | Script ou template de traceability matrix                          |
| T-16 | Documentar anti-patterns de IA                   | Coletar erros comuns que a IA comete neste projeto (ex: importar framework na domain, esquecer pt-BR na UI)                | Seção "Anti-patterns" em `09-boas-praticas.md` ou arquivo separado |
| T-17 | Criar template de "debug prompt"                 | Quando a IA está presa em um erro, como reescrever o prompt para destravar                                                 | Template de escalação de prompt                                    |
| T-18 | Criar métricas de eficácia da IA                 | O que medir para saber se o fluxo AI-assisted está funcionando: tempo de ciclo, taxa de aceitação, bugs/feature, cobertura | Documento de métricas em `10-ai-workflow/`                         |
| T-19 | Atualizar `00-start-prompt.md` para multi-agente | Versões do prompt de inicialização para OpenCode, Claude Code, e Copilot Chat                                              | Arquivo com variantes por ferramenta                               |

---

## 6. Instruções para o Agente de IA

### 6.1 Ao iniciar qualquer sessão neste projeto

Siga o fluxo definido em `00-start-prompt.md` (Session Commander):

1. **Ler** `docs/10-ai-workflow/00-start-prompt.md` — commander document com instruções de ação
2. **Ler** `MEMORY.md` — retomar estado da sessão anterior
3. **Ler** `CODEBASE.md` — mapa atualizado do sistema
4. **Ler** `02-planning/` — planos de implementação disponíveis (backend, frontend, mobile, infra)
5. **Apresentar menu** ao usuário com as frentes de trabalho e seus respectivos progressos
6. **Aguardar confirmação** da frente escolhida
7. **Ler o documento da fase** correspondente (`05`, `06` ou `07`) e seguir o fluxo descrito
8. **Aplicar as skills** relevantes (`feature-sliced`, `test-pyramid`, `tech-debt`)
9. **Ao final da sessão**, atualizar `MEMORY.md` e o plano em `02-planning/` com: o que foi feito, tarefas concluídas, decisões tomadas, próximos passos

Consulte `09-boas-praticas.md` apenas sob demanda, quando houver violação de regra.

### 6.2 Checklist de conformidade (toda geração de código)

- [ ] Regra de Dependência: `domain/` não importa de `infrastructure/` ou `presentation/`
- [ ] Módulos isolados: um módulo não importa infra de outro módulo
- [ ] Sem `any` — tipos explícitos
- [ ] Sem `try/catch` vazio
- [ ] Sem magic numbers — constantes nomeadas
- [ ] Sem código comentado
- [ ] kebab-case para arquivos e pastas
- [ ] Política de idiomas: backend 100% inglês, frontend código inglês + UI pt-BR
- [ ] Testes na camada correta da pirâmide
- [ ] Conventional Commits

### 6.3 Anti-patterns conhecidos (a expandir com T-13)

| Anti-pattern                      | Exemplo                                                         | Correção                                                               |
| --------------------------------- | --------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Importar ORM na entity            | `import { Prisma } from '@prisma/client'` em `domain/entities/` | Mover para `infrastructure/` — entity é POJO                           |
| Esquecer pt-BR na UI              | `Submit` em vez de `Enviar`                                     | Todo texto visível ao usuário em português brasileiro                  |
| Criar componente em módulo errado | Botão reutilizável em `modules/auth/presentation/`              | Mover para `shared/presentation/`                                      |
| Pular a porta (interface)         | Usar repository concreto no use case                            | Definir interface em `domain/ports/`, implementar em `infrastructure/` |

---

## 7. Estratégia de Deployment: docs/ como parte do repo

### O que vai para o repo do novo projeto

**Toda a pasta `docs/` vai para o repo.** Ela não é só documentação — é o sistema operacional do projeto. A IA lê esses arquivos do sistema de arquivos; se não estiverem no repo, a IA não tem acesso às regras.

```
docs/
├── 00-onboarding.md          ← Guia de primeiro dia (T-02)
├── INDEX.md                  ← "O que ler quando" (T-03)
├── README.md                 ← Hub central
├── 01-requirements/          ← PRDs — artefatos vivos
├── 02-planning/              ← Sprints, roadmaps — artefatos vivos
├── 03-architecture/          ← ADRs, tech-specs, diagramas — artefatos vivos
├── 04-api/                   ← OpenAPI specs — artefatos vivos
├── 05-manuals/               ← Runbooks — artefatos vivos
├── 06-meetings/              ← Minutas — artefatos vivos
├── 07-monitoring/            ← SLA/SLO — artefatos vivos
├── 08-workflow/              ← Git, branching, PR, release flow
├── 09-testing/               ← Estratégia de testes
└── 10-ai-workflow/           ← Motor de IA — regras, fluxos, prompts, memória
```

### O que acontece ao iniciar um projeto novo

| Artefato                                                             | Ação                                                                                    |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Templates (`PRD-template.md`, `tech-spec-template.md`, ADR template) | **Copiar e preencher** para cada feature — os templates originais ficam como referência |
| `MEMORY.md`                                                          | Começa com o template de `10-memory.md` e é **preenchido na primeira sessão**           |
| `CODEBASE.md`                                                        | Começa com o scaffold de `11-codebase.md` e é **atualizado a cada novo módulo**         |
| Seções com `.gitkeep`                                                | Começam vazias, **preenchidas sob demanda**                                             |
| `.opencode/` (skills + agents)                                       | **Copiado integralmente** — define o comportamento dos agentes especializados           |

### O que NÃO vai para o repo

- `.DS_Store` (já está no `.gitignore`)
- Chaves de API, tokens, `.env.local` — usam variáveis de ambiente
- `node_modules/`

---

## 8. Estratégia de Carregamento de Contexto (Session Loading)

### O problema

Se o agente de IA lesse todos os 12+ documentos de `10-ai-workflow/` no início de cada sessão, consumiria de 8.000 a 15.000 tokens só em documentação — antes mesmo de começar a tarefa. Isso é inviável.

### A solução: lazy loading em 3 níveis

```
Nível 1 — BOOTSTRAP (toda sessão, ~700 tokens)
├── 00-start-prompt.md   ← Commander document (instruções de ação)
├── MEMORY.md            ← Estado da sessão anterior
├── CODEBASE.md          ← Mapa atual do sistema
└── 02-planning/         ← Planos de implementação (cardápio de trabalho)

Nível 2 — FASE (1 documento, conforme a frente escolhida)
├── 05-fluxo-desenvolvimento.md ← "Implementar código"
├── 06-fluxo-revisao-testes.md ← "Revisar ou testar"
└── 07-fluxo-manutencao.md     ← "Corrigir um bug"

Nível 3 — REGRA (sob demanda, quando a IA viola uma regra ou hesita)
├── 09-boas-praticas.md        ← "A IA esqueceu a política de idiomas"
├── 03-prompt-engineering.md   ← "Preciso reformular meu prompt"
├── 08-ferramentas.md          ← "Qual ferramenta usar para esta tarefa?"
├── 02-business-discovery.md   ← "Preciso entender o negócio" (Discovery)
└── 04-fluxo-concepcao.md      ← "Preciso gerar requisitos" (Concepção)

> Nota: Discovery (02) e Concepção (04) são fases pontuais, não diárias. Para o dia a dia de desenvolvimento, o bootstrap cobre 90% das necessidades de contexto.
```

### Carga típica de contexto por tipo de sessão

| Tipo de sessão               | Documentos carregados                                                                   | Tokens estimados |
| ---------------------------- | --------------------------------------------------------------------------------------- | ---------------- |
| Desenvolvimento de feature   | Nível 1 + `05-fluxo-desenvolvimento.md`                                                 | ~1.500           |
| Correção de bug              | Nível 1 + `07-fluxo-manutencao.md`                                                      | ~1.300           |
| Concepção de feature nova    | Nível 1 + `04-fluxo-concepcao.md` + `02-business-discovery.md`                          | ~2.500           |
| Code review                  | Nível 1 + `06-fluxo-revisao-testes.md`                                                  | ~1.300           |
| Onboarding (primeira sessão) | `00-onboarding.md` + `01-principios-gerais.md` + `09-boas-praticas.md` + este documento | ~3.500           |

### Gatilhos para carregar Nível 3

| Sintoma                                   | Documento a carregar                                  |
| ----------------------------------------- | ----------------------------------------------------- |
| IA gerou `any` ou importou ORM na entity  | `09-boas-praticas.md` (seção de Regra de Dependência) |
| IA gerou UI em inglês                     | `09-boas-praticas.md` (seção de Idioma)               |
| IA gerou nome de arquivo em PascalCase    | `09-boas-praticas.md` (seção de Nomenclatura)         |
| Prompt não está produzindo resultado útil | `03-prompt-engineering.md`                            |
| Não sei se uso OpenCode ou Claude Code    | `08-ferramentas.md`                                   |

### Regra prática para o desenvolvedor

> **Nunca peça para a IA "ler toda a documentação".** Em vez disso:
>
> - Inicie a sessão com `00-start-prompt.md`
> - Diga à IA qual fase está executando ("estou na fase de desenvolvimento")
> - A IA deve ler o documento da fase correspondente por conta própria
> - Se a IA errar uma regra, aponte o erro e peça para ela ler a seção relevante de `09-boas-praticas.md`

---

## 9. Atualização Contínua

Este documento deve ser revisado e atualizado:

- **Ao final de cada sprint**: revisar gaps encontrados, adicionar anti-patterns descobertos
- **Ao trocar de stack**: verificar se os templates e skills são compatíveis com a nova stack
- **Ao onboard um novo desenvolvedor**: testar o guia de onboarding (T-02) e ajustar com o feedback
- **Mensalmente**: revisar métricas de eficácia da IA (T-15) e ajustar prompts e fluxos

---

> **📖 Próximo passo para o agente de IA:** Leia este documento. Identifique a fase atual do projeto (estamos na **Fase 0 — Template**, com a base documental concluída). A documentação está pronta para ser usada em projetos reais — ao iniciar um novo projeto, copie esta pasta `docs/`, preencha os planos em `02-planning/` com a stack escolhida e comece pela Fase 1 (Discovery).
