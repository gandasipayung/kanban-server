const router = require('express').Router()
const ProjectController = require('../controllers/projectController')
const authentication = require('../middlewares/authentication')

router.use(authentication)
router.get('/', ProjectController.findAllProjects)
router.get('/:id', ProjectController.findProject)
router.post('/', ProjectController.createProject)
router.post('/invite', ProjectController.inviteUser)
router.delete('/:id', ProjectController.deleteProject)



module.exports = router
