const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ProductSchema = new Schema({
  name: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
    unique: true,
  },
  estado: {
    type: Boolean,
    default: true,
    required: true,
  },
  price: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    enum: ['computers', 'phones', 'accesories'],
  },
  image: {
    type: String,
  },
  description: { type: String },
})

ProductSchema.methods.toJSON = function () {
  const { __v, ...data } = this.toObject()
  return data
}

module.exports = mongoose.model('Product', ProductSchema)
