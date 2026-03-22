Feature: Carrinho de compras no SauceDemo

    Background:
        Given que estou logado como "standard_user" com senha "secret_sauce"

    Scenario: Adicionar produto ao carrinho
        When adiciono o primeiro produto ao carrinho
        Then o badge do carrinho deve exibir "1"

    Scenario: Adicionar múltiplos produtos ao carrinho
        When adiciono o primeiro produto ao carrinho
        And adiciono o segundo produto ao carrinho
        Then o badge do carrinho deve exibir "2"

    Scenario: Remover produto do carrinho
        When adiciono o primeiro produto ao carrinho
        And abro o carrinho
        And removo o produto do carrinho
        Then o carrinho deve estar vazio

    Scenario: Verificar carrinho vazio antes do checkout
        When abro o carrinho
        Then o carrinho deve estar vazio
        And o botao de checkout deve estar visivel