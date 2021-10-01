const { Router } = require('express')
const { Auth, ErrorCatcher } = require('../middlewares')
const { ProductController } = require('../controllers')

const router = Router()

router.get('/', ErrorCatcher.bind(ProductController.getProducts))
router.get('/:id', ErrorCatcher.bind(ProductController.getProduct))
router.post('/', [Auth], ErrorCatcher.bind(ProductController.saveProduct))
router.put('/:id', [Auth], ErrorCatcher.bind(ProductController.updateProduct))
router.delete(
  '/:id',
  [Auth],
  ErrorCatcher.bind(ProductController.deleteProduct)
)

module.exports = router
