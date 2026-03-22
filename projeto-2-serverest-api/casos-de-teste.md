# Casos de Teste — ServerRest API

> **Ambiente:** `http://localhost:3000`  
> **Técnicas utilizadas:** Equivalence Partitioning (EP), Negative Testing, Validação de Headers

---

## Resumo de Execução

| CT | Descrição | Método | Status |
|----|-----------|--------|--------|
| [CT-001](#ct-001--get---listar-todos-os-usuários) | Listar todos os usuários | GET | ✅ PASSOU |
| [CT-002](#ct-002--post---criar-usuário) | Criar usuário | POST | ✅ PASSOU |
| [CT-003](#ct-003--post---criar-usuário-sem-email-negative) | Criar usuário sem email | POST | ✅ PASSOU |
| [CT-004](#ct-004--get---listar-usuários-com-filtro) | Listar usuários com filtro | GET | ✅ PASSOU |
| [CT-005](#ct-005--put---editar-usuário) | Editar usuário | PUT | ✅ PASSOU |
| [CT-006](#ct-006--delete---deletar-usuário) | Deletar usuário | DELETE | ✅ PASSOU |
| [CT-007](#ct-007--patch---erro-405) | Método PATCH não suportado | PATCH | ✅ PASSOU |
| [CT-008](#ct-008--get---validar-headers-customizados) | Validar headers customizados | GET | ✅ PASSOU |

---

## CT-001 | GET - Listar Todos os Usuários

**Técnica:** EP (dado válido)  
**Método:** `GET`  
**Endpoint:** `/usuarios`

### Pré-condição

API ServerRest rodando em `http://localhost:3000`

### Passos

1. Enviar `GET` para `http://localhost:3000/usuarios`
2. Validar Status Code e estrutura da resposta

### Resultado Esperado

- Status Code: `200 OK`
- Body contém `quantidade` e `usuarios`
- Cada usuário tem: `_id`, `nome`, `email`, `password`, `administrador`

### Response Esperado

```json
{
  "quantidade": 1,
  "usuarios": [
    {
      "_id": "1234567890",
      "nome": "Fulano da Silva",
      "email": "fulano@example.com",
      "password": "123456",
      "administrador": true
    }
  ]
}
```

### Resultado Obtido

- Status Code: `200 OK` ✅
- Todas as propriedades presentes ✅

### Assertions

```javascript
pm.test("Status code é 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response contém 'usuarios' e 'quantidade'", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property('usuarios');
    pm.expect(jsonData).to.have.property('quantidade');
});
```

### Status: ✅ PASSOU

---

## CT-002 | POST - Criar Usuário

**Técnica:** EP (dado válido)  
**Método:** `POST`  
**Endpoint:** `/usuarios`

### Pré-condição

API ServerRest rodando em `http://localhost:3000`

### Passos

1. Enviar `POST` para `http://localhost:3000/usuarios`
2. Incluir body com dados válidos (`nome`, `email`, `password`, `administrador`)
3. Validar resposta

### Body da Requisição

```json
{
  "nome": "João Silva",
  "email": "joao@example.com",
  "password": "senha123",
  "administrador": false
}
```

### Resultado Esperado

- Status Code: `201 Created`
- Body retorna mensagem de sucesso e `_id`
- Usuário aparece em `GET /usuarios`

### Response Esperado

```json
{
  "message": "Cadastro realizado com sucesso",
  "_id": "9876543210"
}
```

### Resultado Obtido

- Status Code: `201 Created` ✅
- ID gerado e retornado ✅
- `GET /usuarios` retornou 2 usuários ✅

### Assertions

```javascript
pm.test("Status code é 201", function () {
    pm.response.to.have.status(201);
});

pm.test("Message contém sucesso", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.message).to.include("Cadastro realizado com sucesso");
});
```

### Status: ✅ PASSOU

---

## CT-003 | POST - Criar Usuário Sem Email (Negative)

**Técnica:** EP (dado inválido)  
**Método:** `POST`  
**Endpoint:** `/usuarios`

### Pré-condição

API ServerRest rodando em `http://localhost:3000`

### Passos

1. Enviar `POST` para `http://localhost:3000/usuarios`
2. Omitir o campo `email` (obrigatório)
3. Validar resposta de erro

### Body da Requisição

```json
{
  "nome": "Maria Santos",
  "password": "senha456",
  "administrador": true
}
```

### Resultado Esperado

- Status Code: `400 Bad Request`
- Mensagem de erro menciona que `email` é obrigatório
- Usuário **não** é criado

### Response Esperado

```json
{
  "email": "email é obrigatório"
}
```

### Resultado Obtido

- Status Code: `400 Bad Request` ✅
- Erro claro retornado ✅
- Usuário não foi criado ✅

### Assertions

```javascript
pm.test("Status code é 400", function () {
    pm.response.to.have.status(400);
});

pm.test("Erro menciona 'email'", function () {
    var jsonData = pm.response.json();
    pm.expect(JSON.stringify(jsonData)).to.include("email");
});
```

### Status: ✅ PASSOU

---

## CT-004 | GET - Listar Usuários com Filtro

**Técnica:** EP (dado válido) + Query Params  
**Método:** `GET`  
**Endpoint:** `/usuarios?administrador=true`

### Pré-condição

API ServerRest rodando em `http://localhost:3000` com usuários de diferentes tipos cadastrados

### Passos

1. Enviar `GET` para `http://localhost:3000/usuarios?administrador=true`
2. Validar que apenas administradores são retornados

### Resultado Esperado

- Status Code: `200 OK`
- Array contém **apenas** usuários com `administrador: true`

### Response Esperado

```json
{
  "quantidade": 1,
  "usuarios": [
    {
      "_id": "1234567890",
      "nome": "Fulano da Silva",
      "email": "fulano@example.com",
      "password": "123456",
      "administrador": true
    }
  ]
}
```

### Resultado Obtido

- Status Code: `200 OK` ✅
- Filtro funcionou corretamente ✅

### Assertions

```javascript
pm.test("Status code é 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Todos usuarios têm administrador=true", function () {
    var jsonData = pm.response.json();
    jsonData.usuarios.forEach(function(usuario) {
        pm.expect(usuario.administrador).to.be.true;
    });
});
```

### Status: ✅ PASSOU

---

## CT-005 | PUT - Editar Usuário

**Técnica:** EP (dado válido)  
**Método:** `PUT`  
**Endpoint:** `/usuarios/{_id}`

### Pré-condição

API ServerRest rodando em `http://localhost:3000` com ao menos um usuário cadastrado

### Passos

1. Enviar `PUT` para `http://localhost:3000/usuarios/{_id}`
2. Incluir body com os dados atualizados
3. Validar que as alterações foram persistidas

### Body da Requisição

```json
{
  "nome": "João Silva Atualizado",
  "email": "joao.novo@example.com",
  "password": "novasenha123",
  "administrador": true
}
```

### Resultado Esperado

- Status Code: `200 OK`
- Mensagem de sucesso retornada
- Dados persistem em `GET` subsequente

### Response Esperado

```json
{
  "message": "Registro alterado com sucesso"
}
```

### Resultado Obtido

- Status Code: `200 OK` ✅
- Usuário atualizado ✅

### Assertions

```javascript
pm.test("Status code é 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Message contém 'alterado com sucesso'", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.message).to.include("Registro alterado com sucesso");
});
```

### Status: ✅ PASSOU

---

## CT-006 | DELETE - Deletar Usuário

**Técnica:** EP (dado válido)  
**Método:** `DELETE`  
**Endpoint:** `/usuarios/{_id}`

### Pré-condição

API ServerRest rodando em `http://localhost:3000` com ao menos um usuário cadastrado

### Passos

1. Enviar `DELETE` para `http://localhost:3000/usuarios/{_id}`
2. Validar que o usuário foi removido

### Resultado Esperado

- Status Code: `200 OK`
- Usuário removido da lista

### Response Esperado

```json
{
  "message": "Registro excluído com sucesso"
}
```

### Resultado Obtido

- Status Code: `200 OK` ✅
- Usuário deletado ✅

### Assertions

```javascript
pm.test("Status code é 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Message contém 'excluído'", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.message).to.include("excluído");
});
```

### Status: ✅ PASSOU

---

## CT-007 | PATCH - Erro 405

**Técnica:** Negative Testing  
**Método:** `PATCH`  
**Endpoint:** `/usuarios/{_id}`

### Pré-condição

API ServerRest rodando em `http://localhost:3000`

### Passos

1. Enviar `PATCH` para `http://localhost:3000/usuarios/{_id}`
2. Validar que o método não é suportado

### Body da Requisição

```json
{
  "nome": "Novo Nome"
}
```

### Resultado Esperado

- Status Code: `405 Method Not Allowed`
- Método `PATCH` não é suportado pela API

### Response Esperado

```json
{
  "message": "Método não permitido"
}
```

### Resultado Obtido

- Status Code: `405 Method Not Allowed` ✅

### Assertions

```javascript
pm.test("Status code é 405", function () {
    pm.response.to.have.status(405);
});
```

### Bug Encontrado

> ⚠️ **BUG:** O método `PATCH` não é suportado pelo endpoint `/usuarios/{_id}`. Caso seja necessária a atualização parcial de um recurso, deve-se utilizar o método `PUT`.

### Status: ✅ PASSOU (Bug encontrado)

---

## CT-008 | GET - Validar Headers Customizados

**Técnica:** Validação de Headers  
**Método:** `GET`  
**Endpoint:** `/usuarios`

### Pré-condição

API ServerRest rodando em `http://localhost:3000`

### Passos

1. Enviar `GET` para `http://localhost:3000/usuarios` com headers customizados
2. Validar que a API processa normalmente e ignora headers desconhecidos

### Resultado Esperado

- Status Code: `200 OK`
- Headers customizados não interferem na resposta

### Response Esperado

```json
{
  "quantidade": 1,
  "usuarios": [...]
}
```

### Resultado Obtido

- Status Code: `200 OK` ✅
- API processou normalmente ✅

### Assertions

```javascript
pm.test("Status code é 200 mesmo com headers customizados", function () {
    pm.response.to.have.status(200);
});
```

### Status: ✅ PASSOU
