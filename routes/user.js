const router = require('express').Router()
const UserController = require('../controllers/userController')

router.get('/users', UserController.findAll)
router.post('/signup', UserController.signUp)
router.post('/signin', UserController.signIn)
router.post('/gsignin', UserController.gsignin)

module.exports = router
