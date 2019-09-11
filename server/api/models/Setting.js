const Sequelize = require('sequelize');
const sequelize = require('../../config/database');

const tableName = 'site_settings';

const Setting = sequelize.define('Setting', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  setting_name: {
    type: Sequelize.STRING(50),

  },
  setting_value: {
    type: Sequelize.TEXT,

  },
  
}, { tableName });

module.exports = Setting;
