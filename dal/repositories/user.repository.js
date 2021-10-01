const { User } = require('../models')

module.exports = {
  create: async function (data) {
    const user = new User(data)
    return await user.save()
  },
  getByEmail: async function (email) {
    return await User.findOne({ email })
  },
}
