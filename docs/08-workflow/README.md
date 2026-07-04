# Git Workflow & Standards

Este projeto segue um fluxo de trabalho baseado em branches, Pull Requests (PRs) e code review obrigatório. As regras abaixo se aplicam a **todos** os papéis no projeto: desenvolvedores, tech leads, e gestores.

---

## 1. Branching Strategy

Adotamos um modelo derivado do **Trunk-Based Development** com branches curtas e foco em integração contínua.

### Tipos de Branch

| Tipo | Nomenclatura | Ramifica de | Merge em | Vida útil |
|------|-------------|-------------|----------|-----------|
| `feat` | `feat/<modulo>/<descricao>` | `main` | `main` | Horas a 2 dias |
| `fix` | `fix/<modulo>/<descricao>` | `main` | `main` | Horas a 1 dia |
| `refactor` | `refactor/<modulo>/<descricao>` | `main` | `main` | Horas a 2 dias |
| `docs` | `docs/<descricao>` | `main` | `main` | Minutos a horas |
| `release` | `release/<versao>` | `main` | `main` | Dias (preparação) |
| `hotfix` | `hotfix/<descricao>` | `main` | `main` | Minutos a horas |

### Regras de nomenclatura

- Use `kebab-case` para o nome da branch
- Inclua o módulo quando aplicável (`auth`, `orders`, `shared`, etc.)
- Seja descritivo mas conciso — até 60 caracteres idealmente

```
✅ feat/auth/recuperacao-senha
✅ fix/orders/calculo-frete-errado
✅ refactor/shared/extrair-button-component
❌ minha-branch
❌ feature/login (use feat, não feature)
❌ bugfix (use fix)
```

### Branch por papel

| Papel | Cria branch? | Cria PR? | Aprova PR? | Faz merge? |
|-------|:-----------:|:--------:|:----------:|:----------:|
| Desenvolvedor | ✅ Sim | ✅ Sim | ❌ | ❌ |
| Tech Lead / Revisor | ✅ Sim | ✅ Sim | ✅ Sim | ✅ Sim |
| Gestor de Projeto | ❌ (a menos que docs) | ❌ (a menos que docs) | ✅ Para docs e planejamento | ❌ |

---

## 2. Fluxo de Trabalho Completo

```
git checkout main
git pull origin main              ← Sempre comece do main atualizado
git checkout -b feat/auth/login   ← Crie a branch com nome descritivo
                                   ← ... desenvolva, commite, teste ...
git push -u origin feat/auth/login ← Publique a branch
                                   ← Abra o PR pelo GitHub
                                   ← Solicite review
                                   ← ... receba feedback, ajuste ...
                                   ← Um revisor aprova ✅
git checkout main
git pull origin main              ← Atualize o main local
git merge feat/auth/login         ← Faça o merge (se você for o revisor)
git push origin main
git branch -d feat/auth/login     ← Limpe a branch local
```

---

## 3. Pull Requests (PRs)

### Template de PR

Use o template em [`PR-template.md`](PR-template.md). Resumo dos campos obrigatórios:

- **Descrição** clara do que foi feito e por que
- **Issues relacionadas** (link ou `Closes #123`)
- **Checklist**: testado localmente, lint passou, testes passam, documentação atualizada
- **Screenshots/evidências** (se aplicável)

### Regras de ouro para abrir um PR

1. **PRs pequenos**: Até 400 linhas de diff. Se passar disso, quebre em PRs menores
2. **Um PR = um propósito**: Não misture feature com refatoração, ou bug fix com melhoria
3. **PR em rascunho (draft)**: Abra como draft se ainda estiver trabalhando. Marque como "ready for review" apenas quando estiver pronto para receber feedback
4. **Descreva o "por que"**: O diff mostra "o que" mudou; a descrição do PR deve explicar "por que"
5. **Link para os artefatos**: Se o PR implementa uma feature, link o PRD, a tech-spec e os ADRs relevantes
6. **Commits atômicos**: Cada commit na branch deve ser uma unidade coesa e com mensagem no padrão Conventional Commits

### Exemplo de PR bem descrito

```markdown
## O que foi feito

Implementa o fluxo de recuperação de senha via email: o usuário
informa o email, recebe um link com token JWT de uso único
(válido por 15 min), e define uma nova senha.

## Por que

PRD: docs/01-requirements/PRD-recuperacao-senha.md
Tech-Spec: docs/03-architecture/tech-spec-recuperacao-senha.md
ADR: docs/03-architecture/ADR-003-jwt-para-reset-senha.md

## Issues

Closes #42

## Checklist

- [x] Código segue Clean Architecture + FSD
- [x] Testes unitários para o use case
- [x] Testes de integração para o repository
- [x] Testes E2E para o fluxo completo
- [x] Lint e formatação OK
- [x] Testado localmente com Docker
- [x] Documentação atualizada
```

---

## 4. Code Review (Regras de Ouro)

### Para o revisor (quem aprova)

| Regra | Por quê |
|-------|---------|
| **Revise o diff, não a ideia** | A ideia já foi validada no PRD/tech-spec. O review julga a implementação |
| **Bloqueie violações arquiteturais** | `domain/` importando de `infrastructure/` → 🔴 rejeitar imediatamente |
| **Não bloqueie por estilo** | Prettier e ESLint já cuidam disso. Se passou no lint, não peça para mudar aspas |
| **Sugira, não imponha** | Use `suggestion:` para melhorias e `nit:` para detalhes menores. Reserve `blocking:` para violações reais |
| **Responda em até 24h** | PRs abertos são trabalho parado. Se não puder revisar em 24h, delegue |
| **Elogie o que está bom** | Code review não é só crítica. Reconheça boas soluções |

