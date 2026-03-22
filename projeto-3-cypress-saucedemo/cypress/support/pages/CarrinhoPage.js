class CarrinhoPage {
    // .first() → pega o primeiro elemento da lista (índice 0)
    get botaoAdicionarPrimeiroProduto() {
        return cy.get('.inventory_item').first().find('[data-test^="add-to-cart"]')
    }

    // .eq(1) → pega o elemento no índice 1 (segundo da lista)
    get botaoAdicionarSegundoProduto() {
        return cy.get('.inventory_item').eq(1).find('[data-test^="add-to-cart"]')
    }

    get iconeCarrinho() { return cy.get('[data-test="shopping-cart-link"]') }
    get badgeCarrinho() { return cy.get('[data-test="shopping-cart-badge"]') }
    get itensDoCacarrinho() { return cy.get('[data-test="inventory-item"]') }
    get botaoRemover() { return cy.get('[data-test^="remove"]').first() }
    get botaoContinuar() { return cy.get('[data-test="continue-shopping"]') }
    get botaoCheckout() { return cy.get('[data-test="checkout"]') }

    adicionarPrimeiroProdutoAoCarrinho() {
        this.botaoAdicionarPrimeiroProduto.click()
    }

    adicionarSegundoProdutoAoCarrinho() {
        this.botaoAdicionarSegundoProduto.click()
    }

    abrirCarrinho() {
        this.iconeCarrinho.click()
    }

    removerPrimeiroProduto() {
        this.botaoRemover.click()
    }
}

module.exports = new CarrinhoPage()