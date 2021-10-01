const { decodeToken } = require('../../business/helpers')
const ProductBusiness = require('../../business/product.business')

module.exports = {
  saveProduct: async function (req, res) {
    const { body } = req
    //const decoded = await decodeToken(req.headers.authorization)
    //console.log("User id: ",decoded)
    const product = await ProductBusiness.create(body)
    return res.status(201).send({
      payload: product,
    })
  },
  getProduct: async function (req, res) {
    const { id } = req.params
    const product = await ProductBusiness.getByPk(id)
    return res.send({
      payload: product,
    })
  },
  getProducts: async function (req, res) {
    const products = await ProductBusiness.getAll()
    return res.send({
      payload: products,
    })
  },
  updateProduct: async function (req, res) {
    const { id } = req.params
    const { body } = req
    const product = await ProductBusiness.update(id, body)
    return res.send({
      payload: product,
    })
  },
  deleteProduct: async function (req, res) {
    const { id } = req.params
    const { body } = req
    const product = await ProductBusiness.remove(id, body)
    return res.send({
      payload: product,
    })
  },
}