### Para o autor (quem recebe o review)

| Regra | Por quê |
|-------|---------|
| **Não leve para o lado pessoal** | O review é sobre o código, não sobre você |
| **Responda a todos os comentários** | Mesmo que seja "feito" ou um 👍. Cada comentário merece resposta |
| **Não faça force-push após review** | Adicione commits de correção. O revisor precisa ver o diff do que mudou desde a última revisão |
| **Peça ajuda se travar** | Se um comentário do revisor não fizer sentido, pergunte. Não assuma |

### Classificação de comentários

| Prefixo | Significado | Ação esperada |
|---------|-------------|---------------|
| `blocking:` | Deve ser corrigido antes do merge | Corrigir |
| `suggestion:` | Melhoria recomendada mas não obrigatória | Avaliar e responder |
| `question:` | Dúvida genuína, não é crítica | Responder |
| `nit:` | Detalhe menor, não vale debate | Corrigir se rápido, ou marcar como resolvido |
| `praise:` | Elogio | Agradecer 😊 |

### O que o revisor SEMPRE verifica

- [ ] **Regra de Dependência**: `domain/` importa de camadas externas?
- [ ] **Módulos isolados**: Um módulo importa infra de outro?
- [ ] **Tipos**: Algum `any`? `try/catch` vazio? Magic numbers?
- [ ] **Testes**: Existem testes para o novo código? Estão na camada certa da pirâmide?
- [ ] **Segurança**: Secrets expostos? SQL injection? Dados sensíveis em log?
- [ ] **Idiomas**: Backend em inglês? Frontend: código inglês, UI pt-BR?
- [ ] **Commits**: Mensagens seguem Conventional Commits?

### Uso de IA no Code Review

Use o agente `code-reviewer` como primeira passada:

```bash
# OpenCode
@code-reviewer revisar backend/src/modules/auth/

# Claude Code
/claude-code-review
```

A IA encontra problemas mecânicos (violações de arquitetura, `any`, etc.). O revisor humano foca nos problemas que a IA não vê: lógica de negócio incorreta, más escolhas de design, experiência do usuário. **A IA revisa, o humano decide.**

---

## 5. Regras de Ouro para Aceitar um PR (Merge)

### Critérios de aprovação (todos devem ser verdadeiros)

| # | Critério | Quem verifica |
|---|----------|---------------|
| 1 | **CI pipeline verde**: lint, testes, build — tudo passou | Automático (GitHub Actions) |
| 2 | **1 aprovação humana** de um revisor qualificado (tech lead ou dev sênior) | Revisor |
| 3 | **Nenhum comentário `blocking:` em aberto** | Revisor |
| 4 | **Cobertura de testes não diminuiu** (para código novo: ≥80% de cobertura) | CI + Revisor |
| 5 | **PRD/tech-spec existe e está linkado** (para features novas) | Revisor |
| 6 | **Documentação atualizada** (CODEBASE.md, MEMORY.md, README se aplicável) | Autor |
| 7 | **Nenhum segredo ou credencial exposto** | Revisor + ferramenta automática |

### Quem pode fazer merge?

```
main é protegido:
├── Merge exige 1 aprovação ✅
├── Merge exige CI passando ✅
├── Quem abre o PR NÃO pode aprovar o próprio PR ✅
└── Apenas tech leads e maintainers têm permissão de merge
```

### Depois do merge

1. **Delete a branch remota** (GitHub oferece o botão após o merge)
2. **Atualize `MEMORY.md`** com o que foi entregue e decisões tomadas
3. **Atualize `CODEBASE.md`** se novos módulos ou entry points foram criados
4. **Feche a issue** referenciada (`Closes #123` no PR faz isso automaticamente)
5. **Avise o time** no canal de comunicação do projeto

---

## 6. Fluxo de Release

```
main estável (todos os testes passam)
     │
     ▼
git checkout -b release/1.2.0
     │
     ▼
Ajustes de versão (package.json, changelog)
     │
     ▼
Testes completos (unit + integration + e2e)
     │
     ▼
PR: release/1.2.0 → main (review rápido)
     │
     ▼
Merge → git tag v1.2.0 → push --tags
     │
     ▼
CI/CD: build → deploy staging → smoke test → deploy produção
```

---

## 7. Conventional Commits (Padrão de Mensagens)

Esta seção mantém as regras originais do projeto:

### Formato

```text
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Tipos Permitidos

| Tipo | Uso |
|------|-----|
| **feat** | Nova funcionalidade para o usuário |
| **fix** | Correção de bug |
| **docs** | Alterações em documentação |
| **style** | Formatação (sem alterar lógica) |
| **refactor** | Refatoração sem bug nem feature |
| **perf** | Melhoria de performance |
| **test** | Adição ou correção de testes |
| **build** | Build system ou dependências externas |
| **ci** | Configuração de CI/CD |
| **chore** | Tarefas que não afetam `src/` ou `test/` |
| **revert** | Reverte commit anterior |

### Exemplos

- `feat(auth): add login form validation`
- `fix(api): resolve memory leak in order fetching`
- `docs: update setup instructions in README`
- `refactor(shared): extract button component`

---

## 8. CLI Interativa (Commitizen)

Para facilitar a aderência ao padrão, usamos o **Commitizen**:

### `npm run commit`

1. Adicione os arquivos (`git add <arquivos>`)
2. Rode `npm run commit`
3. Responda às perguntas interativas

### `npm run ship`

Faz tudo de uma vez: `git add .` → Commitizen interativo → testes → `git push`.

> ⚠️ `npm run ship` só deve ser usado em branches pessoais. Nunca em `main` ou branches compartilhadas.
