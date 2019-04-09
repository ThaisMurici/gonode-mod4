'use strict'

const User = use('App/Models/User')

class UserController {
  async store ({ request }) {
    const userData = request.only(['username', 'email', 'password'])
    const addresses = request.input('addresses')

    const user = await User.create(userData)

    await user.addresses().createMany(addresses)

    return user
  }
}

module.exports = UserController
