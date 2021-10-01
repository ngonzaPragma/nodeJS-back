const express = require('express')
const hbs = require('express-handlebars')
const router = require('./api/routes/router')
const config = require('./config')
const { dbConnection } = require('./dal/models/db')

const app = express()

dbConnection()

app.use(router)
app.engine(
  '.hbs',
  hbs({
    defaultLayout: 'default',
    extname: '.hbs',
  })
)
app.use(express.static('images'))
app.set('view engine', '.hbs')

app.listen(config.PORT, () =>
  console.log(`Server running on port ${config.PORT}`)
)
