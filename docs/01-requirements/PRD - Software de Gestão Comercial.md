---
autor: Anderson Oliveira
data: 29-07-2026
tags:
  - software-house
  - prd
  - gestao-burocratica
  - requisitos
---

# Product Requirements Document (PRD)
**Produto:** Sistema de Gestão Burocrática e Comercial (Back-office)
**Segmentos Alvo:** Software Houses e Escritórios de Projetos/Consultoria em Engenharia Civil.

---

## 1. Visão Geral do Produto
O sistema é uma plataforma web B2B projetada para gerenciar o ciclo de vida comercial e burocrático de projetos de software e engenharia. Seu foco é a estruturação comercial: desde a captação do cliente (CRM), passando pela elaboração de orçamentos e propostas, até a emissão e assinatura de contratos. O sistema fará o "handoff" (repasse) dos projetos aprovados para plataformas de execução técnica (como o OriPlan) e manterá o acompanhamento financeiro/contratual ao longo do tempo.

## 2. Objetivos (Metas de Negócio)
- **Padronização:** Unificar 100% do fluxo de emissão de propostas e contratos, reduzindo o tempo de elaboração em pelo menos 50%.
- **Segurança Jurídica:** Garantir que todos os projetos executados tenham um contrato digitalmente assinado e arquivado, com suas devidas revisões (versionamento).
- **Integração:** Acabar com o retrabalho de cadastro, enviando os dados consolidados do escopo diretamente para o software de operação (OriPlan) assim que o contrato for assinado.
- **Proteção de Margem:** Manter o detalhamento de custos e formação de preços (Orçamento) ocultos do cliente, separando-os da visão de valor (Proposta Comercial).

## 3. Público-Alvo e Personas
- **Diretores/Sócios:** Precisam de relatórios de pipeline de vendas, previsibilidade financeira e controle de margem de lucro.
- **Gerentes Comerciais/Vendedores:** Precisam de agilidade para montar propostas complexas usando templates pré-aprovados e enviar para os clientes.
- **Equipe Administrativa/Financeira:** Lida com a emissão de boletos, gestão de aditivos contratuais, coleta de assinaturas e organização de documentos fiscais/legais.

## 4. Escopo

### ✅ Dentro do Escopo (In Scope)
- Gestão de Clientes e Contatos (CRM básico).
- Motor de Criação de Propostas (com versionamento e envio por email).
- Motor de Formação de Preço (Orçamento Interno por horas/disciplinas).
- Gestão de Contratos e integração com APIs de Assinatura Digital.
- Gestão Documental associada a clientes e projetos.
- API de Integração para "Handoff" (Envio de dados para o OriPlan).

### ❌ Fora de Escopo (Out of Scope)
- Gestão de Tarefas, Kanban, Sprints ou Apontamento de Horas diário (será feito no OriPlan).
- Gestão de Canteiro de Obras ou emissão de RDO (Relatório Diário de Obra).
- Modelagem BIM ou repositório de código fonte (GitHub/GitLab).

## 5. Requisitos Funcionais (Funcionalidades)

### Módulo de Clientes (CRM)
- **[RF-01]** O sistema deve permitir o cadastro de Clientes (PF e PJ) com informações fiscais e múltiplos contatos.
- **[RF-02]** O sistema deve manter um histórico cronológico de interações, propostas enviadas e contratos assinados por cliente.

### Módulo de Orçamentos e Propostas
- **[RF-03]** O sistema deve permitir criar Orçamentos Internos com base em: Horas/Homem, Custos de Licenças, Taxas e Custos de Deslocamento.
- **[RF-04]** O sistema deve gerar Propostas Comerciais a partir do Orçamento, aplicando a margem de lucro sem exibir o detalhamento de custo para o cliente.
- **[RF-05]** O sistema deve ter templates de propostas distintos para **Software** e **Engenharia Civil**.
- **[RF-06]** O sistema deve permitir o versionamento de propostas (ex: v1, v2) caso o cliente solicite alterações no escopo antes do fechamento.

### Módulo de Contratos e Burocracia
- **[RF-07]** O sistema deve gerar Contratos automaticamente baseados nos dados da Proposta Aprovada, preenchendo as variáveis de um template (Modelo de Contrato).
- **[RF-08]** O sistema deve integrar com uma ferramenta de e-Signature (ex: DocuSign, Clicksign) para disparar o contrato e coletar assinaturas legalmente válidas.
- **[RF-09]** O sistema deve alertar os administradores sobre contratos próximos ao vencimento ou com prazos de reajuste financeiro atingidos (ex: reajuste anual pelo IPCA).

### Módulo de Handoff (Integração)
- **[RF-10]** Ao alterar o status de um contrato para "Assinado", o sistema deve disparar um webhook/API (Handoff) contendo o Escopo, Prazos e Responsáveis para o **OriPlan**.

## 6. Requisitos Não-Funcionais
- **[RNF-01] Segurança e Permissões:** O sistema deve ter RBAC (Role-Based Access Control). Vendedores não podem alterar templates de contratos; Técnicos não podem ver o orçamento interno (custos).
- **[RNF-02] Auditoria:** Toda alteração de status em propostas e contratos deve ser logada (Quem alterou, quando alterou).
- **[RNF-03] Armazenamento:** Os documentos em PDF gerados e assinados devem ser salvos em um cloud storage seguro (AWS S3/Azure Blob).
- **[RNF-04] Desempenho:** A geração de PDFs de propostas com múltiplas páginas deve ocorrer em menos de 5 segundos.

## 7. Regras de Negócio
- **[RN-01] Separação Comercial vs Operação:** Nenhuma Proposta pode ser enviada ao cliente sem estar vinculada a um Orçamento Interno prévio.
- **[RN-02] Bloqueio de Edição:** Uma vez que o contrato foi enviado para assinatura digital, a Proposta vinculada e o Contrato não podem mais ser editados. Caso necessário, a assinatura deve ser cancelada, gerando uma nova versão documental.
- **[RN-03] Gatilho de Handoff:** O projeto só nasce no mundo operacional (OriPlan) mediante a assinatura validada do contrato.

## 8. MVP (Minimum Viable Product)
Para a fase 1, focaremos em:
1. Cadastro de Clientes e Contatos.
2. Criação manual de Orçamentos e geração de Propostas em PDF.
3. Upload manual do contrato assinado (Deixando a integração nativa com DocuSign/Clicksign para a Fase 2).
4. Integração de Webhook simples para avisar o OriPlan sobre a venda "Ganha".
