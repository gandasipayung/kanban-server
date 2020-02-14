const { Project, ProjectMember, User, Task } = require('../models')

class ProjectController {
  static createProject (req, res, next) {
    let result
    Project
      .create({
        name: req.body.name,
        description: req.body.description
      })
      .then(project => {
        result = project
        return ProjectMember.create({
          UserId: req.currentUserId,
          ProjectId: project.id
        })
      })
      .then(_ => {
        res.status(201).json(result)
      })
      .catch(next)
  }

  static findAllProjects (req, res, next) {
    Project
      .findAll({
        include: [
          {
            model: User,
            where: {
              id: req.currentUserId
            },
            attributes: {exclude: ['password']}
          },{
            model: Task
          }
        ],
        order: ['id']
      })
      .then(projects => {
        res.status(200).json(projects)
      })
      .catch(next)
  }

  static findProject (req, res, next) {
    Project
      .findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: {exclude: ['password']}
          },{
            model:Task
          }
        ]
      })
      .then(project => {
        if(project) {
          res.status(200).json(project)
        } else {
          next({
            msg: 'Project Not Found',
            status: 404
          })
        }
      })
      .catch(next)
  }

  static inviteUser (req, res, next) {
    let data = {
      UserId: req.body.UserId,
      ProjectId: req.body.ProjectId
    }
    ProjectMember
      .create(data)
      .then(project => {
        res.status(201).json(project)
      })
      .catch(next)
  }

  static deleteProject (req, res, next) {
    Project
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(result => {
        if(result > 0) {
          return Task.destroy({
            where: {
              ProjectId: req.params.id
            }
          })
        } else (
          next({
            msg: 'Project Not Found',
            status: 404
          })
        )
      })
      .then(result => {
        res.status(200).json(result)
      })
      .catch(next)
  }
}

module.exports = ProjectController
