'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Task extends Model {
    static associate (models) {
      Task.belongsTo(models.User)
      Task.belongsTo(models.Project,{ onDelete: 'CASCADE'})
    }
  }

  Task.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Please enter title'
        },
        notEmpty: {
          args: true,
          msg: 'Please enter title'
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Please enter description'
        },
        notEmpty: {
          args: true,
          msg: 'Please enter description'
        }
      }
    },
    category: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    ProjectId: DataTypes.INTEGER
  }, {
    sequelize
  })

  return Task;
};