'use strict';
const bcrypt = require('bcryptjs')
const SALT = Number(process.env.SALT)

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class User extends Model {
    static associate (models) {
      User.hasMany(models.Task)
      User.belongsToMany(models.Project, { through: models.ProjectMember })
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Please enter your name'
        },
        notEmpty: {
          args: true,
          msg: 'Please enter your name'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        notNull: {
          args: true,
          msg: 'Please enter your email'
        },
        isEmail: {
          args: true,
          msg: 'Email Format Wrong !'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please enter your password'
        },
        notNull: {
          args: true,
          msg: 'Please enter your password'
        },
        len: {
          args: [5],
          msg: 'Password length minimal 5'
        }
      }
    }
  }, {
    sequelize,
    hooks: {
      beforeCreate: (user) => {
        const hash = bcrypt.hashSync(user.password, SALT)
        user.password = hash
      }
    }
  })
  
  return User;
};