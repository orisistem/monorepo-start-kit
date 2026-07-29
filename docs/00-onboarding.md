# Onboarding: Por Onde Começar

> **Objetivo:** Orienta o primeiro contato de qualquer perfil com o projeto. Em 5 minutos, você sabe o que ler e em que ordem.

---

## Perfis de Entrada

Escolha seu perfil e siga a trilha correspondente:

### 🆕 Desenvolvedor Novo (primeiro dia no time)

| Ordem | Documento                                     | Tempo  | Por que ler                                                                 |
| ----- | --------------------------------------------- | ------ | --------------------------------------------------------------------------- |
| 1     | `README.md` (raiz)                            | 2 min  | Visão geral da stack, arquitetura e convenções                              |
| 2     | `AGENTS.md` (raiz)                            | 3 min  | O que a IA sabe sobre o projeto — revela a estrutura real                   |
| 3     | `docs/10-ai-workflow/01-principios-gerais.md` | 5 min  | Filosofia de uso de IA, regras de ouro, quando usar IA vs manual            |
| 4     | `docs/10-ai-workflow/09-boas-praticas.md`     | 10 min | **Leitura obrigatória** — toda regra que a IA e você devem seguir           |
| 5     | `docs/08-workflow/README.md`                  | 5 min  | Como commitar, branches, PRs                                                |
| 6     | `docs/10-ai-workflow/00-start-prompt.md`      | 5 min  | **Session Commander** — o comando que a IA executa no início de cada sessão |

**Depois:** Escolha uma frente em `docs/02-planning/` (backend, frontend, mobile ou infra) e siga o fluxo de desenvolvimento (`docs/10-ai-workflow/05-fluxo-desenvolvimento.md`).

---

### 💻 Desenvolvedor Experiente (já conhece a stack, novo no projeto)

| Ordem | Documento                                                       | Tempo |
| ----- | --------------------------------------------------------------- | ----- |
| 1     | `README.md` + `AGENTS.md`                                       | 5 min |
| 2     | `docs/10-ai-workflow/09-boas-praticas.md` (foco nas seções 1-4) | 5 min |
| 3     | `docs/10-ai-workflow/00-start-prompt.md`                        | 5 min |
| 4     | `docs/10-ai-workflow/11-codebase.md` (CODEBASE.md)              | 5 min |

**Depois:** Vá direto para a fase relevante do seu trabalho:

- Feature nova → `04-fluxo-concepcao.md`
- Implementação → `05-fluxo-desenvolvimento.md`
- Review/Testes → `06-fluxo-revisao-testes.md`
- Bug → `07-fluxo-manutencao.md`

---

### 🏗️ Tech Lead / Arquiteto

| Ordem | Documento                                                           | Tempo  |
| ----- | ------------------------------------------------------------------- | ------ | ------------------------------------------------ |
| 1     | `README.md` + `AGENTS.md`                                           | 5 min  |
| 2     | `docs/10-ai-workflow/09-boas-praticas.md` (revisar seções 1-3, 6-7) | 5 min  |
| 3     | `docs/02-planning/` (visão geral dos planos)                        | 5 min  | Conhecer as frentes de implementação disponíveis |
| 4     | `docs/10-ai-workflow/12-workflow-plan.md`                           | 10 min |
| 5     | `docs/10-ai-workflow/01-principios-gerais.md`                       | 5 min  |
| 6     | `docs/09-testing/README.md`                                         | 5 min  |

**Depois:** Avalie os gaps documentados no `12-workflow-plan.md` e priorize as tarefas do roteiro.

---

### 🤖 Agente de IA (início de sessão)

| Ordem | Documento                                                  | Tokens |
| ----- | ---------------------------------------------------------- | ------ |
| 1     | `docs/10-ai-workflow/00-start-prompt.md` (colar no prompt) | ~500   |
| 2     | `MEMORY.md` — contexto da sessão anterior                  | ~200   |
| 3     | `CODEBASE.md` — mapa atual do sistema                      | ~300   |
| 4     | `02-planning/` — planos de implementação (escolher frente) | ~200   |
| 5     | Documento da fase atual (05, 06 ou 07) — **apenas 1**      | ~700   |

**Regra:** Nunca leia toda a documentação de uma vez. Use lazy loading (veja `12-workflow-plan.md`, Seção 8).

---

## Estrutura de Diretórios (visão rápida)

```
raiz/
├── README.md              ← Visão geral do projeto
├── AGENTS.md              ← Contexto que a IA carrega automaticamente
├── backend/               ← Código fonte backend (FSD + Clean Architecture)
├── frontend/              ← Código fonte frontend (FSD + Clean Architecture)
├── infrastructure/        ← Docker, Terraform, Nginx
├── docs/
│   ├── 00-onboarding.md   ← 📍 Você está aqui
│   ├── INDEX.md           ← "O que ler quando"
│   ├── 01-requirements/   ← PRDs das features
│   ├── 03-architecture/   ← ADRs, tech-specs, diagramas
│   ├── 08-workflow/       ← Git, commits, PRs
│   ├── 09-testing/        ← Estratégia de testes
│   └── 10-ai-workflow/    ← Motor de IA (fluxos, prompts, regras)
└── .opencode/
    ├── agents/            ← Agentes especializados (code-reviewer, tester)
    └── skills/            ← Skills reutilizáveis (feature-sliced, test-pyramid, tech-debt)
```

---

## Primeira Tarefa Recomendada

Depois de ler os documentos do seu perfil, execute esta sequência para validar que seu ambiente funciona:

```bash
git checkout -b feat/seu-nome-onboarding
npm install
npm test          # Deve passar (placeholder verde)
npm run commit    # Testar o Commitizen interativo
```

Depois, escolha uma frente em `docs/02-planning/` e siga o fluxo de IA: análise com `05-fluxo-desenvolvimento.md` → implementação → validação com `06-fluxo-revisao-testes.md` → commit → PR.
