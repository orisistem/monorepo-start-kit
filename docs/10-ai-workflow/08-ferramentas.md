# Ferramentas de IA

Guia de configuração, comparação e decisão para todas as ferramentas de IA do ecossistema de desenvolvimento.

---

## 1. Visão Geral

O projeto adota uma estratégia **multi-agente**: cada ferramenta de IA tem um ponto ótimo de uso. Nenhuma ferramenta sozinha cobre todo o ciclo — a combinação certa depende da fase e da tarefa.

| Ferramenta | Tipo | Melhor Para | Custo |
|-----------|------|-------------|-------|
| **Claude Code** | Agente CLI (terminal) | Implementação complexa, debugging, refatoração multi-arquivo, revisão arquitetural | Token-based |
| **OpenCode** | Agente CLI (terminal) | Tarefas contextualizadas no projeto, geração de testes, code review automatizado | Token-based |
| **GitHub Copilot** | Autocomplete IDE | Sugestões em tempo real, boilerplate, completions inline | Assinatura fixa |
| **Copilot Chat** | Chat IDE | Perguntas rápidas, explicar código, gerar snippets simples | Incluso no Copilot |
| **Cursor** | IDE com IA nativa | Edição multi-arquivo, "vibe coding" para protótipos, refatoração com preview | Assinatura fixa |
| **Antigravity** | Ferramenta complementar | Pesquisa, documentação, exploração de conceitos, análise geral | Token-based |

---

## 2. Claude Code

Claude Code é o agente CLI da Anthropic. Opera diretamente no terminal com acesso ao sistema de arquivos, git, e ferramentas de desenvolvimento.

### Modos de Uso

| Modo | Comando | Quando Usar |
|------|---------|-------------|
| Sessão interativa | `claude` | Para trabalho exploratório e multi-etapa |
| Tarefa única | `claude -p "descrição"` | Para tarefas bem definidas e scriptáveis |
| Com pipe | `echo "prompt" \| claude` | Integração com scripts e CI |
| Modo plan | `/plan` dentro da sessão | Antes de implementações não-triviais |

### Prompt de Inicialização (Claude Code)

```
PROJETO: monorepo-start-kit
ARQUITETURA: Feature-Sliced Design + Clean Architecture (backend e frontend)
REGRAS:
- Dependências apontam para dentro (domain não sabe de infra/presentation)
- kebab-case para pastas e arquivos
- Conventional Commits para mensagens
- ESLint + Prettier para formato
- Idioma: backend em inglês; frontend: código em inglês, UI em português
- Testes: unitários isolados, integração com banco real, e2e para fluxos críticos
- Qualidade: sem any, sem try/catch vazio, sem magic numbers, sem código comentado
CARREGAMENTO:
- Nível 1: leia MEMORY.md e CODEBASE.md para contexto
- Nível 2: leia o documento da fase atual (02 a 07)
- Nível 3: consulte 09-boas-praticas.md sob demanda
- NUNCA leia toda a documentação de uma vez
DOCS: docs/10-ai-workflow/ contém o fluxo completo de IA
```

### Boas Práticas com Claude Code

1. **Use `/plan` antes de tarefas complexas** — o modo plano explora a codebase e apresenta abordagem antes de implementar
2. **Seja explícito sobre arquivos** — referencie caminhos absolutos quando possível
3. **Use o histórico como contexto** — refine com base na resposta anterior em vez de repetir o prompt
4. **Peça alternativas** — "Sugira 3 abordagens com prós e contras"
5. **Valide cada mudança** — revise o código gerado antes de aceitar; use `/code-review` para validação cruzada
6. **Use skills via `/`** — `/feature-sliced`, `/test-pyramid`, `/tech-debt` via OpenCode skills

### Configuração

```bash
# Instalação
npm install -g @anthropic-ai/claude-code

# Verificar instalação
claude --version

# Configurar chave de API
export ANTHROPIC_API_KEY=sua_chave_aqui
```

---

## 3. OpenCode

OpenCode é um agente CLI especializado em engenharia de software. Opera com skills e agentes customizados definidos em `.opencode/`.

### Modos de Uso

| Modo | Comando | Quando Usar |
|------|---------|-------------|
| Tarefa única | `opencode "descrição da tarefa"` | Para tarefas específicas e bem definidas |
| Sessão interativa | `opencode` (sem argumentos) | Para exploração e tarefas complexas |
| Com contexto | `opencode -p "contexto"` | Quando precisa fornecer contexto inicial |

### Prompt de Inicialização (OpenCode)

```
Projeto: monorepo-start-kit
Arquitetura:
- Feature-Sliced Design + Clean Architecture em backend e frontend
- Módulos organizados como modules/[modulo]/{domain, application, infrastructure, presentation}
- Código compartilhado em shared/{domain, application, infrastructure, presentation}
- Monorepo com backend/ e frontend/ separados

Padrões:
- kebab-case para arquivos e pastas
- Conventional Commits (<tipo>(<escopo>): <descrição>)
- ESLint + Prettier para qualidade de código
- Husky para git hooks (pre-commit: lint-staged, commit-msg: commitlint, pre-push: npm test)

Regra de Ouro: dependências só apontam para dentro (inner layers não sabem de outer layers)

Documentação do fluxo de IA em docs/10-ai-workflow/
```

