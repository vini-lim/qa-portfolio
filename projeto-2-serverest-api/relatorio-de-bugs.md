# Relatório de Bugs — ServerRest API

Este documento reúne os bugs encontrados durante os testes de API no ServerRest.

---

## BUG-001 | PATCH não é suportado (Erro 405)

**ID do Caso de Teste relacionado:** CT-007

**Severidade:** Média

**Prioridade:** Baixa

**Pré-condições:**

API ServerRest rodando em http://localhost:3000

**Base para o teste:**

Assunção de Requisito — APIs REST modernas tipicamente suportam PATCH para edições parciais.

**Passos para reprodução:**

1. Enviar requisição PATCH para http://localhost:3000/usuarios/{_id}
2. Body com dados parciais: {"email": "novo@email.com"}
3. Observar resposta

**Resultado Esperado:**

O servidor deve processar PATCH e retornar Status 200, atualizando apenas os campos enviados.

**Resultado Obtido:**

Status 405 Method Not Allowed — API não implementa suporte a PATCH.

**Observação:**

Não é um "bug" técnico, mas uma limitação da API. Para edição de dados parciais, 
usuários precisam usar PUT (que exige TODOS os campos).

**Severidade justificada:**

Média — Afeta usabilidade, mas existe workaround (usar PUT com todos os dados).

**Ambiente:**

- Navegador: Postman
- Sistema: ServerRest (http://localhost:3000)

---

## Resumo

Total de bugs encontrados: **1**

Severidade:
- Alta: 0
- Média: 1
- Baixa: 0

**Nota:** O ServerRest é uma API de demonstração, então limitações como falta de PATCH 
são aceitáveis para fins educacionais. Em produção, seria esperado suporte completo a PATCH.
