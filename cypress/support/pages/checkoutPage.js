class checkoutPage {
    checkout() {
        cy.get('#shipping > .step-title').contains('Shipping Address')
        cy.get(':nth-child(1) > :nth-child(1) > .radio').click()
        cy.get('.button > span').click()
        cy.get('.payment-group > .step-title').should('have.text', 'Payment Method')
        cy.get('.payment-method-content > :nth-child(4) > div.primary > .action > span').click()
    } 
}
export default checkoutPage

