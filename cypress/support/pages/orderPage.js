import orderElements from "../elements/orderElements"
const OrderElements = new orderElements

class orderPage {

    orderMessageSucess(expectedMessage) {
        cy.wait(10000)
        cy.get(OrderElements.messageSucess()).should('have.text', expectedMessage)
    }

}export default orderPage