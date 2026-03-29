# Projeto 2 — Testes de API | ServerRest | Postman

Este projeto faz parte do meu portfólio de QA e tem como objetivo documentar a prática de testes manuais de API REST usando Postman. Todo o trabalho foi feito de forma independente, aplicando conceitos reais de teste de API.

---

## 🎯 Objetivo

Validar uma API REST através de testes manuais no Postman, identificando defeitos de funcionalidade, validação de dados e tratamento de erros HTTP. Documentar comportamentos esperados vs. obtidos em requisições HTTP e implementar assertions automatizadas.

---

## 🌐 Sistema Testado

| Campo | Detalhe |
|-------|---------|
| Nome | ServerRest |
| URL | `http://localhost:3000` |
| Tipo | API REST para fins educacionais |
| Recurso principal | CRUD de usuários (`/usuarios`) |
| Métodos testados | `GET`, `POST`, `PUT`, `DELETE` |

---

## 🛠️ Ferramentas Utilizadas

- **Postman** — Cliente HTTP para testes de API (testes manuais e assertions)
- **ServerRest** — API REST local (rodando via Node.js)
- **JavaScript** — Para assertions automatizadas (`pm.test`)
- **GitHub** — Documentação e versionamento

---

## 📁 Estrutura do Projeto

```
projeto-2-serverest-api/
├── plano-de-testes.md      ← Escopo, estratégia, assunções
├── casos-de-teste.md       ← 8 casos de teste executados
├── relatorio-de-bugs.md    ← 1 bug documentado
├── collection.json         ← Collection Postman exportada
└── README.md               ← Este arquivo
```

---

## 📊 Resumo da Execução

| Métrica | Resultado |
|---------|-----------|
| Total de casos de teste | 8 |
| Casos que passaram | 8 |
| Casos que falharam | 0 |
| Bugs encontrados | 1 |
| Assertions criadas | 16 (2 por CT em média, distribuídas nos 8 casos de teste) |

---

## 🐞 Bugs Encontrados

### BUG-001 — PATCH não é suportado (Erro 405)

**CT relacionado:** CT-007  
**Severidade:** Média  
**Prioridade:** Baixa

A API ServerRest não implementa suporte ao método `PATCH`. Para edições parciais, é necessário usar `PUT` (que requer o envio de todos os campos obrigatórios). Este comportamento está documentado como limitação conhecida no Plano de Testes — Seção 8.

---

## 📚 Conceitos Aprendidos e Aplicados

### Métodos HTTP

- ✅ `GET` — Buscar/listar dados (sem body)
- ✅ `POST` — Criar novo recurso (com body, status `201`)
- ✅ `PUT` — Editar recurso completo (com body)
- ✅ `DELETE` — Remover recurso (sem body)
- ❌ `PATCH` — Não suportado pela API (`405 Method Not Allowed`)

### Componentes de uma Requisição

- ✅ **URL** — Endereço do endpoint
- ✅ **Método HTTP** — `GET`, `POST`, `PUT`, `DELETE`
- ✅ **Headers** — `Content-Type`, headers customizados
- ✅ **Body** — Dados JSON (`POST`, `PUT`)
- ✅ **Query Params** — Filtros na URL (`?administrador=true`)

### Validação de Respostas

- ✅ **Status Code** — `200`, `201`, `400`, `405`
- ✅ **Body JSON** — Estrutura e propriedades esperadas
- ✅ **Assertions** — Testes automatizados com `pm.test()`

### Técnicas de Teste

- ✅ **Equivalence Partitioning (EP)** — Dados válidos e inválidos
- ✅ **Positive Testing** — Fluxos felizes (`200 OK`, `201 Created`)
- ✅ **Negative Testing** — Erros esperados (`400`, `405`)

> **Nota:** Boundary Value Analysis (BVA) foi previsto inicialmente, porém não foi aplicado. O ServerRest não suporta `GET /usuarios/{_id}` nem retorna `404 Not Found` no recurso `/usuarios`, o que inviabilizou a execução de testes de valor limite neste contexto.

---

## 🚀 Como Reproduzir os Testes

### 1. Instalar dependências

```bash
npm install -g serverest
```

### 2. Iniciar a API

```bash
serverest
```

A API rodará em `http://localhost:3000`

### 3. Abrir Postman

Abra a aplicação Postman instalada.

### 4. Importar Collection

Clique em **File > Import** e selecione o arquivo `collection.json`.

### 5. Executar os testes

Clique em qualquer requisição, depois em **Send** e veja os resultados nas abas **Body** e **Test Results**.

---

## 👩‍💻 Sobre mim

Em transição para a área de QA, com foco em construir base técnica sólida em testes manuais e automação. Este projeto reflete minha dedicação em aprender e aplicar na prática o processo real de garantia de qualidade.

📎 [Ver portfólio completo](../README.md)
