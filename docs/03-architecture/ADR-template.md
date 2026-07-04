# ADR: [Título da Decisão]

- **Status:** [proposed | accepted | deprecated | superseded]
- **Data:** YYYY-MM-DD
- **Autor:** [nome ou @github-handle]
- **Stakeholders:** [quem participou ou precisa aprovar]

---

## Contexto

Descreva o problema técnico que exige esta decisão arquitetural. Explique as forças em jogo:

- Qual a restrição ou necessidade que motiva esta decisão?
- Quais atributos de qualidade estão em jogo? (performance, segurança, manutenibilidade, escalabilidade, time-to-market)
- O que acontece se não decidirmos nada?

> Exemplo: "Precisamos escolher entre PostgreSQL e MongoDB para o módulo de pedidos. O módulo tem alto volume de escritas concorrentes e exige consistência transacional forte (inventário não pode vender o mesmo item duas vezes). Se não decidirmos, o time de backend ficará bloqueado na implementação dos repositórios."

---

## Decisão

Declare a decisão de forma inequívoca e no tempo presente ("Nós usamos X para Y").

> Exemplo: "Nós usamos PostgreSQL como banco de dados primário para o módulo de pedidos, com nível de isolamento SERIALIZABLE para operações de inventário."

---

## Consequências

### Positivas ✅

- [benefício 1 — seja específico, não genérico]
- [benefício 2]

### Negativas ⚠️

- [custo/trade-off 1]
- [custo/trade-off 2]

### Mitigações

Para cada consequência negativa, como pretendemos lidar:

| Risco/Trade-off | Mitigação |
|----------------|-----------|
| [risco] | [ação concreta] |

---

## Alternativas Consideradas

| Alternativa | Prós | Contras | Por que foi rejeitada |
|------------|------|--------|----------------------|
| [Alternativa A] | [vantagens] | [desvantagens] | [motivo da rejeição] |
| [Alternativa B] | [vantagens] | [desvantagens] | [motivo da rejeição] |

---

## Referências

- [Link para documentação relevante]
- [Link para issue ou discussão]
- [PRD ou Tech-Spec relacionada]
