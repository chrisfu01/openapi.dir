const Sequelize = require('sequelize');
const sequelize = require('../../config/database');
const Spec = require('./Spec'); 

const tableName = 'openapi_consumers';

const Consumer = sequelize.define('Consumer', {
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
  consumer_name: {
    type: Sequelize.STRING(200)
  },

  consumer_logo: {
    type: Sequelize.STRING(512),
  },
  
}, { tableName });

// eslint-disable-next-line
Consumer.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());
  return values;
};

module.exports = Consumer;
