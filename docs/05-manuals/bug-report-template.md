# Bug Report: [Título Descritivo]

- **ID:** BUG-[NNN]
- **Severidade:** [🔴 Crítica | 🟡 Alta | 🟠 Média | 🔵 Baixa]
- **Status:** [reportado | em análise | em correção | corrigido | verificado]
- **Reportado por:** [nome ou @github-handle]
- **Data:** YYYY-MM-DD
- **Módulo(s) afetado(s):** [ex: auth, orders, payments]
- **Branch/versão:** [ex: main @ commit a1b2c3d, ou v1.2.0]

---

## 1. Resumo

Descreva o bug em 1-2 frases. O que está acontecendo de errado?

> Exemplo: "Usuários não conseguem fazer login com email contendo caracteres especiais (ex: `+`). O endpoint retorna 500 em vez de 401."

---

## 2. Passos para Reproduzir

Lista numerada. Seja preciso — inclua dados de entrada exatos, URLs, e pré-condições.

1. Acessar `http://localhost:3000/auth/login`
2. Preencher email: `usuario+teste@email.com`
3. Preencher senha: `Senha@123`
4. Clicar em "Entrar"

---

## 3. Comportamento Esperado

O que deveria acontecer?

> Exemplo: "Login bem-sucedido. Usuário é redirecionado ao dashboard com mensagem 'Bem-vindo, usuário!'."

---

## 4. Comportamento Atual

O que realmente acontece?

> Exemplo: "Erro 500 Internal Server Error. Nenhuma mensagem visível ao usuário. O console do navegador mostra: `POST /auth/login 500`."

---

## 5. Evidências

### Logs / Stack Trace

```
[cole aqui o log de erro completo, stack trace, ou screenshot do console]
```

### Screenshots / Vídeos

[se aplicável, cole links ou imagens]

### Requisição com falha (se API)

```
POST /auth/login HTTP/1.1
Content-Type: application/json

{"email": "usuario+teste@email.com", "password": "Senha@123"}

Response:
HTTP/1.1 500 Internal Server Error
{"error": "Internal server error"}
```

---

## 6. Hipóteses

Suas suspeitas iniciais sobre a causa. Mesmo que sejam palpites, ajudam a direcionar a investigação.

1. [hipótese 1 — ex: encoding do `+` no email não está sendo tratado]
2. [hipótese 2 — ex: validação de email rejeita caracteres especiais antes de checar credenciais]

---

## 7. Contexto Adicional

### Ambiente

- **SO:** [macOS / Windows / Linux]
- **Navegador:** [Chrome 120 / Firefox 121 / etc.]
- **Node.js:** [v20.x]
- **Banco:** [PostgreSQL 15]
- **Ambiente:** [local / staging / produção]

### Impacto no Negócio

- Quantos usuários afetados?
- Há workaround? Qual?
- Bloqueia alguma entrega ou sprint?

---

## 8. Diagnóstico com IA

Use este bloco como prompt inicial para pedir ajuda da IA no diagnóstico:

> "Estou com um bug em [descrever comportamento] no módulo [nome].
>
> Log do erro:
> ```
> [stack trace / log]
> ```
>
> Passos para reproduzir:
> 1. [passo 1]
> 2. [passo 2]
>
> Código suspeito (se identificado):
> `[código]`
>
> Atue como um debugger sênior. Me ajude a:
> 1. Identificar a causa raiz
> 2. Propor até 3 hipóteses do que pode estar errado
> 3. Sugerir um teste que isole o problema (RED → GREEN)
> 4. Propor a correção menos invasiva possível"

---

## 9. Resolução

> Preencher após correção.

- **Causa raiz:** [diagnóstico final]
- **Correção:** [commit/PR que resolveu]
- **Teste de regressão:** [link para o teste que previne reincidência]
- **Data da correção:** YYYY-MM-DD
- **Verificado por:** [nome]

---

## Template para a IA (cópia rápida)

```markdown
## Bug: [título]

### Passos para reproduzir
1.
2.
3.

### Comportamento esperado

### Comportamento atual

### Logs
[stack trace ou erro]

### Hipóteses
-
```
