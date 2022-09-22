Feature: Realizar uma compra

    Scenario: Compra com sucesso
        Given Que estou logado
        When adiciono um produto no carrinho
        And realizo o checkout
        Then valido a compra com sucesso 


