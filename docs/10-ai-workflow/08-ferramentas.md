# Ferramentas

Guia de configuração e boas práticas para as ferramentas de IA do setup.

## OpenCode

[OpenCode](https://opencode.ai) é um agente CLI especializado em engenharia de software. Ele opera diretamente no terminal e tem acesso ao sistema de arquivos, git e ferramentas de desenvolvimento.

### Modos de Uso

| Modo              | Comando                          | Quando Usar                              |
| ----------------- | -------------------------------- | ---------------------------------------- |
| Tarefa única      | `opencode "descrição da tarefa"` | Para tarefas específicas e bem definidas |
| Sessão interativa | `opencode` (sem argumentos)      | Para exploração e tarefas complexas      |
| Com contexto      | `opencode -p "contexto"`         | Quando precisa fornecer contexto inicial |

### Prompt de Inicialização Recomendado

Ao iniciar uma sessão no OpenCode, forneça este contexto:

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

### Comandos Úteis

```bash
# Iniciar sessão com contexto do projeto
opencode

# Executar tarefa específica
opencode "criar entidade User em backend/src/modules/auth/domain/"

# Revisar código
opencode "revisar o código em backend/src/modules/auth/application/create-user.ts"

# Gerar testes
opencode "gerar testes unitários para backend/src/modules/auth/application/create-user.ts"
```

### Boas Práticas com OpenCode

1. **Seja explícito sobre arquivos** — referencie caminhos absolutos quando possível
2. **Peça para ler arquivos primeiro** — "Leia o arquivo X antes de sugerir mudanças"
3. **Use o histórico** — não repita contexto, refine com base na resposta anterior
4. **Peça alternativas** — "Sugira 3 abordagens com prós e contras"
5. **Valide cada mudança** — revise o código gerado antes de aceitar

## Antigravity

Antigravity é uma ferramenta complementar de IA no seu setup de desenvolvimento.

### Integração com OpenCode

Use Antigravity em paralelo com OpenCode para diferentes momentos do fluxo:

| Ferramenta  | Melhor Para                                                                 |
| ----------- | --------------------------------------------------------------------------- |
| OpenCode    | Implementação dentro do contexto do projeto (arquivos, arquitetura, testes) |
| Antigravity | Pesquisas, exploração de conceitos, documentação, análise geral             |

### Fluxo Sugerido

1. **Pesquisa/Concepção**: Antigravity para explorar alternativas e refinar ideias
2. **Implementação**: OpenCode para codificar dentro do projeto
3. **Revisão Cruzada**: Use uma ferramenta para revisar o que a outra gerou
4. **Documentação**: Antigravity para documentação geral
5. **Testes**: OpenCode para gerar testes no contexto do projeto

## Configuração do Ambiente

### OpenCode

```bash
# Instalação global
npm install -g @opencode/cli

# Verificar instalação
opencode --version

# Criar arquivo de configuração do projeto (se necessário)
opencode init
```

### Variáveis de Ambiente

```bash
# Token de API (se necessário)
export OPENCODE_API_KEY=sua_chave_aqui
export ANTIGRAVITY_API_KEY=sua_chave_aqui
```

**Nunca commit arquivos com chaves de API.** Use variáveis de ambiente ou arquivos `.env.local` ignorados pelo git.

## Ferramentas Complementares

| Ferramenta     | Uso                    | Integração               |
| -------------- | ---------------------- | ------------------------ |
| GitHub Copilot | Autocomplete no editor | IDE (VS Code, JetBrains) |
| ESLint         | Lint automático        | Husky (pre-commit)       |
| Prettier       | Formatação automática  | Husky (pre-commit)       |
| Commitizen     | Commits interativos    | `npm run commit`         |

### Dica: Combinação Poderosa

```
Copilot no editor → sugestões em tempo real (micro)
OpenCode no terminal → tarefas complexas e contextualizadas (macro)
Antigravity → pesquisa e análise externa (exploração)

Revisão sempre humana → validação final
```

## Checklist de Ferramentas

- [ ] OpenCode instalado e configurado
- [ ] Antigravity configurado e acessível
- [ ] Chaves de API em variáveis de ambiente (não no código)
- [ ] Prompt de inicialização definido para sessões do OpenCode
- [ ] Fluxo de alternância entre ferramentas definido
