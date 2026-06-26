# Boas Práticas

Padrões específicos do template que a IA deve respeitar em todas as interações.

## 1. Regra de Dependência (Clean Architecture)

Esta é a regra mais importante. A IA deve ser lembrada constantemente:

```
❌ NUNCA:
- Importar Prisma/Mongoose/TypeORM dentro de uma entidade ou caso de uso
- Importar React/Vue/Axios dentro de domain/entities
- Importar código do frontend dentro do backend (ou vice-versa)

✅ SEMPRE:
- Definir interfaces (ports) na camada domain
- Implementar (adapters) na camada infrastructure
- Injetar dependências via construtor ou parâmetro
- Manter entities e use cases puros (sem efeitos colaterais externos)
```

**Prompt para lembrar a IA:**

> "Lembre-se da Regra de Dependência: a camada domain não pode importar nada das camadas externas (infrastructure, presentation). Use interfaces (ports) e injeção de dependência."

## 2. Nomenclatura

| Item             | Padrão               | Exemplo Correto             | Exemplo Errado             |
| ---------------- | -------------------- | --------------------------- | -------------------------- |
| Pastas           | kebab-case           | `use-cases/`                | `useCases/` ou `UseCases/` |
| Arquivos         | kebab-case           | `create-user.ts`            | `createUser.ts`            |
| Classes          | PascalCase           | `CreateUserUseCase`         | `createUserUseCase`        |
| Funções          | camelCase            | `execute()`                 | `Execute()`                |
| Constantes       | UPPER_SNAKE          | `MAX_RETRIES`               | `maxRetries`               |
| Tipos/Interfaces | PascalCase prefixado | `IUserRepository` ou `User` | `user_repo`                |

## 3. Estrutura de Módulos (Feature-Sliced Design)

Aplica-se igualmente a **backend e frontend**. O projeto é organizado em **módulos** (fatias de domínio), cada um contendo suas próprias camadas internas seguindo Clean Architecture:

```
src/
├── shared/                     # Código reutilizável entre módulos
│   ├── domain/                 # Entidades e interfaces compartilhadas
│   ├── application/            # Use cases e DTOs compartilhados
│   ├── infrastructure/         # Clientes base, configuração
│   └── presentation/           # Componentes base, middleware
└── modules/
    └── [modulo]/               # Ex: auth, products, orders
        ├── domain/             # Entidades, regras de negócio (mais interna)
        ├── application/        # Casos de uso, portas, DTOs
        ├── infrastructure/     # Adaptadores (banco, API externa)
        └── presentation/       # Controllers, componentes UI (mais externa)
```

### Regras

- **Regra de Dependência**: `domain/` não sabe da existência de `infrastructure/` ou `presentation/`. Dependências apontam para dentro.
- **Isolamento entre módulos**: Um módulo não importa diretamente a `infrastructure/` de outro módulo. A comunicação entre módulos ocorre via `shared/` ou pela camada de application.
- **Código compartilhado**: Tudo que é reutilizado entre módulos vive em `shared/`, nunca duplicado dentro dos módulos.

## 5. Testes

Seguindo a pirâmide de `docs/09-testing/`:

- **Unitários**: Isolados, sem banco, sem rede, sem arquivos. Mocks para tudo externo.
- **Integração**: Banco real (container Docker), serviços terceiros mockados.
- **E2E**: Sistema completo rodando, ferramentas como Playwright/Cypress.

**Prompt padrão para testes:**

> "Gere testes que testem COMPORTAMENTO, não implementação. Prefira mocks em vez de spies. Nomes descritivos no padrão: `deve_[resultado]_quando_[condicao]`."

## 6. Commits

Sempre seguir Conventional Commits (detalhes em `docs/08-workflow/`):

```
<tipo>(<escopo>): <descrição no imperativo presente>

Tipos válidos: feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert
```

**Prompt para mensagem de commit:**

> "Gere uma mensagem de commit no padrão Conventional Commits para esta alteração. Use formato `<tipo>(<escopo>): <descrição>`. Escopo deve refletir o módulo afetado (ex: auth, api, shared)."

## 7. Qualidade de Código

- Sem `any` — usar tipos explícitos sempre
- Sem `try/catch` vazio — tratar ou propagar erros
- Sem magic numbers — extrair para constantes com nome
- Sem código comentado — remover, não comentar
- Funções pequenas e com responsabilidade única
- Nomes descritivos (maus nomes não se compensam com comentários)

## 8. Prompt Resumido para Iniciar Sessão

Cole este bloco no início de cada sessão com a IA:

```
PROJETO: monorepo-start-kit
ARQUITETURA: Feature-Sliced Design + Clean Architecture (backend e frontend)
REGRAS:
- Dependências apontam para dentro (domain não sabe de infra/presentation)
- kebab-case para pastas e arquivos
- Conventional Commits para mensagens
- ESLint + Prettier para formato
- Testes: unitários isolados, integração com banco real, e2e para fluxos críticos
- Qualidade: sem any, sem try/catch vazio, sem magic numbers, sem código comentado
DOCS: docs/10-ai-workflow/ contém o fluxo completo de IA
```

## Checklist de Boas Práticas

- [ ] Regra de Dependência respeitada em todo código gerado
- [ ] Nomenclatura consistente (kebab-case, PascalCase, camelCase)
- [ ] Módulos/camadas seguem a estrutura definida
- [ ] Testes na camada correta da pirâmide
- [ ] Mensagens de commit no padrão
- [ ] Código sem `any`, sem magic numbers, sem dead code
- [ ] Prompt de inicialização usado no começo da sessão
