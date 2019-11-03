'use strict';

const tableName = 'openapi_spec_comments';

module.exports = {
  up: (queryInterface, Sequelize) => {
    console.log("up to create " + tableName); 
    
    return queryInterface.createTable(tableName, {
      id: {
        type: Sequelize.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
      },

      openapi_spec_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'openapi_specs',
          },
          key: 'id'
        },
        allowNull: false
      },

      comments: {
        type: Sequelize.TEXT,
      },
    
      created_ip: {
        type: Sequelize.STRING(32),
      },
    
      created_by: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'users',
          },
          key: 'id'
        },
      },

      created_at: {
        allowNull: true,
        type: Sequelize.DATE
      },

      updated_at: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    console.log("down to delete " + tableName); 
    return queryInterface.dropTable(tableName);
  }
};