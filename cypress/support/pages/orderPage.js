import orderElements from "../elements/orderElements"
const OrderElements = new orderElements

class orderPage {

    order() {
        cy.get(OrderElements.messageSucess()).should('have.text', 'Thank you for your purchase!')

    }

}export default orderPage