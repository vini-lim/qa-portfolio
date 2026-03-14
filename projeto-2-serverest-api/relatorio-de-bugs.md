# Relatório de Bugs — ServerRest API

Este documento reúne os bugs e limitações encontrados durante os testes de API no ServerRest.

---

## BUG-001 | PATCH não é suportado (Erro 405)

**ID do Caso de Teste relacionado:** CT-007  
**Severidade:** Média  
**Prioridade:** Baixa  

### Pré-condições

- API ServerRest rodando em `http://localhost:3000`

### Base para o teste

Assunção de Requisito — APIs REST modernas tipicamente suportam `PATCH` para edições parciais.

### Passos para Reprodução

1. Enviar requisição `PATCH` para `http://localhost:3000/usuarios/{_id}`
2. Incluir body com dados parciais: `{"email": "novo@email.com"}`
3. Observar a resposta

### Resultado Esperado

O servidor deve processar `PATCH` e retornar `200 OK`, atualizando apenas os campos enviados.

### Resultado Obtido

`405 Method Not Allowed` — a API não implementa suporte ao método `PATCH`.

### Observação

Não se trata de um bug técnico, mas de uma limitação conhecida da API. Este comportamento está documentado na **Seção 8 do Plano de Testes** (Assunções de Requisitos), onde `PATCH` em `/usuarios/{_id}` é listado como não suportado e retornando `405 Method Not Allowed`. Para edição de dados, deve-se utilizar `PUT`, que exige o envio de todos os campos obrigatórios.

### Severidade justificada

**Média** — afeta a usabilidade para quem espera suporte a atualizações parciais, mas existe workaround funcional via `PUT`.

### Prioridade justificada

**Baixa** — trata-se de uma limitação esperada de uma API de demonstração, já mapeada no plano de testes. Não há impacto em ambiente de produção real e o comportamento é contornável.

### Ambiente

- **Ferramenta:** Postman
- **Sistema:** ServerRest (`http://localhost:3000`)

---

## Resumo

| Campo | Valor |
|-------|-------|
| Total de bugs encontrados | 1 |
| Severidade Alta | 0 |
| Severidade Média | 1 |
| Severidade Baixa | 0 |

> **Nota:** O ServerRest é uma API de demonstração. Limitações como a ausência de suporte a `PATCH` são aceitáveis para fins educacionais e estão devidamente documentadas no Plano de Testes. Em um contexto de produção, o suporte completo ao método `PATCH` seria esperado como requisito padrão de uma API REST.
