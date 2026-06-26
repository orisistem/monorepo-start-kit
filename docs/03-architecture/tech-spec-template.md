# Technical Specification: [Nome da Feature]

## 1. Visão Geral

Descrição técnica de alto nível: o que será construído e por que esta abordagem foi escolhida.

## 2. Arquitetura

### Módulos Afetados

| Módulo             | Camada            | Mudança     |
| ------------------ | ----------------- | ----------- |
| `modules/[modulo]` | `domain/`         | [descrição] |
| `modules/[modulo]` | `application/`    | [descrição] |
| `modules/[modulo]` | `infrastructure/` | [descrição] |
| `modules/[modulo]` | `presentation/`   | [descrição] |

### Fluxo de Dados

```
[Componente A] → [Use Case] → [Repository] → [Database]
       ↓
[Componente B]
```

## 3. Contratos e Interfaces

### Domain (Ports)

```typescript
// backend/src/modules/[mod]/domain/ports/
interface I[Nome]Repository {
  findById(id: string): Promise<[Entity]>;
  save(entity: [Entity]): Promise<void>;
}
```

### Application (DTOs)

```typescript
// backend/src/modules/[mod]/application/dtos/
interface [Nome]Input {
  // campos de entrada
}

interface [Nome]Output {
  // campos de saída
}
```

## 4. Entidades

```typescript
// backend/src/modules/[mod]/domain/entities/
class [Entity] {
  constructor(
    public readonly id: string,
    public name: string
  ) {}
}
```

## 5. Regras de Negócio (Implementação)

Cada regra de negócio mapeada do PRD deve ter sua implementação referenciada:

| RN    | Localização            | Comportamento |
| ----- | ---------------------- | ------------- |
| RN-01 | `[Use Case].execute()` | [lógica]      |

## 6. Decisões Técnicas (ADRs)

Se houver decisões relevantes (biblioteca, padrão, arquitetura), documentar como ADR:

### ADR-001: [Título]

- **Contexto**: [problema/decisão]
- **Decisão**: [o que foi escolhido]
- **Consequências**: [prós e contras]

## 7. Plano de Implementação

Ordem sugerida das tarefas, respeitando a Regra de Dependência (de dentro para fora):

1. `domain/entities/` — definir entidades
2. `domain/ports/` — definir interfaces
3. `application/use-cases/` — implementar casos de uso
4. `application/dtos/` — definir DTOs
5. `infrastructure/` — implementar adaptadores
6. `presentation/` — expor endpoints/components
7. `tests/unit/` — testes unitários
8. `tests/integration/` — testes de integração
9. `tests/e2e/` — testes end-to-end

## 8. Riscos

| Risco   | Impacto          | Mitigação |
| ------- | ---------------- | --------- |
| [risco] | Alto/Médio/Baixo | [ação]    |
