import orderElements from "../elements/orderElements"
const OrderElements = new orderElements

class orderPage {

    orderMessageSucess(expectedMessage) {
        cy.intercept(
            { method: 'GET', url: '**/content.html' },
            ).as('getLastRequest');
        cy.wait('@getLastRequest');
        cy.get(OrderElements.messageSucess()).should('have.text', expectedMessage)
    }

}
export default orderPage