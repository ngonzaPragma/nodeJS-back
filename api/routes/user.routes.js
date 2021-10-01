const { Router } = require('express')
const { ErrorCatcher } = require('../middlewares')
const { UserController } = require('../controllers')

const router = Router()

router.post('/signup', ErrorCatcher.bind(UserController.signUp))
router.post('/signin', ErrorCatcher.bind(UserController.signIn))

module.exports = router
