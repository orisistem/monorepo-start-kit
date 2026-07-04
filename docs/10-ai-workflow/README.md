# Fluxo de Trabalho com IA (AI Workflow)

Este diretório contém as orientações para integrar ferramentas de Inteligência Artificial no ciclo de desenvolvimento do projeto. O objetivo é padronizar a interação com agentes de IA para maximizar a produtividade sem comprometer a qualidade e a consistência arquitetural.

## Ciclo do Fluxo

```
┌─────────────────────────────────────────────────────────┐
│                 BUSINESS DISCOVERY                      │
│              (02-business-discovery)                    │
│  Domínios → Linguagem Ubíqua → Bounded Contexts        │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│                    CONCEPÇÃO                            │
│              (04-fluxo-concepcao)                       │
│  Ideias → Requisitos → Planejamento                    │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│                  DESENVOLVIMENTO                         │
│              (05-fluxo-desenvolvimento)                  │
│  Análise → Implementação → Validação                    │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│               REVISÃO & TESTES                           │
│              (06-fluxo-revisao-testes)                   │
│  Code Review → Testes → Qualidade                       │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│                 MANUTENÇÃO                               │
│              (07-fluxo-manutencao)                       │
│  Bugs → Melhorias → Refatoração                         │
└─────────────────────────────────────────────────────────┘
```

## Documentos

| Documento                  | Descrição                                                              |
| -------------------------- | ---------------------------------------------------------------------- |
| `00-start-prompt`          | Prompt resumido para copiar no início de cada sessão com a IA          |
| `01-principios-gerais`     | Filosofia de uso, responsabilidades e boas práticas fundamentais       |
| `02-business-discovery`    | Entendimento do negócio, domínios, linguagem ubíqua e bounded contexts |
| `03-prompt-engineering`    | Técnicas e templates para estruturar requisições à IA                  |
| `04-fluxo-concepcao`       | Como usar IA da ideação aos requisitos e planejamento                  |
| `05-fluxo-desenvolvimento` | Implementação assistida por IA (TDD, pair programming)                 |
| `06-fluxo-revisao-testes`  | Revisão de código, geração de testes e validação com IA                |
| `07-fluxo-manutencao`      | Correção de bugs, melhorias incrementais e refatoração                 |
| `08-ferramentas`           | Matriz de decisão multi-agente (Claude Code, OpenCode, Copilot, Cursor, Antigravity) |
| `09-boas-praticas`         | Padrões do template que a IA deve respeitar                            |
| `10-memory`                | Memória de contexto entre sessões de IA (template + registro)          |
| `11-codebase`              | Mapa do sistema, módulos, dependências e entry points                  |
| `12-workflow-plan`         | **Roteiro-mestre**: diagnóstico, gaps, plano de fases, lazy loading    |

## Templates de Especificação

Disponíveis para uso com agentes de IA:

- **`docs/01-requirements/PRD-template.md`** — Estrutura de Product Requirements Document (histórias, critérios de aceitação, regras de negócio)
- **`docs/03-architecture/tech-spec-template.md`** — Especificação técnica (contratos, entidades, plano de implementação, riscos)
- **`docs/03-architecture/ADR-template.md`** — Architecture Decision Record (contexto, decisão, consequências, alternativas)
- **`docs/05-manuals/bug-report-template.md`** — Bug report com seção de diagnóstico por IA

Use no prompt: _"Gere um PRD seguindo o template em docs/01-requirements/PRD-template.md"_

## Skills e Agentes OpenCode

| Recurso                | Localização                         | Descrição                                                |
| ---------------------- | ----------------------------------- | -------------------------------------------------------- |
| Skill `feature-sliced` | `.opencode/skills/feature-sliced/`  | Regras de FSD + Clean Architecture                       |
| Skill `test-pyramid`   | `.opencode/skills/test-pyramid/`    | Geração de testes nas 3 camadas                          |
| Skill `tech-debt`      | `.opencode/skills/tech-debt/`       | Identificação e priorização de dívida técnica            |
| Agent `code-reviewer`  | `.opencode/agents/code-reviewer.md` | Revisão de código (apenas leitura, via `@code-reviewer`) |
| Agent `tester`         | `.opencode/agents/tester.md`        | Geração de testes (via `@tester`)                        |

## Ferramentas Oficiais

- **[Claude Code](https://claude.ai/code)** — Agente CLI da Anthropic para implementação, debugging e refatoração
- **[OpenCode](https://opencode.ai)** — Agente CLI para engenharia de software com skills e agentes customizados
- **[GitHub Copilot](https://github.com/features/copilot)** — Autocomplete inline e chat no IDE
- **[Cursor](https://cursor.com)** — IDE com IA nativa para prototipagem e edição multi-arquivo
- **Antigravity** — Ferramenta complementar de IA para pesquisa e documentação

Consulte `08-ferramentas` para a matriz de decisão completa: qual ferramenta usar em cada fase e tipo de tarefa.
