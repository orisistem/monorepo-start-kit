# Fluxo de Concepção

Da ideia inicial aos requisitos prontos para desenvolvimento.

## Etapas

```
Ideia Inicial
     │
     ▼
Refinamento com IA ─────────────────┐
     │                               │
     ▼                               ▼
Especificação              Questionamento e
     │                     Validação Crítica
     ▼                               │
Registro em                        │
docs/01-requirements/              │
     │                               │
     ▼                               ▼
Planejamento                  Decisões Arquiteturais
     │                        (ADRs)
     ▼
Ready para Desenvolvimento
```

## Como Usar IA na Concepção

### 1. Refinamento de Ideias

Use a IA para expandir e questionar sua ideia inicial:

> "Estou pensando em [ideia]. Atue como um product manager experiente. Faça perguntas críticas para refinar esta ideia, identifique suposições não validadas e sugira métricas de sucesso."

### 2. Geração de Requisitos

A partir da ideia refinada, peça para a IA estruturar os requisitos:

> "Com base na ideia refinada acima, gere:
>
> - História de usuário no formato padrão
> - Critérios de aceitação (Given/When/Then)
> - Regras de negócio
> - Casos de borda a considerar"

### 3. Validação Crítica

Peça para a IA desafiar os requisitos gerados:

> "Revise os requisitos acima como um engenheiro sênior cético. Identifique:
>
> - Ambiguidades
> - Impossibilidades técnicas
> - Conflitos com a arquitetura existente
> - Dependências ocultas
> - Cenários de falha não cobertos"

### 4. Planejamento de Tarefas

> "Com base nos requisitos aprovados, quebre o trabalho em tarefas atômicas seguindo estas camadas:
>
> 1. Domain/Entities (regras de negócio puras)
> 2. Use Cases (casos de uso da aplicação)
> 3. Infrastructure (repositórios, serviços externos)
> 4. Presentation (controllers, handlers, UI)
> 5. Testes (unit, integration, e2e)
>
> Cada tarefa deve ser independente e testável."

### 5. ADRs (Architecture Decision Records)

Para decisões arquiteturais, use o formato ADR:

> "Precisamos decidir entre [opção A] e [opção B] para [contexto]. Gere um ADR seguindo o formato:
>
> - Title
> - Status (proposed/accepted/deprecated)
> - Context
> - Decision
> - Consequences (positive & negative)
> - Alternatives considered"

## Checklist de Concepção

- [ ] Ideia foi questionada e refinada pela IA
- [ ] Requisitos estão documentados em `docs/01-requirements/`
- [ ] Critérios de aceitação são mensuráveis
- [ ] Decisões arquiteturais têm ADR registrado
- [ ] Tarefas quebradas em unidades atômicas
- [ ] Casos de borda identificados
- [ ] Riscos e suposições documentados
