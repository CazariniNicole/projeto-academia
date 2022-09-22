
import homePage from '../pages/homePage'
import registrationPage from '../pages/registrationPage'
const HomePage = new homePage
const RegistrationPage = new registrationPage

Given(/^Que acesso a URL$/, (  ) =>{
    HomePage.go();
} );

When(/^acesso a área de cadastro$/, (  ) =>{
    HomePage.clicarEmCadastre();
} );

When(/^e preencho os campos com dados válidos$/, (  ) =>{
    RegistrationPage.fillFormNames()
    RegistrationPage.fillFormSigninInformation()
    RegistrationPage.submit();
} );

Then(/^valido que estou cadastrado$/, (  ) =>{
    const expectedMessage = 'Thank you for registering with Main Website Store.'
    RegistrationPage.messageSucess(expectedMessage);
} );
