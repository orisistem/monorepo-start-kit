# Business Discovery

Como usar IA para entender o negócio, mapear domínios e definir a linguagem ubíqua antes de escrever qualquer código.

## Contexto

Antes de modelar entidades, escrever casos de uso ou definir rotas, é preciso entender o **negócio** para o qual você foi contratado. Esta etapa responde:

- Qual o **core domain** (o diferencial competitivo do negócio)?
- Quais os **subdomínios de suporte e genéricos**?
- Qual a **linguagem ubíqua** (termos que todos no time usam)?
- Quais os **bounded contexts** e como se relacionam?

## Etapas

```
Você (desenvolvedor) chega no projeto
     │
     ▼
Domain Discovery com IA ──────────────────┐
     │                                      │
     ▼                                      ▼
Linguagem Ubíqua                   Descoberta de
     │                              Subdomínios
     ▼                                      │
Bounded Contexts                           │
     │                                      │
     ▼                                      ▼
Modelagem Tática                   Definição de
     │                              Requisitos
     ▼
Pronto para Concepção (04-fluxo-concepcao)
```

## Como Usar IA no Business Discovery

### 1. Domain Discovery Prompt

Use este prompt quando for alocado a um novo projeto ou domínio:

> "Sou um desenvolvedor novo neste projeto. Preciso entender o negócio.
>
> Contexto que tenho: [descrição resumida do que você sabe]
>
> Me ajude a mapear:
>
> 1. **Core Domain**: qual a principal proposta de valor? O que este negócio faz de único?
> 2. **Subdomínios de Suporte**: o que é necessário para o core funcionar, mas não é diferencial competitivo?
> 3. **Subdomínios Genéricos**: o que poderia ser comprado ou usado pronto (autenticação, pagamento, notificação)?
>
> Para cada domínio, sugira um nome de bounded context e explique por que faz sentido separá-lo."

### 2. Linguagem Ubíqua

Extraia e valide a terminologia do negócio com a IA:

> "Com base no [domínio/contexto], identifique os termos-chave do negócio e suas definições.
>
> Para cada termo, inclua:
>
> - **Nome**: o termo em si
> - **Definição**: o que significa no contexto do negócio
> - **Sinônimos**: outros nomes usados (evitar ambiguidades)
> - **Bounded Context**: onde este termo vive
> - **Atributos**: propriedades essenciais
> - **Comportamentos**: o que este termo faz ou o que é feito com ele
>
> Formato de saída:
>
> ```yaml
> - termo: NomeDoTermo
>   definicao: '...'
>   sinonimos: [outro nome]
>   bounded_context: NomeDoContexto
>   atributos: [prop1, prop2]
>   comportamentos: [acao1, acao2]
> ```

### 3. Event Storming Simplificado

> "Vamos fazer um Event Storming para o processo de [nome do processo].
>
> Liste:
>
> 1. **Eventos de Domínio** (⊙ laranja): coisas que acontecem no negócio (ex: 'PedidoConfirmado', 'PagamentoRecebido')
> 2. **Comandos** (▭ azul): ações que disparam eventos (ex: 'ConfirmarPedido', 'ProcessarPagamento')
> 3. **Atores** (🟡 amarelo): pessoas ou sistemas que executam comandos
> 4. **Políticas** (▭ roxo): regras que reagem a eventos para disparar novos comandos
> 5. **Agregados** (▭ rosa): entidades raiz que garantem consistência
>
> Organize em ordem cronológica e identifique bounded contexts quando o fluxo mudar de contexto."

### 4. Descoberta de Subdomínios

> "Analise este [processo/descrição] e classifique cada parte como:
>
> - **Core** 🟢: vantagem competitiva, faça você mesmo
> - **Suporte** 🟡: necessário mas não diferencial, faça ou compre
> - **Genérico** 🔵: commodity, compre ou use open source
>
> Justifique cada classificação."

### 5. Bounded Context Mapping

> "Com base nos domínios identificados, desenhe o mapa de contexts:
>
> - Quais bounded contexts existem?
> - Qual a relação entre eles (Upstream/Downstream)?
> - Quais padrões de integração se aplicam?
>   - **Open-Host Service**: quando um contexto serve vários outros
>   - **Anti-Corruption Layer**: quando um contexto precisa se proteger de outro
>   - **Shared Kernel**: quando contexts compartilham um subconjunto comum
>   - **Customer/Supplier**: relação de dependência com contratos
>
> Formato de saída:
>
> ````
> [Contexto A] ──(OHS)──> [Contexto B]
> [Contexto B] ──(ACL)──> [Contexto C]
> [Contexto C] ──(CS)───> [Contexto A]
> ```"
> ````

### 6. Do Domínio ao Código (Tatical Modeling)

Após entender o domínio, modele com IA:

> "Para o bounded context [nome], modele os agregados:
>
> **Agregado**: [Nome]
>
> - **Raiz**: [entidade raiz]
> - **Entidades internas**: [entidades que só existem dentro deste agregado]
> - **Value Objects**: [objetos de valor imutáveis]
> - **Invariantes**: [regras que devem ser sempre verdade]
>
> Gere o código inicial para `domain/entities/` seguindo a estrutura FSD do projeto."

## Exemplo Prático: E-commerce

### Contexto Inicial

> "Sou um desenvolvedor novo em um projeto de e-commerce. A empresa vende produtos físicos online. Preciso entender o negócio para começar a modelar."

### Prompt para IA

> **Domain Discovery:**
>
> "Mapeie os domínios de um e-commerce que vende produtos físicos. Considere: catálogo de produtos, carrinho, pedidos, pagamento, logística, notificações, autenticação de clientes.
>
> Classifique cada um como core, suporte ou genérico."

**Saída esperada da IA:**

```
Domínios:
- Catálogo 🟡 Suporte (necessário, mas não diferencial em e-commerce commodity)
- Carrinho 🟢 Core (experiência de compra é diferencial)
- Pedidos 🟢 Core (gestão de pedidos é central)
- Pagamento 🔵 Genérico (use gateway como Stripe)
- Logística 🟡 Suporte (integração com transportadoras)
- Notificações 🔵 Genérico (email/SMS pronto)
- Autenticação 🔵 Genérico (use Auth0/Clerk)
```

> **Linguagem Ubíqua:**
>
> "Com base nisso, extraia a linguagem ubíqua do contexto de Pedidos."

> **Event Storming:**
>
> "Faça Event Storming para o processo 'Fechar um Pedido', desde o carrinho até a confirmação."

## Checklist de Business Discovery

- [ ] Core domain identificado e documentado
- [ ] Subdomínios de suporte e genéricos mapeados
- [ ] Linguagem ubíqua extraída com IA
- [ ] Bounded contexts definidos
- [ ] Relações entre contexts documentadas
- [ ] Event Storming do fluxo principal realizado
- [ ] Terminologia validada com stakeholders (se possível)
- [ ] Pronto para gerar requisitos em `04-fluxo-concepcao`
