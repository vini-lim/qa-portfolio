class NavPage {
    get botaoMenu() { return cy.get('#react-burger-menu-btn') }
    get botaoLogout() { return cy.get('[data-test="logout-sidebar-link"]') }

    abrirMenu() {
        this.botaoMenu.click()
    }

    fazerLogout() {
        this.abrirMenu()
        this.botaoLogout.click()
    }
}

module.exports = new NavPage()
