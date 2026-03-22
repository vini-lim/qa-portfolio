const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')
const loginPage = require('../pages/LoginPage')

Given('que estou na página de login', () => {
    loginPage.visitar()
})

When('preencho o usuário {string}', (usuario) => {
    loginPage.preencherUsuario(usuario)
})

When('preencho a senha {string}', (senha) => {
    loginPage.preencherSenha(senha)
})

When('clico no botão de login', () => {
    loginPage.clicarLogin()
})

Then('devo ser redirecionado para a página de produtos', () => {
    cy.url().should('include', '/inventory')
    cy.get('.inventory_container').should('be.visible')
})

Then('devo ver a mensagem de erro {string}', (mensagem) => {
    loginPage.mensagemErro.should('be.visible').and('contain', mensagem)
})