import registrationElements from '../elements/registrationElements'
import registrationFactory from '../factories/registrationFactory'
const RegistrationElements = new registrationElements

var user = registrationFactory.user()

class registrationPage {
    fillFormNames() {
        cy.get('.base').should('have.text', 'Create New Customer Account')
        cy.get(RegistrationElements.firstnameFillForm()).type(user.firstname)
        cy.get(RegistrationElements.lastnameFillForm()).type(user.lastname)
    }
    fillFormSigninInformation() {
        cy.get(RegistrationElements.emailFillForm()).type(user.email)
        cy.get(RegistrationElements.passwordFillForm()).type(user.password)
        cy.get(RegistrationElements.passwordConfirmationFillForm()).type(user.confirmPassword)
    }
    submit() {
        cy.get(RegistrationElements.buttonSubmitRegistration()).click()
    }
    messageSucess(expectedMessage) {
        cy.get(RegistrationElements.messageSucessRegistration()).should('have.text', expectedMessage)
    }
}
export default registrationPage