# Casos de Teste — ServerRest API

## CT-001 | GET - Listar Todos os Usuários 🔴

**Técnica:** EP (dado válido)
**Pré-condição:** API ServerRest rodando em http://localhost:3000

**Passos:**
1. Enviar requisição GET para http://localhost:3000/usuarios
2. Observar o Status Code
3. Observar a estrutura do Body JSON

**Resultado Esperado:**
- Status Code: 200 OK
- Body contém objeto JSON com chaves: "quantidade" e "usuarios"
- Array "usuarios" contém pelo menos 1 usuário
- Cada usuário tem: nome, email, password, administrador, _id

**Resultado Obtido:**
- Status Code: 200 OK
- Body retornou JSON com "quantidade": 1 e array "usuarios"
- Usuário padrão "Fulano da Silva" presente com _id correto
- Assertions passaram: Status 200, propriedade "usuarios" existe, propriedade "quantidade" existe

**Status:** Passou

---

## CT-002 | POST - Criar Usuário com Dados Válidos 🔴

**Técnica:** EP (dado válido)
**Pré-condição:** API ServerRest rodando

**Passos:**
1. Enviar requisição POST para http://localhost:3000/usuarios
2. Body com dados válidos: nome, email, password, administrador
3. Observar Status Code e resposta

**Resultado Esperado:**
- Status Code: 201 Created
- Body retorna mensagem de sucesso e _id do usuário criado
- Usuário é adicionado à lista de usuários

**Resultado Obtido:**
- Status Code: 201 Created
- Body retornou mensagem "Cadastro realizado com sucesso"
- GET /usuarios subsequente retornou 2 usuários

**Status:** Passou

---

## CT-003 | POST - Criar Usuário Sem Email 🔴

**Técnica:** EP (dado inválido)
**Pré-condição:** API ServerRest rodando

**Passos:**
1. Enviar POST para http://localhost:3000/usuarios
2. Body sem o campo email (obrigatório)
3. Observar Status Code e erro

**Resultado Esperado:**
- Status Code: 400 Bad Request
- Body retorna erro indicando que email é obrigatório
- Usuário NÃO é criado

**Resultado Obtido:**
- Status Code: 400 Bad Request
- Mensagem de erro retornou
- GET /usuarios confirmou que usuário não foi criado

**Status:** Passou

---

## CT-004 | GET - Listar Usuários com Filtro 🔴

**Técnica:** EP (dado válido) com Query Params
**Pré-condição:** API rodando, usuários existem

**Passos:**
1. Enviar GET para http://localhost:3000/usuarios?administrador=true
2. Observar resposta

**Resultado Esperado:**
- Status Code: 200 OK
- Array retorna apenas usuários com administrador=true

**Resultado Obtido:**
- Status Code: 200 OK
- Apenas usuários administradores foram retornados
- Filtro funcionou corretamente

**Status:** Passou

---

## CT-005 | PUT - Editar Usuário Completo 🔴

**Técnica:** EP (dado válido)
**Pré-condição:** API rodando, usuário criado

**Passos:**
1. Enviar PUT para http://localhost:3000/usuarios/{_id}
2. Body com dados editados
3. Observar resposta

**Resultado Esperado:**
- Status Code: 200 OK
- Usuário é atualizado com novos dados

**Resultado Obtido:**
- Status Code: 200 OK
- Usuário foi atualizado conforme solicitado

**Status:** Passou

---

## CT-006 | DELETE - Deletar Usuário 🔴

**Técnica:** EP (dado válido)
**Pré-condição:** API rodando, usuário existe

**Passos:**
1. Enviar DELETE para http://localhost:3000/usuarios/{_id}
2. Fazer GET /usuarios para confirmar

**Resultado Esperado:**
- Status Code: 200 OK
- Usuário é removido da lista

**Resultado Obtido:**
- Status Code: 200 OK
- Usuário foi deletado com sucesso

**Status:** Passou

---

## CT-007 | POST - Erro 405 (PATCH Não Suportado) 🔴

**Técnica:** EP (dado inválido)
**Pré-condição:** API rodando

**Passos:**
1. Tentar PATCH para http://localhost:3000/usuarios/{_id}

**Resultado Esperado:**
- Status Code: 405 Method Not Allowed

**Resultado Obtido:**
- Status Code: 405 Method Not Allowed

**Status:** Passou

---

## CT-008 | Headers Customizados 🔴

**Técnica:** EP (validação de headers)
**Pré-condição:** API rodando

**Passos:**
1. Enviar GET com Header customizado: X-Custom-Header: Teste QA

**Resultado Esperado:**
- Status Code: 200 OK
- API processa mesmo com headers customizados

**Resultado Obtido:**
- Status Code: 200 OK
- Requisição processada normalmente

**Status:** Passou
