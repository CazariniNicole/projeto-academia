import checkoutElements from '../elements/checkoutElements'
const CheckoutElements = new checkoutElements

class checkoutPage {

    checkout() {
        cy.wait(15000)
        cy.get(CheckoutElements.shippingAddress()).contains('Shipping Address')
        cy.get(CheckoutElements.bottonexemp1()).click()
        cy.get(CheckoutElements.bottonexemp2()).click()
        cy.get(CheckoutElements.textPaymentMethod()).should('have.text', 'Payment Method')
        cy.get(CheckoutElements.bottonexemp3()).click()
    } 
}
export default checkoutPage

