const router = require('express').Router()
const TaskController = require('../controllers/taskController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.use(authentication)
router.get('/:projectId', TaskController.findAll)
router.post('/', TaskController.createTask)

// need authorization here
router.patch('/:id', TaskController.changeCategory)
router.put('/:id', TaskController.updateTask)
router.delete('/:id', TaskController.deleteTask)


module.exports = router
