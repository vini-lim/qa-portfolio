class CheckoutPage {
    get botaoCheckout() { return cy.get('[data-test="checkout"]') }
    get campoNome() { return cy.get('[data-test="firstName"]') }
    get campoSobrenome() { return cy.get('[data-test="lastName"]') }
    get campoCep() { return cy.get('[data-test="postalCode"]') }
    get botaoContinuar() { return cy.get('[data-test="continue"]') }
    get botaoFinalizar() { return cy.get('[data-test="finish"]') }
    get mensagemSucesso() { return cy.get('[data-test="complete-header"]') }
    get subMensagemSucesso() { return cy.get('[data-test="complete-text"]') }

    clicarCheckout() {
        this.botaoCheckout.click()
    }

    preencherDados(nome, sobrenome, cep) {
        if (nome) this.campoNome.type(nome)
        if (sobrenome) this.campoSobrenome.type(sobrenome)
        if (cep) this.campoCep.type(cep)
    }

    clicarContinuar() {
        this.botaoContinuar.click()
    }

    clicarFinalizar() {
        this.botaoFinalizar.click()
    }
}

module.exports = new CheckoutPage()