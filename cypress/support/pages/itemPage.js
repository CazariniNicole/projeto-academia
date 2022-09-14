import itemElements from "../elements/itemElements"
const ItemElements = new itemElements

class itemPage {

    InformationItem() {

        cy.get(ItemElements.configItemSize()).click()
        cy.get(ItemElements.configItemcolor()).click()
    }
    
    addToCart() {
        cy.get(ItemElements.bottonAddToCart()).click()
        cy.wait(3000)
        cy.get(ItemElements.messageAddToCart()).should('contains.text', 'You added Jade Yoga Jacket to your shopping cart.')
    }
    
    goToCheckout() {
        cy.get(ItemElements.bottonShowCart()).click({force: true})
        cy.get(ItemElements.bottonGoToCheckout()).click({force: true})
    }
}
export default new itemPage