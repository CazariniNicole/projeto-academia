import productsElements from "../elements/productsElements"
const ProductsElements = new productsElements

class productsPage {

    selectItem() {
        cy.get(ProductsElements.linkProduct()).click()
        cy.get(ProductsElements.nomeProduct()).should('have.text', 'Jade Yoga Jacket')

    }
}    

export default productsPage