const env = require('dotenv')

env.config()

module.exports = {
  BASE_DIR: __dirname,
  DB: process.env.MONGODB || 'mongodb://{url}',
  PORT: process.env.PORT || 3001,
  SECRET_TOKEN: process.env.SECRET_TOKEN,
}
