const { ProductRepository } = require('../dal/repositories')
const { ProductPopulator } = require('./populators')
const { loadImages } = require('./helpers')

module.exports = {
  create: async function (product) {
    product = ProductPopulator.createToModel(product)
    product.estado = true
    const createdProduct = await ProductRepository.create(product)
    return createdProduct
  },
  getByPk: async function (id) {
    return await ProductRepository.getByPk(id)
  },
  getAll: async function () {
    const products = await ProductRepository.getAll()
    products.forEach((product) => {
      loadImages(product)
    })
    return products
  },
  update: async function (id, data) {
    return await ProductRepository.update(id, data)
  },
  remove: async function (id, data) {
    data = ProductPopulator.removeToModel(data)
    data.estado = false
    return await ProductRepository.remove(id, data)
  },
}
