const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
  },
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  signupDate: {
    type: Date,
    default: Date.now(),
  },
})

module.exports = mongoose.model('User', UserSchema)
