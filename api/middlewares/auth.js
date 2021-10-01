const { decodeToken } = require('../../business/helpers')

function isAuth(req, res, next) {
  if (!req.headers.authorization)
    return res.status(403).send({ msg: 'Not authorized' })

  const token = req.headers.authorization

  decodeToken(token)
    .then((response) => {
      req.user = response
      next()
    })
    .catch((response) => {
      res.status(response.status)
    })
}

module.exports = isAuth
