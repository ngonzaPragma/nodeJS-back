const { Router } = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')
const { UserRoutes, HBSRoutes, ProductRoutes } = require('./')
const router = Router()

router
  .use(bodyParser.json({ limit: 1024 * 1024 * 10, type: 'application/json' }))
  .use(cors())

router.use('/user', UserRoutes)
router.use('/product', ProductRoutes)
router.use('/hbs', HBSRoutes)

module.exports = router
