'use strict';

const tableName = 'publisher';

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

      name: {
        type: Sequelize.STRING(200),
      },

      website: {
        type: Sequelize.STRING(500),
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

      updated_by: {
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