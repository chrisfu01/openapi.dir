const Sequelize = require('sequelize');
const bcryptService = require('../services/bcrypt.service');

const sequelize = require('../../config/database');
//var mysql = require('mysql');

const hooks = {
  beforeCreate(user) {
    user.password_hash = bcryptService().password(user); // eslint-disable-line no-param-reassign
  },
};

const tableName = 'users';

const User = sequelize.define('User', {
  id: {
    type: Sequelize.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: Sequelize.STRING(100),
    unique: true,
  },
  firstname: {
    type: Sequelize.STRING(50),
  },
  lastname: {
    type: Sequelize.STRING(50),
  },

  password_hash: {
    type: Sequelize.STRING(255),
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
  }
}, { hooks, tableName });

// eslint-disable-next-line
User.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  delete values.password;

  return values;
};

module.exports = User;
