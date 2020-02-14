const router = require('express').Router()
const UserRoutes = require('./user')
const TaskRoutes = require('./task')
const ProjectRoutes = require('./project')

router.get('/', (req, res) => {
  res.status(200).json({
    msg: 'Hello World!'
  })
})
router.use(UserRoutes)
router.use('/tasks', TaskRoutes)
router.use('/projects', ProjectRoutes)


module.exports = router
