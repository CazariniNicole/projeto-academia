
import registrationFactory from '../factories/registrationFactory'
import homePage from '../pages/homePage'
import registrationPage from '../pages/registrationPage'

describe('registration', () => {
    it('validar se o usuário está sendo cadastrado com sucesso', function () {
        var user = registrationFactory.user()
        homePage.go()
        homePage.clicarEmCadastre()
        registrationPage.fillFormNames(user)
        registrationPage.fillFormSigninInformation(user)
        registrationPage.submit(user)
        const expectedMessage = 'Thank you for registering with Main Website Store.'
        registrationPage.messageSucess(expectedMessage)
    })
})
