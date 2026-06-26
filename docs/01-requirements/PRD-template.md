# PRD: [Nome da Feature]

## 1. Resumo Executivo

Breve descrição da funcionalidade em 2-3 frases. Para quem é, qual problema resolve.

## 2. Contexto

Por que esta feature é necessária? Qual o gatilho (dor do usuário, oportunidade de negócio, requisito regulatório)?

## 3. Objetivos e Métricas de Sucesso

| Objetivo                 | Métrica                       | Critério de Sucesso |
| ------------------------ | ----------------------------- | ------------------- |
| Ex: Aumentar engajamento | Taxa de conversão na página X | > 15% em 30 dias    |

## 4. Histórias de Usuário

### Formato

> **Como** [tipo de usuário]
> **Quero** [ação]
> **Para** [benefício]

### Critérios de Aceitação (Given/When/Then)

```
Scenario: [nome do cenário]
  Given [contexto inicial]
  When [ação do usuário]
  Then [resultado esperado]
```

### Exemplo

```
Scenario: Usuário faz login com credenciais válidas
  Given que estou na página de login
  When informo email "user@email.com" e senha "123456"
  Then sou redirecionado para o dashboard
  And vejo a mensagem "Bem-vindo, usuário!"
```

## 5. Regras de Negócio

- [RN-01]: [descrição da regra]
- [RN-02]: [descrição da regra]

## 6. Casos de Borda e Exceções

- [ ] O que acontece se o campo obrigatório estiver vazio?
- [ ] O que acontece se o serviço externo estiver fora do ar?
- [ ] O que acontece se o usuário não tiver permissão?
- [ ] Limites de tamanho/caracteres?

## 7. Dependências

- [ ] Módulo X precisa estar implementado
- [ ] API Y precisa estar disponível
- [ ] Banco de dados precisa de migração Z

## 8. Definição de Pronto (DoD)

- [ ] Código implementado seguindo FSD + Clean Architecture
- [ ] Testes unitários escritos e passando
- [ ] Testes de integração escritos e passando
- [ ] Code review realizado
- [ ] Documentação atualizada
- [ ] Critérios de aceitação validados pelo PO
