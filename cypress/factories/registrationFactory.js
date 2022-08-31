var faker = require('faker')

export default {

    user: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()


        var dataPersonal = {
            name: `${firstName}`,
            lastname: `${lastName}`,
            singInInformation: {
                email: faker.internet.email(firstName),
                password: 'Nicolecazarini123',
                confirmPassword:'Nicolecazarini123'
            },
        }
        return dataPersonal
    }
}