### Agentes e Skills

| Recurso | Comando | Função |
|---------|---------|--------|
| Code Reviewer | `@code-reviewer revisar X` | Revisão de código (read-only) |
| Tester | `@tester gerar testes para X` | Geração de testes nas 3 camadas |
| Feature-Sliced | `/feature-sliced` | Validação de arquitetura FSD |
| Test Pyramid | `/test-pyramid` | Guia de geração de testes |
| Tech Debt | `/tech-debt` | Análise de dívida técnica |

### Configuração

```bash
# Instalação global
npm install -g @opencode/cli

# Verificar instalação
opencode --version

# Token de API
export OPENCODE_API_KEY=sua_chave_aqui
```

---

## 4. GitHub Copilot & Copilot Chat

### Copilot (Autocomplete)

Atua no nível **micro** — sugestões inline enquanto você digita.

**Melhor para:**
- Completar funções e classes depois de definir a assinatura
- Gerar boilerplate repetitivo (mappers, DTOs, validators)
- Preencher padrões de código que seguem o contexto do arquivo

**Não use para:**
- Tarefas que envolvem múltiplos arquivos
- Decisões arquiteturais
- Geração de testes com entendimento de negócio

### Copilot Chat (Chat no IDE)

Atua no nível **meso** — perguntas e snippets dentro do editor.

**Melhor para:**
- "Explica o que esta função faz"
- "Gera um DTO para esta entity"
- "Adiciona validação de email neste campo"
- "Refatora esta função para usar early returns"

**Prompt de contexto (colar no início de conversas relevantes):**
```
Projeto: Clean Architecture + FSD. Stack: Node.js. Regras: kebab-case, sem any, backend inglês, frontend UI pt-BR.
```

---

## 5. Cursor

IDE com IA nativa — edição multi-arquivo com preview, ideal para "vibe coding" e prototipagem rápida.

**Melhor para:**
- Prototipação rápida de features completas (frontend + backend)
- Refatoração que atravessa vários arquivos com preview de diff
- "Vibe coding" — descrever a feature em linguagem natural e iterar rápido
- Edição contextual que entende toda a codebase indexada

**Não use para:**
- Tarefas que exigem revisão arquitetural rigorosa (use Claude Code ou OpenCode com skills)
- Correções de bugs em produção (precisa de raciocínio mais controlado)

**Regras do projeto (`.cursorrules`):**
```
Você está trabalhando em um monorepo com Clean Architecture + Feature-Sliced Design.
- Backend: Node.js, módulos em backend/src/modules/[modulo]/
- Frontend: Node.js, módulos em frontend/src/modules/[modulo]/
- Regra de Dependência: domain/ NUNCA importa de infrastructure/ ou presentation/
- kebab-case para arquivos e pastas
- Backend: código em inglês. Frontend: código em inglês, UI em português brasileiro
- Sem any, sem try/catch vazio, sem magic numbers
- Conventional Commits
```

---

## 6. Antigravity

Ferramenta complementar de IA para pesquisa e exploração fora do contexto de código.

**Melhor para:**
- Pesquisar alternativas técnicas antes de decidir
- Explorar documentação de bibliotecas e APIs
- Gerar documentação e textos livres
- Analisar logs e outputs extensos

---

## 7. Matriz de Decisão: Qual Ferramenta Usar?

### Por fase do ciclo

| Fase | Primária | Secundária | Notas |
|------|----------|------------|-------|
| **Discovery** | Antigravity | Claude Code | Pesquisa aberta, sem necessidade de contexto de código |
| **Concepção** | Claude Code | Antigravity | Geração de PRDs e tech-specs com templates |
| **Desenvolvimento** | Claude Code | Copilot (inline) | Claude Code para implementação; Copilot para boilerplate |
| **Revisão** | OpenCode (`@code-reviewer`) | Claude Code (`/code-review`) | Revisão automatizada com regras do projeto |
| **Testes** | OpenCode (`@tester`) | Claude Code | Geração guiada pela pirâmide de testes |
| **Debugging** | Claude Code | Copilot Chat | Claude Code para diagnósticos multi-arquivo; Copilot para perguntas pontuais |
| **Refatoração** | Claude Code | Cursor | Claude Code para refatoração controlada; Cursor para protótipos |
| **Documentação** | Antigravity | Claude Code | Textos longos e explicações |
| **Prototipagem** | Cursor | Claude Code | "Vibe coding" rápido; validar com Claude Code depois |

### Por tipo de tarefa

