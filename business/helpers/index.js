const config = require('../../config')
const fs = require('fs')
const jwt = require('jwt-simple')
const moment = require('moment')

function createToken(user) {
  const payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment().add(1, 'day').unix(),
  }

  return jwt.encode(payload, config.SECRET_TOKEN)
}

function decodeToken(token) {
  const decoded = new Promise((resolve, reject) => {
    try {
      const payload = jwt.decode(token, config.SECRET_TOKEN)

      if (payload.exp <= moment().unix()) {
        reject({
          status: 401,
          msg: 'Token has expired',
        })
      }
      resolve(payload.sub)
    } catch (error) {
      reject({
        status: 500,
        msg: 'Invalid token',
      })
    }
  })
  return decoded
}

function loadImages(product) {
  let base64Data = product.image.replace(/^data:image\/jpeg;base64,/, '')
  fs.writeFile(
    `${config.BASE_DIR}\\images\\hbs\\${product.name}.jpg`,
    base64Data,
    'base64',
    function (err) {
      if (err) console.log(err)
    }
  )
}

module.exports = {
  createToken,
  decodeToken,
  loadImages,
}
