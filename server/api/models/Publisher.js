const Sequelize = require('sequelize');
//var mysql = require('mysql');
const bcryptService = require('../services/bcrypt.service');

const sequelize = require('../../config/database');

const tableName = 'publisher';

const Publisher = sequelize.define('Publisher', {
  id: {
    type: Sequelize.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  website: {
    type: Sequelize.STRING,
  },
  created_by: {
    type: Sequelize.INTEGER,
    foreignKey: true,
  },
  updated_by: {
    type: Sequelize.INTEGER,
    foreignKey: true,
  },

}, { tableName });

// eslint-disable-next-line
Publisher.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());
  return values;
};

module.exports = Publisher;


