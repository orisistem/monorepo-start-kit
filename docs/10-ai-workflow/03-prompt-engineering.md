# Prompt Engineering

## Anatomia de um Bom Prompt

```
[CONTEXTO DO PROJETO]
- Projeto: <nome>
- Arquitetura: <Clean Architecture, FSD, etc.>
- Stack: <tecnologias>
- Padrões: <kebab-case, Conventional Commits, etc.>

[TAREFA]
<Descrição clara do que deve ser feito>

[RESTRIÇÕES]
<O que NÃO fazer, limitações, regras>

[FORMATO DE SAÍDA ESPERADO]
<Como deve ser a resposta: código, explicação, lista, etc.>
```

## Templates por Tipo de Tarefa

### Template para Nova Feature

```markdown
## Contexto

Projeto: [nome]
Módulo: [ex: auth, products]
Arquitetura: Clean Architecture + Feature-Sliced Design
Stack: [backend/frontend/tecnologias]
Padrões: kebab-case para arquivos, Conventional Commits

## O que preciso

[criar/alterar] [componente/função/rota] que [descrição do comportamento]

## Restrições

- Seguir a Regra de Dependência (dependências apontam para dentro)
- Não importar bibliotecas externas na camada domain
- Usar tipos/exports explícitos (sem `any`)
- Seguir o padrão de nomenclatura kebab-case

## Arquivos de Referência

- [caminho/arquivo] — exemplo de implementação similar
- [caminho/arquivo] — contrato/interface a implementar
```

### Template para Bug Fix

```markdown
## Problema

[descrição do bug, incluindo steps to reproduce]

## Comportamento Esperado

[o que deveria acontecer]

## Comportamento Atual

[o que acontece de errado]

## Logs / Evidências
```

[logs, stack traces, screenshots]

```

## Hipóteses
[suas suspeitas sobre a causa]

## Restrições
- Não alterar [algo específico que não pode mudar]
- Adicionar testes que cubram o cenário de falha
```

### Template para Code Review

```markdown
## Contexto

Arquivo: [caminho]
Propósito: [o que o código faz]

## Pontos de Atenção

- [algo específico para o revisor focar]

## Critérios

- Está violando a Regra de Dependência?
- Está lidando com erros adequadamente?
- Tem testes?
- Segue os padrões do projeto?
```

## Técnicas Avançadas

### Chain of Thought (Cadeia de Pensamento)

Peça para a IA explicar o raciocínio antes de dar a resposta final:

> "Antes de escrever o código, explique passo a passo como você resolveria este problema considerando a Clean Architecture."

### Persona Fixa

Defina um papel para a IA:

> "Atue como um engenheiro de software sênior especializado em Clean Architecture. Você é rigoroso com padrões e sempre prioriza manutenibilidade sobre velocidade."

### Crítico e Alternativas

Peça para a IA criticar a própria sugestão:

> "Sugira 3 abordagens diferentes para este problema. Para cada uma, aponte prós, contras e trade-offs. Depois recomende a melhor."

### Prompt Negativo

Seja explícito sobre o que NÃO quer:

> "Não use any, não ignore erros com try/catch vazio, não misture responsabilidades de camadas, não use arrow functions como métodos de classe."

## Armadilhas Comuns

| Erro                              | Por que Evitar                                           |
| --------------------------------- | -------------------------------------------------------- |
| Prompts vagos ("faça um CRUD")    | Gera código genérico que ignora regras do projeto        |
| Contexto insuficiente             | IA assume defaults que podem conflitar com a arquitetura |
| Múltiplas tarefas no mesmo prompt | Nenhuma é feita bem — divida em prompts menores          |
| Não validar o output              | Código pode ter bugs sutis ou vulnerabilidades           |
| Repetir o mesmo prompt ajustado   | Melhor refinar com base na resposta anterior             |
