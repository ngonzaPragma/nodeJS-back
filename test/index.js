const { assert, AssertionError } = require('chai')
const UserBusiness = require('../business/user.business')
const ProductBusiness = require('../business/product.business')
const { dbConnection } = require('../dal/models/db')
const mongoose = require('mongoose')

dbConnection()

describe('API', function () {
  describe('User', function () {
    it('Check that only necessary fields are returned', async function () {
      const user = await UserBusiness.create({
        email: 'nicolas.gonzalez@pragma.com.co',
        username: 'nicolas.gonzalez',
        password: 'password',
        basura: 'password',
      })
      assert.isUndefined(user.password)
      assert.isUndefined(user.basura)
    })
    it('Check that token is returned', async function () {
      const user = await UserBusiness.signIn(
        'nicolas.gonzalez@pragma.com.co',
        'password'
      )
      assert.typeOf(user.token, 'string')
    })
  })
  describe('Product', function () {
    it('Check that products have valid status', async function () {
      const products = await ProductBusiness.getAll()
      products.forEach((product) => {
        assert.equal(product.estado, true)
      })
    })
    it('Check that requested product is returned', async function () {
      const id = mongoose.Types.ObjectId('615724f18a6d8c7f1858cff8')
      const product = await ProductBusiness.getByPk(id)
      assert.strictEqual(product._id.toString(), id.toString())
    })
    it('Check that product updates successfully', async function () {
      const id = mongoose.Types.ObjectId('615724f18a6d8c7f1858cff8')
      const data = { name: 'Panela' }
      const product = await ProductBusiness.update(id, data)
      assert.equal(data.name, product.name)
    })
    it('Check that is removed successfully', async function () {
      const id = mongoose.Types.ObjectId('615724f18a6d8c7f1858cff8')
      const product = await ProductBusiness.remove(id)
      assert.equal(product.estado, false)
    })
  })
})
