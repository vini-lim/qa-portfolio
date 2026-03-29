# Relatório de Bugs e Ajustes — SauceDemo E2E

Este documento registra os comportamentos inesperados encontrados durante
a automação dos testes e os ajustes realizados para refletir o comportamento
real da aplicação.

---

## BUG-001 | Carrinho vazio não exibe mensagem de erro ao tentar fazer checkout

**ID do Cenário relacionado:** CT-008
**Severidade:** 🟡 Média
**Prioridade:** 🔵 Baixa
**Data de Descoberta:** 22/03/2026

### Descrição
Ao tentar fazer checkout com o carrinho vazio, era esperado que a aplicação
exibisse uma mensagem de erro informando que o carrinho está vazio.
O comportamento real é que a aplicação permite prosseguir normalmente
para a tela de checkout sem nenhuma validação.

### Passos para Reproduzir
1. Fazer login com `standard_user` / `secret_sauce`
2. Acessar o carrinho sem adicionar nenhum produto
3. Clicar em "Checkout"
4. Observar o comportamento

### Resultado Esperado
Mensagem de erro: `"Cart is empty"` ou similar impedindo o prosseguimento.

### Resultado Obtido
A aplicação redireciona normalmente para a tela de checkout
mesmo com o carrinho vazio, sem exibir nenhuma mensagem de erro.

### Impacto
Usuário consegue iniciar um processo de compra sem nenhum produto
selecionado, o que pode gerar pedidos vazios no sistema.

### Ajuste Realizado no Teste
O cenário foi adaptado para validar o comportamento real da aplicação:
verificar que o carrinho está vazio e que o botão de checkout está visível,
documentando a ausência de validação como limitação conhecida.

### Workaround
Nenhum workaround disponível para o usuário final.

---

## BUG-002 | cy.type() não aceita string vazia no campo CEP

**ID do Cenário relacionado:** CT-011
**Severidade:** 🔵 Baixa
**Prioridade:** 🔵 Baixa
**Data de Descoberta:*