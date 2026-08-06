# Session Commander

> **Instruções para o agente de IA:** Ao ler este documento, execute a sequência abaixo automaticamente. Não apenas armazene o contexto — **aja**.

## 1. Projeto

```
PROJETO: monorepo-start-kit
ARQUITETURA: Feature-Sliced Design + Clean Architecture (backend, frontend web e desktop)
STACK: [backend: framework + ORM + banco] | [desktop: Tauri v2 + React 19 + Tailwind v4] | [web: React + Vite + Zustand]
```

## 2. Regras Essenciais

- Dependências apontam para dentro (domain não sabe de infra/presentation)
- kebab-case para pastas e arquivos
- Conventional Commits para mensagens
- Idioma: backend em inglês; frontend: código em inglês, UI em português
- Qualidade: sem any, sem try/catch vazio, sem magic numbers, sem código comentado
- Testes: unitários isolados, integração com banco real, e2e para fluxos críticos

## 3. Sequência de Ação (executar agora)

```
1. Ler 10-memory.md           → estado da última sessão, decisões, próximos passos
2. Ler 11-codebase.md         → mapa atual do sistema, módulos, dependências
3. Perguntar ao usuário qual frente deseja trabalhar:
   → backend, frontend web, frontend desktop ou infra

4. Ler apenas o plano correspondente em 02-planning/:
   → backend  → 02-planning/backend-implementation.md
   → web      → 02-planning/web-implementation.md
   → desktop  → 02-planning/desktop-implementation.md
   → mobile   → 02-planning/mobile-implementation.md
   → infra    → 02-planning/infrastructure-implementation.md

5. Apresentar ao usuário o resumo da frente escolhida:
   "Frente escolhida: [backend | web | desktop | mobile | infra]
    ● [fase atual / tarefas restantes]
    ● [próxima tarefa sugerida]

    Confirmamos esta frente ou prefere ajustar?"

6. Aguardar resposta do usuário

7. Carregar o documento da fase correspondente:
   → Se implementação: 05-fluxo-desenvolvimento.md
   → Se revisão/testes: 06-fluxo-revisao-testes.md
   → Se manutenção: 07-fluxo-manutencao.md

8. Propor plano de sessão com tarefas específicas do plano escolhido,
   ordenadas por dependência e risco (de dentro para fora:
   domain → application → infrastructure → presentation)
```

## 4. Lazy Loading

| Nível | O quê | Quando |
|-------|-------|--------|
| **Bootstrap** | 10-memory.md + 11-codebase.md + 02-planning/ | **Toda sessão** (acima) |
| **Fase** | Documento 05, 06 ou 07 | Conforme a tarefa |
| **Regras** | 02-business-discovery, 04-fluxo-concepcao, 09-boas-praticas | Apenas se necessário |

**NUNCA leia toda a documentação de uma vez.**

## 5. Fim da Sessão

Ao encerrar, atualize `10-memory.md` e o plano em `02-planning/` com:
- O que foi feito
- Decisões tomadas
- Próximos passos
- Tarefas concluídas (atualizar status no plano correspondente)
