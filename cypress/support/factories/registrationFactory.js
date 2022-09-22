import { faker } from '@faker-js/faker';

export default {
    user: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()
        var passWord = faker.internet.password()

        var data = {
            firstname: firstName,
            lastname: lastName,
            email: faker.internet.email(firstName),
            password: passWord,
            confirmPassword: passWord
        }
        return data
    }
}