class itemPage {
    InformationItem() {
        cy.get('#option-label-size-144-item-167').click()
        cy.get('#option-label-color-93-item-50').click()
    }
    
    addToCart() {
        cy.get('#product-addtocart-button > span').click()
        cy.get('.message-success').contains('You added Jade Yoga Jacket to your shopping cart.')
    }
    
    goToCheckout() {
        cy.get('.showcart > .counter').click()
        cy.get('#top-cart-btn-checkout').click()
    }
}

export default new itemPage