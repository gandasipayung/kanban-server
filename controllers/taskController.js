const { Task, Project } = require('../models')

class TaskController {
  
  static createTask (req, res, next) {
    let data = {
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      UserId: req.currentUserId,
      ProjectId: req.body.ProjectId
    }
    Task
      .create(data)
      .then(task => {
        res.status(201).json(task)
      })
      .catch(next)
  }

  static findAll (req, res, next) {
    Task
      .findAll({
        where: {
          ProjectId: req.params.projectId
        },
        include: [
          {
            model: Project
          }
        ],
        order: [
          ['id', 'ASC']
        ]
      })
      .then(task => {
        res.status(200).json(task)
      })
      .catch(next)
  }

  static deleteTask (req, res, next) {
    Task
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(() => {
        res.status(200).json({
          msg: 'Delete Success !'
        })
      })
      .catch(err => {
        next(err)
      })
  }
  
  static changeCategory (req, res, next) {
    Task
      .update({
        category: req.body.category
      },{
        where: {
          id: req.params.id
        }
      })
      .then( () => {
        return Task.findByPk(req.params.id)
      })
      .then(task => {
        res.status(200).json(task)
      })
      .catch(next)
  }

  static updateTask (req, res, next) {
    let data = {
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      UserId: req.currentUserId
    }
    Task
      .update(data, {
        where: {
          id: req.params.id
        }
      })
      .then( () => {
        return Task.findByPk(req.params.id)
      })
      .then(task => {
        res.status(200).json(task)
      })
      .catch(next)
  }
}

module.exports = TaskController
