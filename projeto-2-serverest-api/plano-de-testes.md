# Plano de Testes — ServerRest API

## 1. Objetivo

Validar a API REST ServerRest através de testes manuais no Postman,
identificando defeitos de funcionalidade, validação de dados e
tratamento de erros. Documentar comportamentos esperados vs. obtidos
em requisições HTTP.

## 2. Escopo

### Dentro do escopo:

- Testes de endpoint GET (listar, buscar com filtros)
- Testes de endpoint POST (criar usuários)
- Testes de endpoint PUT (editar usuários)
- Testes de endpoint DELETE (remover usuários)
- Validação de Status Codes HTTP (2xx, 4xx, 5xx)
- Validação de Body (JSON)
- Validação de Headers (Content-Type)
- Assertions automatizadas no Postman

### Fora do escopo:

- Testes de performance/carga
- Testes de segurança (SQL Injection, XSS, etc)
- Testes de autenticação avançada
- Testes de produtos e carrinho

## 3. Recursos de Teste

- **Ferramenta:** Postman (testes manuais e assertions)
- **API:** ServerRest (http://localhost:3000)
- **Navegador:** Qualquer um (para acessar a documentação)
- **Dados:** Usuários cadastrados manualmente

## 4. Estratégia de Teste

### Técnicas aplicadas:

- **Equivalence Partitioning (EP):** Testar dados válidos e inválidos
- **Boundary Value Analysis (BVA):** Testar valores limites
- **Positive Testing:** Fluxos felizes (201, 200 OK)
- **Negative Testing:** Erros esperados (400, 404, 405)

### Tipos de teste:

- Testes funcionais de API
- Testes de validação de resposta
- Testes de status code
- Testes de estrutura JSON

## 5. Critérios de Entrada

- ServerRest rodando em http://localhost:3000
- Postman instalado e configurado
- Conexão com a API funcionando

## 6. Critérios de Saída

- 100% dos casos de teste executados
- Todos os bugs documentados com evidência
- Assertions automatizadas implementadas nas requisições principais

## 7. Ambiente

- **URL Base:** http://localhost:3000
- **Recurso Testado:** /usuarios (CRUD de usuários)
- **Métodos:** GET, POST, PUT, DELETE
- **Formato de resposta:** JSON

## 8. Assunções de Requisitos

Como o ServerRest é uma API de demonstração sem SRS formal,
as seguintes assunções foram adotadas:

**Endpoints esperados:**
- GET /usuarios — Listar todos os usuários
- POST /usuarios — Criar novo usuário
- GET /usuarios/{_id} — Buscar usuário por ID
- PUT /usuarios/{_id} — Editar usuário completo
- DELETE /usuarios/{_id} — Deletar usuário

**Campos obrigatórios no POST/PUT:**
- nome (string)
- email (string válido)
- password (string)
- administrador (booleano: "true" ou "false" como string)

**Status Code esperados:**
- 200 OK — Sucesso genérico (GET, PUT, DELETE)
- 201 Created — Usuário criado (POST)
- 400 Bad Request — Dados inválidos
- 404 Not Found — Recurso não encontrado
- 405 Method Not Allowed — Método não suportado

**Idempotência esperada:**
- GET, PUT, DELETE são idempotentes
- POST não é idempotente (cria novo recurso a cada execução)
