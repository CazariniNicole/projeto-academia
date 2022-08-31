class productsPage {

    selectItem() {
        cy.get('#product-item-info_1338 > .details > .name > .product-item-link').click()
        cy.get('.base').should('have.text', 'Jade Yoga Jacket')

    }
}    

export default new productsPage