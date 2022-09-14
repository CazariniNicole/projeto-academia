import homeElements from '../elements/homeElements'
const HomeElements = new homeElements
const url = Cypress.config("baseUrl")

class homePage {

    go() {
        cy.visit(url)
    }

    signIn() {
        cy.get(HomeElements.buttonSignIn()).click()

    }

    researchingProduct(data) {
        cy.get(HomeElements.searchField()).type(data.researchingProduct)
        cy.get(HomeElements.bottonSearch()).click()
    }

    clicarEmCadastre(){
        cy.xpath(HomeElements.bottonCreateAccount()).click()
    }
}

export default homePage