| Tarefa | Use | Por quê |
|--------|-----|--------|
| Criar uma entity + use case + repository | Claude Code / OpenCode | Multi-arquivo, precisa seguir FSD |
| Completar um mapper ou DTO | Copilot (inline) | Padrão repetitivo, contexto do arquivo é suficiente |
| "O que este código faz?" | Copilot Chat | Resposta rápida sem sair do IDE |
| Gerar PRD de uma feature | Claude Code + PRD template | Precisa do template e raciocínio estruturado |
| Corrigir bug com stack trace | Claude Code | Diagnóstico multi-arquivo, precisa ler logs |
| Refatorar 5 componentes similares | Cursor | Preview de diff lado a lado, edição multi-arquivo |
| Revisar PR completo | OpenCode (`@code-reviewer`) | Agente especializado, read-only |
| Gerar testes unitários | OpenCode (`@tester`) | Agente segue a pirâmide de testes |
| Prototipar tela de login | Cursor | Rápido, iterativo, preview visual |
| Validar se código segue Clean Architecture | Claude Code + skill `feature-sliced` | Regras complexas, precisa verificar dependências |

### Por tamanho e complexidade

| Característica | Ferramenta |
|---------------|-----------|
| 1 arquivo, 1 função | Copilot (inline) |
| 1 arquivo, múltiplas funções | Copilot Chat |
| 2-5 arquivos no mesmo módulo | Claude Code / OpenCode |
| 5+ arquivos em múltiplos módulos | Claude Code (com `/plan`) |
| Protótipo descartável | Cursor |
| Código de produção | Claude Code + revisão humana |

---

## 8. Fluxo de Alternância (Exemplo Real)

### Cenário: Implementar feature "Recuperação de Senha"

```
1. DISCOVERY (Antigravity)
   "Como funciona OAuth2 password reset flow? Quais as melhores práticas de segurança?"
   → Obtém visão geral sem poluir contexto de código

2. CONCEPÇÃO (Claude Code)
   "Gere um PRD para a feature de recuperação de senha seguindo o template
    em docs/01-requirements/PRD-template.md. Inclua critérios de segurança."
   → PRD documentado em docs/01-requirements/

3. DESENVOLVIMENTO (Claude Code + Copilot)
   Claude Code: "Implemente o use case SendPasswordResetEmail em
   backend/src/modules/auth/application/use-cases/ seguindo
   05-fluxo-desenvolvimento.md"
   Copilot: completa os mappers e DTOs enquanto você digita

4. TESTES (OpenCode @tester)
   "@tester gerar testes unitários e de integração para
    backend/src/modules/auth/application/use-cases/send-password-reset-email.ts"
   → Testes seguindo a pirâmide

5. REVISÃO (OpenCode @code-reviewer)
   "@code-reviewer revisar backend/src/modules/auth/"
   → Relatório de violações arquiteturais e qualidade

6. COMMIT (Claude Code)
   "Gere uma mensagem de commit no padrão Conventional Commits para
    esta alteração. Escopo: auth."
```

---

## 9. Configuração do Ambiente

### Variáveis de Ambiente

```bash
# Claude Code
export ANTHROPIC_API_KEY=sua_chave_aqui

# OpenCode
export OPENCODE_API_KEY=sua_chave_aqui

# Antigravity
export ANTIGRAVITY_API_KEY=sua_chave_aqui
```

**Nunca commit arquivos com chaves de API.** Use variáveis de ambiente ou arquivos `.env.local` ignorados pelo git.

### Arquivos de Configuração no Repo

| Arquivo | Ferramenta | Função |
|---------|-----------|--------|
| `.opencode/` | OpenCode | Skills e agentes customizados |
| `AGENTS.md` | Claude Code | Contexto que a IA carrega automaticamente |
| `.cursorrules` | Cursor | Regras do projeto para o Cursor |
| `.github/copilot-instructions.md` | Copilot | Instruções para Copilot Chat |

---

## 10. Dica: Combinação Poderosa

```
Copilot no IDE      → sugestões em tempo real (micro — segundos)
Copilot Chat        → perguntas rápidas sem sair do editor (meso — minutos)
Claude Code         → implementação complexa, debugging, arquitetura (macro — horas)
OpenCode + skills   → revisão e testes automatizados com regras do projeto
Cursor              → prototipagem rápida e refatoração visual
Antigravity         → pesquisa externa sem poluir contexto de código

Revisão humana      → validação final em TODOS os casos
```

**Regra prática:** Se você está digitando e a IA pode completar → Copilot. Se você está pensando em como resolver → Claude Code ou OpenCode. Se você está explorando o que fazer → Antigravity. Se você quer ver rápido como fica → Cursor. Se você está validando se ficou bom → revisão humana.

---

## 11. Checklist de Ferramentas

- [ ] Claude Code instalado (`claude --version`)
- [ ] OpenCode instalado e configurado (`opencode --version`)
- [ ] Copilot ativo no IDE (VS Code / JetBrains)
- [ ] Cursor configurado com `.cursorrules` do projeto
- [ ] Antigravity configurado e acessível
- [ ] Chaves de API em variáveis de ambiente (nunca no código)
- [ ] Prompt de inicialização definido para Claude Code e OpenCode
- [ ] `AGENTS.md` atualizado com contexto do projeto
- [ ] `.opencode/` configurado com skills e agentes
