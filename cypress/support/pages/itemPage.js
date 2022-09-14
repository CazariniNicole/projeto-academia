import itemElements from "../elements/itemElements"

class itemPage {
    InformationItem() {

        cy.get(itemElements.configItemSize()).click()
        cy.get('#option-label-color-93-item-50').click()
    }
    
    addToCart() {
        cy.get('#product-addtocart-button > span').click()
        cy.wait(3000)
        cy.get('.message-success').should('contains.text', 'You added Jade Yoga Jacket to your shopping cart.')
    }
    
    goToCheckout() {
        cy.get('.showcart').click({force: true})
        cy.get('#top-cart-btn-checkout').click({force: true})
    }
}


configItemSize = () => { return '#option-label-size-144-item-167'}
configItemcolor = () => { return '#option-label-color-93-item-50'}
bottonAddToCart = () => { return '#product-addtocart-button > span'}
bottonShowCart  = () => { return '.showcart'}
bottonShowCart  = () => { return '#top-cart-btn-checkout'}

export default new itemPage