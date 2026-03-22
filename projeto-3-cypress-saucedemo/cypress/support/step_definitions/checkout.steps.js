const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')
const carrinhoPage = require('../pages/CarrinhoPage')
const checkoutPage = require('../pages/CheckoutPage')

Given('que adicionei o primeiro produto ao carrinho', () => {
    carrinhoPage.adicionarPrimeiroProdutoAoCarrinho()
})

Given('abri o carrinho', () => {
    carrinhoPage.abrirCarrinho()
})

When('preencho os dados {string} {string} {string}', (nome, sobrenome, cep) => {
    checkoutPage.preencherDados(nome, sobrenome, cep)
})

When('clico em continuar', () => {
    checkoutPage.clicarContinuar()
})

When('clico em finalizar', () => {
    checkoutPage.clicarFinalizar()
})

Then('devo ver a mensagem {string}', (mensagem) => {
    checkoutPage.mensagemSucesso.should('be.visible').and('contain', mensagem)
})

Then('devo ver a mensagem de erro no checkout {string}', (mensagem) => {
    cy.get('[data-test="error"]').should('be.visible').and('contain', mensagem)
})