const { UserRepository } = require('../dal/repositories')
const { UserPopulator } = require('./populators')
const bcrypt = require('bcrypt')

module.exports = {
  create: async function (user) {
    user = UserPopulator.createToModel(user)
    user.signupDate = new Date()

    const salt = bcrypt.genSaltSync()
    user.password = bcrypt.hashSync(user.password, salt)

    let newUser = await UserRepository.create(user)
    newUser = UserPopulator.createToApi(newUser)
    return newUser
  },
  signIn: async function (email, password) {
    const user = await UserRepository.getByEmail(email)
    const contrasenaValida = bcrypt.compareSync(password, user.password)
    if (!contrasenaValida) return undefined
    return user
  },
}
