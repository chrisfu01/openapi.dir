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
    type: Sequelize.STRING(200),
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
  spec_url: {
    type: Sequelize.STRING(512),
  },
  publisher_id: {
    type: Sequelize.INTEGER,
   
  },
  category_id: {
    type: Sequelize.INTEGER,
   
  },
  num_comments: {
    type: Sequelize.INTEGER,
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

Spec.belongsTo(Category, {
  as: 'category',
  foreignKey: 'category_id'
});

Spec.belongsTo(Publisher, {
  as: 'publisher',
  foreignKey: 'publisher_id'
});

// eslint-disable-next-line
Spec.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  return values;
};


module.exports = Spec;


