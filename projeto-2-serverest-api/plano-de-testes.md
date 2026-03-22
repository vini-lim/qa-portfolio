# Plano de Testes — ServerRest API

---

## 1. Objetivo

Validar a API REST ServerRest através de testes manuais no Postman, identificando defeitos de funcionalidade, validação de dados e tratamento de erros. Documentar comportamentos esperados vs. obtidos em requisições HTTP.

---

## 2. Escopo

### Dentro do escopo

- Testes de endpoint `GET` (listar, buscar com filtros)
- Testes de endpoint `POST` (criar usuários)
- Testes de endpoint `PUT` (editar usuários)
- Testes de endpoint `DELETE` (remover usuários)
- Validação de Status Codes HTTP (`2xx`, `4xx`)
- Validação de Body (JSON)
- Validação de Headers (`Content-Type`)
- Assertions automatizadas no Postman

### Fora do escopo

- Testes de performance/carga
- Testes de segurança (SQL Injection, XSS, etc.)
- Testes de autenticação avançada
- Testes de produtos e carrinho
- `GET /usuarios/{_id}` — endpoint não suportado pelo ServerRest
- `404 Not Found` — status code não provocável via `/usuarios` no ServerRest

---

## 3. Recursos de Teste

- **Ferramenta:** Postman (testes manuais e assertions)
- **API:** ServerRest (`http://localhost:3000`)
- **Navegador:** Qualquer um (para acessar a documentação)
- **Dados:** Usuários cadastrados manualmente

---

## 4. Estratégia de Teste

### Técnicas aplicadas

- **Equivalence Partitioning (EP):** Testar dados válidos e inválidos
- **Positive Testing:** Fluxos felizes (`200 OK`, `201 Created`)
- **Negative Testing:** Erros esperados (`400 Bad Request`, `405 Method Not Allowed`)

> **Nota:** Boundary Value Analysis (BVA) foi previsto inicialmente, porém não foi aplicado. O ServerRest não suporta busca por ID (`GET /usuarios/{_id}`) nem retorna `404 Not Found` no recurso `/usuarios`, o que inviabilizou a execução de testes de valor limite neste contexto.

### Tipos de teste

- Testes funcionais de API
- Testes de validação de resposta
- Testes de status code
- Testes de estrutura JSON

---

## 5. Critérios de Entrada

- ServerRest rodando em `http://localhost:3000`
- Postman instalado e configurado
- Conexão com a API funcionando

---

## 6. Critérios de Saída

- 100% dos casos de teste dentro do escopo executados
- Todos os bugs documentados com evidência
- Assertions automatizadas implementadas nas requisições principais

---

## 7. Ambiente

- **URL Base:** `http://localhost:3000`
- **Recurso Testado:** `/usuarios` (CRUD de usuários)
- **Métodos:** `GET`, `POST`, `PUT`, `DELETE`
- **Formato de resposta:** JSON

---

## 8. Assunções de Requisitos

Como o ServerRest é uma API de demonstração sem SRS formal, as seguintes assunções foram adotadas com base no comportamento observado durante a execução dos testes.

### Endpoints suportados

| Endpoint | Método | Suportado |
|----------|--------|-----------|
| `/usuarios` | `GET` | ✅ Sim |
| `/usuarios` | `POST` | ✅ Sim |
| `/usuarios/{_id}` | `GET` | ❌ Não suportado pelo ServerRest |
| `/usuarios/{_id}` | `PUT` | ✅ Sim |
| `/usuarios/{_id}` | `DELETE` | ✅ Sim |
| `/usuarios/{_id}` | `PATCH` | ❌ Retorna `405 Method Not Allowed` |

### Campos obrigatórios no POST/PUT

| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| `nome` | string | ✅ Sim |
| `email` | string válido | ✅ Sim |
| `password` | string | ✅ Sim |
| `administrador` | `"true"` ou `"false"` (string) | ✅ Sim |

### Status Codes observados

| Código | Descrição | Quando ocorre |
|--------|-----------|---------------|
| `200 OK` | Sucesso genérico | `GET`, `PUT`, `DELETE` |
| `201 Created` | Recurso criado | `POST` com dados válidos |
| `400 Bad Request` | Dados inválidos | Campo obrigatório ausente ou inválido |
| `404 Not Found` | Recurso não encontrado | **Não aplicável** — não provocável via `/usuarios` no ServerRest |
| `405 Method Not Allowed` | Método não suportado | Uso de `PATCH` em `/usuarios/{_id}` |

### Idempotência observada

- `GET`, `PUT` e `DELETE` são idempotentes
- `POST` não é idempotente — cria novo recurso a cada execução
