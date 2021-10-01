const { createToken } = require('../../business/helpers')
const UserBusiness = require('../../business/user.business')

module.exports = {
  signUp: async function (req, res) {
    const { body } = req
    const user = await UserBusiness.create(body)
    return res.status(201).send({
      payload: user,
    })
  },
  signIn: async function (req, res) {
    const { email, password } = req.body
    const user = await UserBusiness.signIn(email, password)
    if (user === undefined) {
      return res.status(403).json({ msg: 'Access Denied' })
    }
    return res.status(201).send({
      payload: { token: createToken(user), user },
    })
  },
}
