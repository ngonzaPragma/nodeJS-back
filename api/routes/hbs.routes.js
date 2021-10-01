const { Router } = require('express')

const router = Router()

router.get('/login', (req, res) => {
  res.render('login')
})
router.get('/products', (req, res) => {
  res.render('product')
})

module.exports = router
