module.exports = (err, req, res, next) => {
  console.log(err)

  if(err.name === 'SequelizeValidationError') {
    let msg = []
    err.errors.forEach(err => {
      msg.push(err.message)
    })
    res.status(400).json({
      msg
    })
  } else if( err.name === 'SequelizeUniqueConstraintError') {
    res.status(400).json({
      msg: 'Email has taken, please use another email'
    })
  } else if(err.name === 'SignInError') {
    let msg = err.msg
    res.status(400).json({
      msg
    })
  } else if(err.name === 'JsonWebTokenError') {
    res.status(401).json({
      msg: 'You must sign in first'
    })
  } else if(err.name === 'AuthenticationError') {
    let msg = err.msg
    res.status(401).json({
      msg
    })
  } else if (err.name === 'AuthorizationFindError'){
    let msg = err.msg
    res.status(404).json({
      msg
    }) 
  } else {
    res.status(500).json(err)
  }
}