const Sequelize = require('sequelize');
const sequelize = require('../../config/database');
const Publisher = require('./Publisher');
const User = require('./User');
const Category = require('./Category');

const tableName = 'openapi_specs';

const Spec = sequelize.define('Spec', {
  id: {
    type: Sequelize.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING(32),
  },
  description: {
    type: Sequelize.STRING(1024),
  },
  spec: {
    type: Sequelize.TEXT,
  },
  version: {
    type: Sequelize.STRING(32),
  },
  source_repository: {
    type: Sequelize.STRING(255),
  },
  avatar_url: {
    type: Sequelize.STRING(255),
  },
  publisher_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    references: {
      model: Publisher,
      key: 'id'
    }
  },
  category_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    references: {
      model: Category,
      key: 'id'
    }
  },
  num_comments: {
    type: Sequelize.INTEGER,
  },
  created_by: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    references: {
      model: User,
      key: 'id'
    }
  },
  updated_by: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    references: {
      model: User,
      key: 'id'
    }
  },
}, { tableName });

// eslint-disable-next-line
Spec.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  return values;
};

module.exports = Spec;


