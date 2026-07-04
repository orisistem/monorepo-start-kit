# Prompt Resumido para Iniciar Sessão

Cole este bloco no início de cada sessão com a IA para garantir que o contexto do projeto seja estabelecido corretamente.

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
DOCS: docs/10-ai-workflow/ contém o fluxo completo de IA
CARREGAMENTO:
- Nível 1 (bootstrap): leia MEMORY.md e CODEBASE.md para retomar contexto da sessão anterior
- Nível 2 (fase): leia o documento da fase atual (02 a 07) conforme a natureza da tarefa
- Nível 3 (regra): consulte 09-boas-praticas.md apenas sob demanda, quando houver violação
- NUNCA leia toda a documentação de uma vez — use lazy loading
PLANO COMPLETO: docs/10-ai-workflow/12-workflow-plan.md
```
