// class itemPage {
//     InformationItem() {
//         cy.get('#option-label-size-144-item-167').click()
//         cy.get('#option-label-color-93-item-50').click()
//     }
    
//     addToCart() {
//         cy.get('#product-addtocart-button > span').click()
//         cy.wait(3000)
//         cy.get('.message-success').should('contains.text', 'You added Jade Yoga Jacket to your shopping cart.')
//     }
    
//     goToCheckout() {
//         cy.get('.showcart').click({force: true})
//         cy.get('#top-cart-btn-checkout').click({force: true})
//     }
// }

// export default new itemPage