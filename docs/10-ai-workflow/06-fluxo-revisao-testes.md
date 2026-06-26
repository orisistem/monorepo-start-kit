# Fluxo de Revisão e Testes

Garantia de qualidade assistida por IA em todas as camadas.

## Etapas

```
Código implementado
     │
     ▼
Auto-Revisão com IA
     │
     ├──> Problemas encontrados?
     │        │
     │        ▼
     │   Corrigir e revisar novamente
     │
     └──> OK
              │
              ▼
         Geração de Testes
              │
              ├──> Unitários
              ├──> Integração
              └──> E2E (se aplicável)
              │
              ▼
         Execução dos Testes
              │
              ├──> Falharam?
              │        │
              │        ▼
              │   Corrigir e iterar
              │
              └──> OK
                       │
                       ▼
                  Pronto para PR
```

## Como Usar IA na Revisão

### 1. Auto-Revisão de Código

> "Revise este código como um engenheiro sênior faria em um code review:
>
> `[código completo]`
>
> Para cada problema encontrado, classifique como:
>
> - 🔴 Crítico: bug, vulnerabilidade, violação arquitetural
> - 🟡 Moderado: código confuso, falta de testes, má prática
> - 🔵 Sugestão: melhoria opcional, estilo
>
> No final, dê uma nota de 0-10 para a qualidade do código."

### 2. Revisão Arquitetural Específica

> "Verifique se este código viola a Clean Architecture:
>
> - Alguma importação da camada domain aponta para fora?
> - Alguma entidade depende de infraestrutura?
> - Algum caso de uso chama diretamente o banco ou API externa?
>
> Arquivo: [caminho]"

## Como Usar IA para Testes

### 3. Geração de Testes Unitários

> "Gere testes unitários para [classe/função] seguindo:
>
> - Framework: [vitest/jest/pytest/etc]
> - Padrão: AAA (Arrange, Act, Assert)
> - Cobertura: caminho feliz, casos de erro, casos de borda
> - Mocks: isolar dependências externas
> - Nomenclatura: `deve_<comportamento>_quando_<condicao>`"

### 4. Geração de Testes de Integração

> "Gere teste de integração para [fluxo] que:
>
> - Use instância real do banco (via container Docker de teste)
> - Teste a cooperação entre [camadas/módulos]
> - Limpe os dados após o teste
> - Seja idempotente"

### 5. Geração de Testes E2E

> "Gere teste end-to-end para [fluxo do usuário]:
>
> - Setup: estado inicial do sistema
> - Ações: interações do usuário passo a passo
> - Asserts: verificações no estado final
> - Cleanup: restaurar estado original"

### 6. Revisão de Testes

> "Revise estes testes:
>
> - Eles testam o comportamento ou a implementação?
> - Eles são frágeis (muito acoplados a detalhes internos)?
> - Eles cobrem os cenários de falha?
> - Eles são legíveis e fáceis de manter?
>
> `[código dos testes]`"

## Estratégia de Cobertura

Seguindo a pirâmide definida em `docs/09-testing/`:

| Tipo       | O que testar                                  | O que NÃO testar            | Ferramentas               |
| ---------- | --------------------------------------------- | --------------------------- | ------------------------- |
| Unitário   | Entidades, casos de uso, mappers, validadores | Infraestrutura, banco, rede | Vitest, Jest, PyTest      |
| Integração | Repositórios, controllers com DB real, filas  | Serviços terceiros          | Supertest, TestContainers |
| E2E        | Fluxos completos do usuário                   | Detalhes de implementação   | Playwright, Cypress       |

## Checklist de Revisão e Testes

- [ ] Código revisado por IA (ao menos 1 rodada)
- [ ] Violações arquiteturais corrigidas
- [ ] Testes unitários escritos para novas funcionalidades
- [ ] Testes de integração para novas rotas/repositórios
- [ ] Testes E2E para fluxos críticos (se aplicável)
- [ ] Todos os testes passando
- [ ] Cobertura mínima respeitada (definir por projeto)
- [ ] Testes são determinísticos (mesmo resultado sempre)
