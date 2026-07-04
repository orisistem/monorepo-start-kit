# Pull Request Template

> Preencha as seções abaixo. Seções marcadas como `(opcional)` podem ser removidas se não se aplicarem.

---

## O que foi feito

<!-- Descreva a mudança em 2-4 frases. O que? Onde? -->

## Por que

<!-- Qual o problema que esta mudança resolve? Qual o contexto? -->

## Artefatos Relacionados

<!-- Link para PRD, tech-spec, ADRs, issues -->

| Artefato | Link |
|----------|------|
| Issue | Closes # |
| PRD | |
| Tech-Spec | |
| ADR | |

---

## Checklist do Autor

### Código
- [ ] Segue a Regra de Dependência (domain não importa de infra/presentation)
- [ ] Módulos isolados (um módulo não importa infra de outro)
- [ ] Sem `any` — tipos explícitos
- [ ] Sem `try/catch` vazio
- [ ] Sem magic numbers — constantes nomeadas
- [ ] Sem código comentado
- [ ] Nomenclatura: kebab-case para arquivos/pastas
- [ ] Idioma: backend inglês; frontend código inglês + UI pt-BR

### Testes
- [ ] Testes unitários para novo código (use cases, entities, mappers)
- [ ] Testes de integração para repositórios e endpoints
- [ ] Testes E2E para fluxos críticos (se aplicável)
- [ ] Todos os testes passam localmente
- [ ] Cobertura de testes não diminuiu

### Qualidade
- [ ] Lint passa (`npm run lint`)
- [ ] Formatação OK (Prettier aplicado)
- [ ] Commits seguem Conventional Commits
- [ ] Nenhum segredo ou credencial exposto

### Documentação
- [ ] `CODEBASE.md` atualizado (se novos módulos/entry points)
- [ ] `MEMORY.md` será atualizado após merge
- [ ] README ou docs relevantes atualizados

---

## Evidência de Testes

<!-- Cole o output dos testes ou screenshot -->

```
[resultado dos testes]
```

---

## Screenshots / Demostração (opcional)

<!-- Para mudanças visuais no frontend, cole screenshots ou um GIF -->

---

## Notas para o Revisor (opcional)

<!-- Algo específico para o revisor prestar atenção? Alguma decisão que precisa de validação extra? -->

---

## Checklist do Revisor

- [ ] Regra de Dependência respeitada
- [ ] Nenhum `any`, `try/catch` vazio, magic number
- [ ] Testes cobrem o novo código e estão na camada correta
- [ ] Nenhum segredo ou credencial exposto
- [ ] Política de idiomas respeitada
- [ ] CODEBASE.md atualizado (se aplicável)
- [ ] Nenhum comentário `blocking:` em aberto
