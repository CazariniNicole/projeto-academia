import loginElements from "../elements/loginElements"
const LoginElements = new loginElements

class loginPage {

    fillForm(data) {
        cy.get(LoginElements.linkSignIn()).click()
        cy.get(LoginElements.fieldSetEmail()).type(data.email)
        cy.get(LoginElements.fieldSetPassword()).type(data.password)
        cy.get(LoginElements.bottonSingIn()).click()
        cy.get(LoginElements.messageWelcome()).contains('welcome')
        
    }
}    

export default loginPage