const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')
const loginPage = require('../pages/LoginPage')
const carrinhoPage = require('../pages/CarrinhoPage')
const checkoutPage = require('../pages/CheckoutPage')

Given('que estou logado como {string} com senha {string}', (usuario, senha) => {
    loginPage.visitar()
    loginPage.fazerLogin(usuario, senha)
})

When('adiciono o primeiro produto ao carrinho', () => {
    carrinhoPage.adicionarPrimeiroProdutoAoCarrinho()
})

When('adiciono o segundo produto ao carrinho', () => {
    carrinhoPage.adicionarSegundoProdutoAoCarrinho()
})

When('abro o carrinho', () => {
    carrinhoPage.abrirCarrinho()
})

When('removo o produto do carrinho', () => {
    carrinhoPage.removerPrimeiroProduto()
})

When('clico em checkout', () => {
    checkoutPage.clicarCheckout()
})

Then('o badge do carrinho deve exibir {string}', (numero) => {
    carrinhoPage.badgeCarrinho.should('have.text', numero)
})

Then('o carrinho deve estar vazio', () => {
    carrinhoPage.itensDoCacarrinho.should('not.exist')
})

Then('devo ver a mensagem de erro no carrinho {string}', (mensagem) => {
    cy.contains(mensagem).should('be.visible')
})

Then('o botao de checkout deve estar visivel', () => {
    carrinhoPage.botaoCheckout.should('be.visible')
})