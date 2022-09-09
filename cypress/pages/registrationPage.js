class registrationPage {
    fillFormNames(user) {
        cy.get('.base').should('have.text', 'Create New Customer Account')
        cy.get('#firstname').type(user.name)
        cy.get('#lastname').type(user.lastname)
    }
    fillFormSigninInformation(user) {
        cy.get('#email_address').type(user.singInInformation.email)
        cy.get('#password').type(user.singInInformation.password)
        cy.get('#password-confirmation').type(user.singInInformation.confirmPassword)
    }
    submit() {
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    }
    messageSucess(expectedMessage) {
        cy.get('.message-success > div').should('have.text', expectedMessage)
    }
}
export default new registrationPage