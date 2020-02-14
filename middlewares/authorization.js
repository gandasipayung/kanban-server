const { Task } = require('../models')

module.exports = (req, res, next) => {
  Task
    .findByPk(req.params.id)
    .then(task => {
      if(task) {
        if(task.UserId === req.currentUserId) {
          next()
        } else {
          res.status(401).json({
            msg: 'Not Authorized'
          })
        }
      } else {
        next({
          name: 'AuthorizationFindError',
          msg: 'Task Not Found'
        })
      }
    })
    .catch(next)
}