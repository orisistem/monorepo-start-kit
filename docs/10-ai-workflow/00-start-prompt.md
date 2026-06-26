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
```
