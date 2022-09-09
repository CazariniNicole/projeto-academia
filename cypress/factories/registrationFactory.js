import { faker } from '@faker-js/faker';

export default {
    user: function () {
        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()
        var password = faker.internet.password()
        var dataPersonal = {
            name: `${firstName}`,
            lastname: `${lastName}`,
            singInInformation: {
                email: faker.internet.email(firstName),
                password: `${password}`,
                confirmPassword: `${password}`
            },
        }
        return dataPersonal
    }
}