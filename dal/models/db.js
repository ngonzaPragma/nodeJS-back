const mongoose = require('mongoose')
const config = require('../../config')

const dbConnection = () => {
  try {
    mongoose.connect(config.DB, (err, res) => {
      if (err) console.log(err)
      console.log(
        'Database connection established',
        mongoose.connection.readyState
      )
    })
  } catch (error) {
    console.log(error)
    throw new Error('Error connecting to Database')
  }
}

module.exports = {
  dbConnection,
}
