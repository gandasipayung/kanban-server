const { User } = require('../models')
const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET

module.exports = (req, res, next) => {
  let token =  req.headers.token
  let decoded = jwt.verify(token, JWT_SECRET)
  req.currentUserId = decoded.id 
  User
    .findByPk(req.currentUserId)
    .then(user => {
      if(user) {
        next()
      } else {
        next({
          name: 'AuthenticationError',
          msg: 'You must sign up first !'
        })  
      }
    })
    .catch(next)
}