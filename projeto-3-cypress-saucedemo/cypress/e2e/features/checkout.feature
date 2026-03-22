Feature: Checkout no SauceDemo

    Background:
        Given que estou logado como "standard_user" com senha "secret_sauce"

    Scenario: Finalizar compra com sucesso
        Given que adicionei o primeiro produto ao carrinho
        And abri o carrinho
        When clico em checkout
        And preencho os dados "João" "Silva" "12345"
        And clico em continuar
        And clico em finalizar
        Then devo ver a mensagem "Thank you for your order!"

    Scenario: Tentar continuar o checkout sem preencher os dados
        Given que adicionei o primeiro produto ao carrinho
        And abri o carrinho
        When clico em checkout
        And clico em continuar
        Then devo ver a mensagem de erro no checkout "First Name is required"

    Scenario: Tentar continuar o checkout sem preencher o CEP
        Given que adicionei o primeiro produto ao carrinho
        And abri o carrinho
        When clico em checkout
        And preencho os dados "João" "Silva" ""
        And clico em continuar
        Then devo ver a mensagem de erro no checkout "Postal Code is required"