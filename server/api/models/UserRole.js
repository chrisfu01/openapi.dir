const Sequelize = require('sequelize');
const sequelize = require('../../config/database');
const User = require('./User');

const tableName = 'user_roles';

module.exports = (sequelize, DataTypes) => {
  const UserRole = sequelize.define('UserRole', {
    id:  DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    role:  DataTypes.STRING,
  }, { tableName });

  UserRole.associate = function(models) {
    
  };

  return UserRole;
}; 
