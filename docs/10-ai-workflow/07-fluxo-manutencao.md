# Fluxo de Manutenção

Correção de bugs, melhorias incrementais e refatoração com auxílio de IA.

## Etapas

```
Bug / Melhoria / Refatoração identificado
     │
     ▼
Registro (issue ou task)
     │
     ▼
Análise com IA
     │
     ├──> Bug?
     │        │
     │        ▼
     │   Isolar causa raiz
     │        │
     │        ▼
     │   Escrever teste que reproduz o bug
     │        │
     │        ▼
     │   Corrigir com IA
     │        │
     │        ▼
     │   Verificar teste passa + testes existentes
     │
     ├──> Melhoria?
     │        │
     │        ▼
     │   Analisar impacto
     │        │
     │        ▼
     │   Implementar com IA
     │        │
     │        ▼
     │   Validar não regrediu
     │
     └──> Refatoração?
              │
              ▼
         Identificar dívida técnica
              │
              ▼
         Estratégia (IA sugere abordagem)
              │
              ▼
         Implementar em pequenos passos
              │
              ▼
         Testes existentes continuam passando
```

## Como Usar IA na Manutenção

### 1. Diagnóstico de Bugs

> "Estou com um bug em [descrever comportamento] no arquivo [caminho].
>
> Log do erro:
>
> ```
> [stack trace / log]
> ```
>
> Passos para reproduzir:
>
> 1. [passo 1]
> 2. [passo 2]
>
> Código suspeito:
> `[código]`
>
> Atue como um debugger sênior. Me ajude a:
>
> 1. Identificar a causa raiz
> 2. Propor 3 hipóteses do que pode estar errado
> 3. Sugerir um teste que isole o problema
> 4. Propor a correção menos invasiva possível"

### 2. Correção com Teste Vermelho

Sempre comece pelo teste que reproduz o bug:

> "Crie um teste que reproduza este bug:
>
> - Cenário: [descrição]
> - Entrada: [dados]
> - Saída esperada: [valor]
> - Saída atual: [valor errado]
>
> O teste deve falhar inicialmente (RED) e passar após a correção (GREEN)."

### 3. Melhorias Incrementais

> "Quero melhorar [funcionalidade] adicionando [nova capacidade].
>
> Análise de impacto:
>
> 1. Quais arquivos precisam mudar?
> 2. Qual o risco de regressão?
> 3. Testes existentes precisam ser atualizados?
> 4. É uma mudança compatível com versões anteriores?
>
> Implemente a melhoria respeitando os padrões do projeto."

### 4. Refatoração

> "Preciso refatorar [arquivo/módulo]. Motivo: [dívida técnica identificada].
>
> Estratégia sugerida:
>
> 1. Quais padrões de design se aplicariam melhor aqui?
> 2. Como quebrar em etapas seguras (sem quebrar testes)?
> 3. Quais testes preciso adicionar ANTES de refatorar?
>
> Implemente a primeira etapa da refatoração. Os testes existentes devem continuar passando."

### 5. Análise de Regressão

> "Após a alteração em [arquivo], verifique o risco de regressão:
>
> - Quais outros módulos dependem deste código?
> - Quais testes devo executar obrigatoriamente?
> - Há algum contrato/interface que foi alterado?
> - Preciso atualizar documentação?"

## Dívida Técnica

Use IA para identificar e priorizar dívida técnica:

> "Revise o código em [módulo/diretório] e identifique dívida técnica:
>
> 1. Código morto (nunca usado)
> 2. Duplicação
> 3. Falta de tipos/cobertura
> 4. Violações arquiteturais
> 5. Dependências desatualizadas
>
> Para cada item, classifique impacto (alto/médio/baixo) e estime esforço."

## Checklist de Manutenção

### Bug Fix

- [ ] Teste que reproduz o bug foi escrito
- [ ] Causa raiz identificada (não só o sintoma)
- [ ] Correção é mínima e focalizada
- [ ] Teste de regressão adicionado
- [ ] Todos os testes passam

### Melhoria

- [ ] Impacto analisado antes de implementar
- [ ] Compatível com versões anteriores (se aplicável)
- [ ] Documentação atualizada
- [ ] Testes existentes não quebraram

### Refatoração

- [ ] Dívida técnica documentada
- [ ] Testes de segurança adicionados ANTES da refatoração
- [ ] Refatoração em passos pequenos e reversíveis
- [ ] Cada passo validado individualmente
- [ ] Cobertura de testes mantida ou melhorada
