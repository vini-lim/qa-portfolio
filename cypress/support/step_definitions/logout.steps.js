const { When, Then } = require('@badeball/cypress-cucumber-preprocessor')
const navPage = require('../pages/NavPage')

When('realizo o logout', () => {
    navPage.fazerLogout()
})

When('tento acessar diretamente a página de produtos', () => {
    cy.visit('/inventory.html', { failOnStatusCode: false })
})

Then('devo ser redirecionado para a página de login', () => {
    cy.url().should('eq', 'https://www.saucedemo.com/')
    cy.get('[data-test="login-button"]').should('be.visible')
})
