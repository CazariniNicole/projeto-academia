// class loginPage {

//     fillForm(data) {
//         cy.get('.base').should('have.text', 'Customer Login')
//         cy.get('#email').type(data.email)
//         cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type(data.password)
//         cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
//         cy.get('.panel').contains('welcome')
        
//     }

// }    

// export default new loginPage