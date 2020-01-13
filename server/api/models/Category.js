const Sequelize = require('sequelize');
const sequelize = require('../../config/database');
const Spec = require('./Spec');

const tableName = 'openapi_categories';

const Category = sequelize.define('Category', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  name: {
    type: Sequelize.STRING(200),
    
  },
  createdAt: {
    allowNull: true,
    field: 'created_at',
    type: Sequelize.DATE
  },

  updatedAt: {
    allowNull: true,
    field: 'updated_at',
    type: Sequelize.DATE
  },
  
}, {  tableName });





module.exports = Category;