require('cypress-xpath')
import homeElements from '../elements/homeElements'
const HomeElements = new homeElements
const url = Cypress.config("baseUrl")

class homePage {

    go() {
        cy.visit(url)
    }

    signIn() {
        cy.get(HomeElements.signIn()).click()

    }

    researchingProduct(data) {
        cy.get(HomeElements.searchField()).type(data.researchingProduct)
        cy.get(HomeElements.bottonSearch()).click()
    }

    clicarEmCadastre(){
        cy.get(HomeElements.bottonCreateAccount()).click()
    }
}

export default homePage