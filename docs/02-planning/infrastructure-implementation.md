# Plano de Implementação — Infraestrutura

> **Template genérico.** Substitua `[cloud-provider]`, `[domain]` pelos valores do projeto e preencha as tarefas conforme necessário.

---

## Stack

| Camada     | Tecnologia                          |
| ---------- | ----------------------------------- |
| Container  | Docker + Docker Compose             |
| Proxy      | Nginx (Alpine)                      |
| Banco      | PostgreSQL 15 Alpine                |
| Cache      | `[cache: Redis / Memcached / none]` |
| Storage    | `[storage: MinIO / S3 / local]`     |
| Cloud      | `[cloud: AWS / GCP / Azure]`        |
| IaC        | Terraform                           |
| Config     | Ansible / env vars                  |
| CI/CD      | GitHub Actions                      |
| Monitoring | Prometheus + Grafana                |

---

## Áreas

### Área 1 — Docker e Ambiente Local

| #    | Tarefa                                           | Depende    | Status |
| ---- | ------------------------------------------------ | ---------- | ------ |
| I-01 | Dockerfile backend (multi-stage, produção + dev) | —          | ⬜     |
| I-02 | Dockerfile frontend (multi-stage com Nginx)      | —          | ⬜     |
| I-03 | Dockerfile mobile (build apenas, se aplicável)   | —          | ⬜     |
| I-04 | Docker Compose (backend, frontend, banco, proxy) | I-01, I-02 | ⬜     |
| I-05 | Docker Compose override para dev (hot-reload)    | I-04       | ⬜     |
| I-06 | Scripts de entrada (entrypoint.sh com envsubst)  | I-04       | ⬜     |
| I-07 | Makefile / task runner para comandos comuns      | I-04       | ⬜     |

### Área 2 — Proxy e Rede (Nginx)

| #    | Tarefa                                    | Depende | Status |
| ---- | ----------------------------------------- | ------- | ------ |
| I-08 | Configurar Nginx como reverse proxy       | I-04    | ⬜     |
| I-09 | Roteamento por subdomínio / path          | I-08    | ⬜     |
| I-10 | SSL/TLS (Let's Encrypt / self-signed dev) | I-09    | ⬜     |
| I-11 | Rate limiting + segurança (headers, CORS) | I-09    | ⬜     |
| I-12 | Health checks e readiness probes          | I-09    | ⬜     |

### Área 3 — Banco de Dados

| #    | Tarefa                                              | Depende | Status |
| ---- | --------------------------------------------------- | ------- | ------ |
| I-13 | Docker Compose PostgreSQL + volume persistente      | I-04    | ⬜     |
| I-14 | Script de init SQL (usuários, databases, extensões) | I-13    | ⬜     |
| I-15 | Backup automático (pg_dump cron)                    | I-14    | ⬜     |
| I-16 | RLS (Row-Level Security) se multi-tenant            | I-14    | ⬜     |
| I-17 | Migrations via ORM ([ORM])                          | —       | ⬜     |

### Área 4 — CI/CD (GitHub Actions)

| #    | Tarefa                                            | Depende | Status |
| ---- | ------------------------------------------------- | ------- | ------ |
| I-18 | Pipeline CI: lint → typecheck → test              | —       | ⬜     |
| I-19 | Pipeline CD: build → push → deploy (dev)          | I-18    | ⬜     |
| I-20 | Pipeline de release: tag → staging → produção     | I-19    | ⬜     |
| I-21 | Cache de dependências (npm, Docker layers)        | I-18    | ⬜     |
| I-22 | Segredos e variáveis de ambiente (GitHub Secrets) | I-20    | ⬜     |

### Área 5 — Cloud (Terraform)

| #    | Tarefa                                              | Depende | Status |
| ---- | --------------------------------------------------- | ------- | ------ |
| I-23 | Setup Terraform (backend S3, state locking)         | —       | ⬜     |
| I-24 | Módulo VPC + subnets + security groups              | I-23    | ⬜     |
| I-25 | Módulo ECS / EKS / Compute                          | I-24    | ⬜     |
| I-26 | Módulo RDS (PostgreSQL)                             | I-24    | ⬜     |
| I-27 | Módulo S3 (assets, backups)                         | I-24    | ⬜     |
| I-28 | Módulo CloudFront / CDN                             | I-27    | ⬜     |
| I-29 | Módulo DNS (Route53)                                | I-28    | ⬜     |
| I-30 | Outputs + variáveis por ambiente (dev/staging/prod) | I-29    | ⬜     |

### Área 6 — Monitoramento (Prometheus + Grafana)

| #    | Tarefa                                      | Depende | Status |
| ---- | ------------------------------------------- | ------- | ------ |
| I-31 | Exporters: node_exporter, postgres_exporter | I-04    | ⬜     |
| I-32 | Prometheus config + targets                 | I-31    | ⬜     |
| I-33 | Grafana dashboards (sistema, banco, app)    | I-32    | ⬜     |
| I-34 | Alertas (CPU, memória, disco, 5xx)          | I-33    | ⬜     |
| I-35 | Log aggregation (Loki / ELK) — opcional     | I-32    | ⬜     |
| I-36 | Uptime monitoring (health check endpoint)   | I-12    | ⬜     |

### Área 7 — Configuração e Automação (Ansible)

| #    | Tarefa                                           | Depende | Status |
| ---- | ------------------------------------------------ | ------- | ------ |
| I-37 | Playbook de provisionamento do servidor          | —       | ⬜     |
| I-38 | Instalação de dependências (Docker, Node, Nginx) | I-37    | ⬜     |
| I-39 | Deploy automatizado (pull + restart)             | I-38    | ⬜     |
| I-40 | Rollback strategy                                | I-39    | ⬜     |
| I-41 | Configuração de firewall + fail2ban              | I-38    | ⬜     |
| I-42 | Hardening (SSH, Docker security)                 | I-41    | ⬜     |

---

> Instruções: copie este arquivo, renomeie para `infrastructure-implementation.md` (substituindo o template) e marque o status de cada tarefa ao longo da implementação. Remova áreas não aplicáveis ao projeto.
