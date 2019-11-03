const Sequelize = require('sequelize');
const sequelize = require('../../config/database');
const Spec = require('./Spec'); 

const tableName = 'openapi_spec_comments';

const Comment = sequelize.define('Comment', {
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

  comments: {
    type: Sequelize.TEXT,
  },

  created_ip: {
    type: Sequelize.STRING(32),
  },

  created_user: {
    type: Sequelize.STRING(100),
  },
  
}, { tableName });

Comment.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());
  return values;
};

module.exports = Comment;
