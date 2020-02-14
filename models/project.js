'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Project extends Model {
    static associate (models) {
      Project.hasMany(models.Task)
      Project.belongsToMany(models.User,{ through: models.ProjectMember})
    }
  }
  Project.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING
  },{
    sequelize
  })
  
  return Project;
};