# Fluxo de Desenvolvimento

Implementação assistida por IA seguindo TDD e Clean Architecture.

## Etapas

```
Tarefa pronta (de 04-fluxo-concepcao)
     │
     ▼
Análise com IA
     │
     ├──> Seguir TDD?
     │        │
     │        ▼
     │   Escrever teste (IA + você)
     │        │
     │        ▼
     │   Ver teste falhar
     │        │
     │        ▼
     │   Implementar (IA + você)
     │        │
     │        ▼
     │   Ver teste passar
     │
     ├──> Seguir implementação direta?
     │        │
     │        ▼
     │   Implementar com IA
     │
     └──> Ambos
              │
              ▼
         Validação com IA
              │
              ▼
         Commit
```

## Como Usar IA no Desenvolvimento

### 1. Análise da Tarefa

Antes de escrever qualquer código:

> "Analise esta tarefa: [descrição]. Considerando nossa Clean Architecture:
>
> 1. Qual camada é afetada? (domain, application, infrastructure, presentation)
> 2. Quais interfaces/portas precisam ser definidas primeiro?
> 3. Quais arquivos existentes precisam ser alterados?
> 4. Qual a ordem ideal de implementação (de dentro para fora)?
> 5. O que pode quebrar com esta mudança?"

### 2. Implementação TDD

#### Passo 1: Teste Primeiro

> "Para o caso de uso [nome], gere o teste unitário seguindo:
>
> - Arrange: preparar dependências mockadas
> - Act: executar o caso de uso
> - Assert: verificar resultado e interações
> - Lembre-se: o teste deve falhar inicialmente pois a implementação não existe"

#### Passo 2: Implementação Mínima

> "Implemente o caso de uso [nome] para passar no teste acima.
> Regras:
>
> - Código mínimo necessário
> - Sem dependências externas na camada domain
> - Seguir a interface definida em domain/ports"

#### Passo 3: Refatoração

> "O código está passando nos testes. Agora refatore para:
>
> - Remover duplicação
> - Melhorar nomes
> - Extrair responsabilidades
> - Garantir que os testes continuam passando"

### 3. Implementação Direta (sem TDD)

Para tarefas bem definidas e de baixo risco:

> "Implemente [funcionalidade] em [arquivo].
> Contexto arquitetural:
>
> - [regras específicas do projeto]
> - [caminho para arquivos similares como referência]
>
> Gere apenas o código necessário, sem comentários explicativos."

### 4. Pair Programming com IA

Use a IA como par de programação:

> "Revise meu código abaixo e aponte:
>
> 1. Problemas de arquitetura (violação de camadas?)
> 2. Problemas de segurança
> 3. Problemas de performance
> 4. Oportunidades de melhoria
> 5. Testes faltantes
>
> `[code]`"

## Validação Antes do Commit

Sempre peça para a IA validar o conjunto completo antes de commitar:

> "Valide se esta implementação:
>
> - [ ] Segue a Regra de Dependência (dependências apontam para dentro)
> - [ ] Trata erros adequadamente (não engole exceções)
> - [ ] Usa tipos explícitos (sem `any`)
> - [ ] Tem cobertura de testes para o novo código
> - [ ] Não expõe dados sensíveis
> - [ ] Segue kebab-case para arquivos e pastas
> - [ ] É consistente com o resto do código no mesmo módulo"

## Checklist de Desenvolvimento

- [ ] Tarefa analisada com IA antes de codificar
- [ ] Testes escritos (se TDD) ou planejados
- [ ] Implementação segue a arquitetura do projeto
- [ ] Código revisado por IA (validação cruzada)
- [ ] Testes passam localmente
- [ ] Lint e formatação OK
- [ ] Commit message no padrão Conventional Commits
