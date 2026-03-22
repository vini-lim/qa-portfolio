class LoginPage {
    // Seletores — onde cada elemento fica na página
    get campoUsuario() { return cy.get('[data-test="username"]') }
    get campoSenha() { return cy.get('[data-test="password"]') }
    get botaoLogin() { return cy.get('[data-test="login-button"]') }
    get mensagemErro() { return cy.get('[data-test="error"]') }

    // Ações — o que podemos fazer nessa página
    visitar() {
        cy.visit('/')
    }

    preencherUsuario(usuario) {
        this.campoUsuario.clear().type(usuario)
    }

    preencherSenha(senha) {
        this.campoSenha.clear().type(senha)
    }

    clicarLogin() {
        this.botaoLogin.click()
    }

    fazerLogin(usuario, senha) {
        this.preencherUsuario(usuario)
        this.preencherSenha(senha)
        this.clicarLogin()
    }
}

module.exports = new LoginPage()