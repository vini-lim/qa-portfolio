Feature: Login no SauceDemo

    Background:
        Given que estou na página de login

    Scenario: Login com credenciais válidas
        When preencho o usuário "standard_user"
        And preencho a senha "secret_sauce"
        And clico no botão de login
        Then devo ser redirecionado para a página de produtos

    Scenario: Login com senha incorreta
        When preencho o usuário "standard_user"
        And preencho a senha "senha_errada"
        And clico no botão de login
        Then devo ver a mensagem de erro "Username and password do not match"

    Scenario: Login com usuário bloqueado
        When preencho o usuário "locked_out_user"
        And preencho a senha "secret_sauce"
        And clico no botão de login
        Then devo ver a mensagem de erro "Sorry, this user has been locked out"

    Scenario: Login com campos vazios
        When clico no botão de login
        Then devo ver a mensagem de erro "Username is required"