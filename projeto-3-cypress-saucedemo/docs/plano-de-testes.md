# Plano de Testes — Automação E2E SauceDemo

## 1. Objetivo

Automatizar e validar os fluxos críticos da aplicação SauceDemo utilizando
Cypress com BDD (Cucumber/Gherkin) e Page Object Model, garantindo que as
principais funcionalidades do sistema se comportem conforme esperado.

---

## 2. Escopo

### Dentro do escopo
- Autenticação (login válido, inválido, usuário bloqueado, campos vazios)
- Carrinho de compras (adicionar, remover, múltiplos produtos, carrinho vazio)
- Checkout (fluxo completo, campos obrigatórios, CEP vazio)
- Logout (encerramento de sessão, proteção de rota após logout)

### Fora do escopo
- Testes de performance e carga
- Testes de segurança (SQL Injection, XSS)
- Testes em dispositivos móveis
- Integração com banco de dados
- Outros endpoints além de `/inventory`, `/cart`, `/checkout`, `/logout`

---

## 3. Estratégia de Teste

### Abordagem
- **BDD (Behavior Driven Development):** cenários escritos em Gherkin
  (`Given/When/Then`) para facilitar leitura por qualquer membro do time
- **Page Object Model:** separação entre lógica de teste e seletores da UI
- **Execução automatizada:** testes rodam localmente e via CI/CD no GitHub Actions

### Técnicas aplicadas
| Técnica | Onde foi aplicada |
|---|---|
| Positive Testing | Login válido, checkout completo, logout |
| Negative Testing | Senha errada, usuário bloqueado, campos vazios |
| Equivalence Partitioning | Dados válidos vs inválidos no login e checkout |
| Boundary Value Analysis | Campos obrigatórios vazios no checkout |

### Tipos de teste
- Testes funcionais E2E (End-to-End)
- Testes de fluxo completo (happy path)
- Testes de validação de erro (negative testing)
- Testes de proteção de rota (acesso sem autenticação)

---

## 4. Ambiente de Teste

| Item | Valor |
|---|---|
| **Aplicação** | SauceDemo |
| **URL** | https://www.saucedemo.com |
| **Navegador (local)** | Google Chrome v146 |
| **Navegador (CI/CD)** | Google Chrome (ubuntu-latest) |
| **Framework** | Cypress v15.12.0 |
| **Node.js** | v18 |
| **Sistema Operacional** | Windows 11 (local) / Ubuntu (CI/CD) |

---

## 5. Pré-condições

- Aplicação SauceDemo acessível em https://www.saucedemo.com
- Node.js instalado na máquina
- Dependências do projeto instaladas (`npm install`)
- Google Chrome instalado

---

## 6. Cenários de Teste

| ID | Feature | Cenário | Tipo | Status |
|---|---|---|---|---|
| CT-001 | Login | Login com credenciais válidas | Positivo | ✅ |
| CT-002 | Login | Login com senha incorreta | Negativo | ✅ |
| CT-003 | Login | Login com usuário bloqueado | Negativo | ✅ |
| CT-004 | Login | Login com campos vazios | Negativo | ✅ |
| CT-005 | Carrinho | Adicionar produto ao carrinho | Positivo | ✅ |
| CT-006 | Carrinho | Adicionar múltiplos produtos | Positivo | ✅ |
| CT-007 | Carrinho | Remover produto do carrinho | Positivo | ✅ |
| CT-008 | Carrinho | Verificar carrinho vazio antes do checkout | Positivo | ✅ |
| CT-009 | Checkout | Finalizar compra com sucesso | Positivo | ✅ |
| CT-010 | Checkout | Continuar sem preencher os dados | Negativo | ✅ |
| CT-011 | Checkout | Continuar sem preencher o CEP | Negativo | ✅ |
| CT-012 | Logout | Realizar logout com sucesso | Positivo | ✅ |
| CT-013 | Logout | Acessar página de produtos após logout | Negativo | ✅ |

---

## 7. Critérios de Aceite

✅ **Aprovado quando:**
- Cenário executa sem erros
- Assertions passam (URL correta, elementos visíveis, mensagens corretas)
- Status code e comportamento correspondem ao esperado

❌ **Reprovado quando:**
- Assertion falha (elemento não encontrado, texto incorreto)
- Timeout excedido (elemento não aparece em 4 segundos)
- Erro inesperado de JavaScript na aplicação

---

## 8. Critérios de Entrada e Saída

### Entrada
- Código commitado na branch `main`
- Aplicação SauceDemo acessível
- Todas as dependências instaladas

### Saída
- 100% dos cenários executados
- Relatório de resultado gerado pelo GitHub Actions
- Bugs encontrados documentados em [`relatorio-de-bugs.md`](./relatorio-de-bugs.md)

---

## 9. Riscos e Mitigações

| Risco | Impacto | Mitigação |
|---|---|---|
| SauceDemo fora do ar | Alto | Monitorar disponibilidade antes de rodar |
| Seletores da UI mudarem | Alto | Page Object Model centraliza os seletores |
| Testes flaky (instáveis) | Médio | Usar `cy.get()` com assertions explícitas |
| Timeout em ambiente CI | Médio | Configurar `defaultCommandTimeout` se necessário |

---

## 10. Resultado da Execução

**Data:** 22/03/2026
**Ambiente:** GitHub Actions (ubuntu-latest) + Chrome

| Métrica | Resultado |
|---|---|
| Total de cenários | 13 |
| Passaram | 13 ✅ |
| Falharam | 0 |
| Duração total | ~17s |
| Cobertura do escopo | 100% |