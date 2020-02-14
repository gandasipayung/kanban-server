'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class ProjectMember extends Model {
    static associate (models) {
      
    }
  }
  
  ProjectMember.init({
    UserId: DataTypes.INTEGER,
    ProjectId: DataTypes.INTEGER
  },{
    sequelize
  })
  
  return ProjectMember;
};