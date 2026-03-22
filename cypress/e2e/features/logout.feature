Feature: Logout no SauceDemo

    Scenario: Realizar logout com sucesso
        Given que estou logado como "standard_user" com senha "secret_sauce"
        When realizo o logout
        Then devo ser redirecionado para a página de login

    Scenario: Tentar acessar página de produtos após logout
        Given que estou logado como "standard_user" com senha "secret_sauce"
        When realizo o logout
        And tento acessar diretamente a página de produtos
        Then devo ser redirecionado para a página de login