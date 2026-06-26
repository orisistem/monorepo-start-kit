# Princípios Gerais

## Filosofia

IA é uma ferramenta de aumento de produtividade, não um substituto para o pensamento crítico do desenvolvedor. O desenvolvedor é sempre o responsável final pela qualidade, segurança e adequação do código produzido.

## Regras de Ouro

### 1. Humanos no Comando (Human-in-the-Loop)

Nunca aceite cegamente o output da IA. Revise, questione e valide cada sugestão antes de integrá-la ao código.

- **Sempre leia** o código gerado antes de commitar
- **Sempre entenda** o que o código faz — se não entende, peça explicação
- **Sempre teste** a solução — não assuma que está correta

### 2. Contexto é Tudo

A qualidade da resposta da IA é diretamente proporcional à qualidade do contexto fornecido.

- Forneça sempre o contexto arquitetural do projeto
- Referencie arquivos e diretórios relevantes
- Explique o "porquê" além do "o que"

### 3. Iteração, Não Geração Única

O melhor trabalho com IA vem de múltiplas iterações, não de um prompt gigante e único.

- Comece com uma visão geral, depois refine
- Peça alternativas antes de escolher
- Use o histórico da conversa para refinar direcionamento

### 4. Consistência Arquitetural

A IA não conhece as regras do seu projeto a menos que você as explicite.

- Sempre relembre as regras de arquitetura (Clean Architecture, Feature-Sliced)
- Exija que o código siga os padrões do template (kebab-case, etc.)
- Corrija a IA quando ela sugerir violações — isso a treina para acertar na próxima

### 5. Segurança em Primeiro Lugar

- Nunca compartilhe secrets, tokens ou credenciais em prompts
- Revise código gerado em busca de vulnerabilidades (injeção de SQL, XSS, exposição de dados)
- Desconfie de sugestões que envolvam `eval()`, comandos arbitrários ou permissões excessivas

## Quando Usar IA vs. Quando Pensar Manualmente

| Cenário                                  | IA  | Manual |
| ---------------------------------------- | :-: | :----: |
| Gerar boilerplate / código repetitivo    | ✅  |        |
| Explorar alternativas de design          | ✅  |        |
| Debugar erros obscuros                   | ✅  |        |
| Escrever testes                          | ✅  |        |
| Revisar código                           | ✅  |        |
| Decisões arquiteturais críticas          |     |   ✅   |
| Revisão de segurança sensível            |     |   ✅   |
| Definição de regras de negócio complexas |     |   ✅   |
| Escolha de stacks e dependências         |     |   ✅   |
