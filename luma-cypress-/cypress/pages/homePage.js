require('cypress-xpath')
const url = Cypress.config("baseUrl")

class homePage {

    go() {
        cy.visit(url)
    }

    signIn() {
        cy.get('.panel > .header > .link > a').click()

    }

    researchingProduct(data) {
        cy.get('#search').type(data.researchingProduct)
        cy.get('#search_mini_form div button').click()
    }

    clicarEmCadastre(){
        cy.xpath('//div[@class="panel header"]//ul//li//a[contains(text(), "Create an Account")]').click()
    }
}

export default new homePage