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
  
}, {  tableName });





module.exports = Category;