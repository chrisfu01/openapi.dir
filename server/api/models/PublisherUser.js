const Sequelize = require('sequelize');
const sequelize = require('../../config/database');
const Publisher = require('./Publisher');
const User = require('./User');

const tableName = 'publisher_users';

const PublisherUser = sequelize.define('PublisherUser', {
  user_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    references: {
      model: User,
      key: 'id'
    }
  },
  publisher_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    references: {
      model: Publisher,
      key: 'id'
    }
  },
  role: {
    type: Sequelize.STRING(255),
  },
  
}, {  tableName });

module.exports = PublisherUser;
