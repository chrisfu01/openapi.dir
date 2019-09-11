const Sequelize = require('sequelize');
const sequelize = require('../../config/database');
const User = require('./User');

const tableName = 'user_roles';

const UserRole = sequelize.define('UserRole', {
  id: {
    type: Sequelize.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    references: {
      model: User,
      key: 'id'
    }
  },
  role: {
    type: Sequelize.STRING(50),
    unique: true,
  },
  
}, { tableName });

module.exports = UserRole;
