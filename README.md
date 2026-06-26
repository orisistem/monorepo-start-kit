# Project Structure Template

This repository serves as a stack-agnostic template for software development projects. It is organized to support both strong project management and clean software architecture.

## Overview

The structure follows a **Monorepo** approach, separating the frontend and backend to allow for specific architectural patterns in each, while keeping management centralized.

- **`docs/`**: Everything related to project management, product requirements, and technical documentation.
- **`infrastructure/`**: Operations and DevOps, including Terraform (IaC), Ansible playbooks, and Nginx configs.
- **`backend/`**: The backend source code (`src/` and `tests/`), organized around Feature-Sliced Design + Clean Architecture (modules with domain/application/infrastructure/presentation layers). Contains its own `Dockerfile`.
- **`frontend/`**: The frontend source code, organized around Feature-Sliced Design + Clean Architecture (modules with domain/application/infrastructure/presentation layers). Contains its own `Dockerfile`.
- **`scripts/`**: Automation for dev ops and utility tasks.
- **`.github/`**: CI/CD pipelines.
- **`docker-compose.yml`**: Root orchestrator for spinning up the full stack (Frontend, Backend, DB, Nginx).

## Padrões e Regras de Ouro (Standards & Guidelines)

Para manter este projeto limpo, escalável e livre de dívidas técnicas, toda a equipe deve seguir rigorosamente as diretrizes abaixo:

### 1. Padrão de Nomenclatura

- **Pastas e Arquivos**: Utilizamos exclusivamente `kebab-case` (ex: `use-cases`, `user-controller.ts`). Isso é "URL-friendly", padrão em frameworks modernos e evita bugs de _case-sensitivity_ entre Windows e Linux/Mac.

### 2. Regras de Arquitetura (A "Regra de Ouro")

Tanto Backend quanto Frontend seguem **Feature-Sliced Design + Clean Architecture**. A regra de ouro é a **Regra de Dependência**:

> _As dependências de código só podem apontar para dentro. A camada `domain` não pode saber absolutamente NADA sobre as camadas externas (`infrastructure`, `presentation`)._

- **NÃO FAÇA**: Importar uma biblioteca do banco de dados (ex: Prisma, Mongoose) dentro de uma Entidade ou Caso de Uso.
- **NÃO FAÇA**: Importar código do `frontend/` dentro do `backend/` e vice-versa. O Monorepo serve para organizar, não para misturar código cliente-servidor.

### 3. Estrutura de Módulos (FSD)

O projeto é organizado em **módulos** (fatias de domínio), tanto no backend quanto no frontend:

```
src/
├── shared/                     # Código reutilizável entre módulos
└── modules/
    └── [modulo]/
        ├── domain/             # Entidades, regras de negócio (mais interna)
        ├── application/        # Casos de uso, portas, DTOs
        ├── infrastructure/     # Adaptadores (banco, API externa)
        └── presentation/       # Controllers, componentes UI (mais externa)
```

- Não crie componentes genéricos dentro de módulos de negócio. Se reutilizado em mais de um módulo, deve ir para `shared/`.
- Cada módulo deve ser independente. Um módulo não chama diretamente a infraestrutura de outro módulo.

### 4. Git Workflow & Commits

- Utilizamos **Conventional Commits**. O formato obrigatório é: `<tipo>(<escopo>): <descrição>` (ex: `feat(auth): adiciona tela de login`).
- Temos o **Husky** instalado na raiz. Ele irá **bloquear** qualquer commit que não siga o padrão.
- Leia o manual completo em: [`docs/08-workflow/README.md`](./docs/08-workflow/README.md).

### 5. Qualidade de Código (Linting & Formatação)

- **Prettier e ESLint** estão configurados em conjunto com o Husky (`lint-staged`).
- **NÃO** commite código mal formatado. Ao rodar `git commit`, os arquivos modificados serão formatados automaticamente. Se houver um erro de linting grave, o commit será abortado.

### 6. Fluxo de Trabalho com IA

- Este projeto inclui um guia completo para uso de ferramentas de IA no ciclo de desenvolvimento.
- Consulte [`docs/10-ai-workflow/README.md`](./docs/10-ai-workflow/README.md) para o fluxo completo: discovery do negócio, concepção, desenvolvimento, testes e manutenção com IA.
- Use os templates de prompt em `docs/10-ai-workflow/02-prompt-engineering.md` para interagir com OpenCode e Antigravity.
- Skills reutilizáveis em `.opencode/skills/` (feature-sliced, test-pyramid, tech-debt).
- Agentes especializados em `.opencode/agents/` — use `@code-reviewer` ou `@tester` no OpenCode.
- Templates de especificação: `docs/01-requirements/PRD-template.md` e `docs/03-architecture/tech-spec-template.md`.

## Getting Started

Por favor, consulte os arquivos `README.md` específicos dentro das pastas `docs/`, `backend/`, `frontend/` e `infrastructure/` para instruções detalhadas de inicialização e deploy de cada área.
