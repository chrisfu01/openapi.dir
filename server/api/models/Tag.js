const Sequelize = require('sequelize');
const sequelize = require('../../config/database');
const Spec = require('./Spec'); 

const tableName = 'openapi_spec_tags';

const Tag = sequelize.define('Tag', {
  id: {
    type: Sequelize.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  },
  openapi_spec_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Spec,
      key: 'id'
    }
  },
  tag: {
    type: Sequelize.STRING(100),
  },
  
}, {  tableName });

module.exports = Tag;
