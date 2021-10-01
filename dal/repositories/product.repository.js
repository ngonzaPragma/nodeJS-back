const { Product } = require('../models')

module.exports = {
  create: async function (data) {
    let product = new Product(data)
    return await product.save()
  },
  getByPk: async function (id) {
    return await Product.findById(id)
  },
  getAll: async function () {
    const query = { estado: true }
    return await Product.find(query)
  },
  update: async function (id, data) {
    return await Product.findByIdAndUpdate(id, data)
  },
  remove: async function (id, data) {
    return await Product.findByIdAndUpdate(id, data)
  },
}
