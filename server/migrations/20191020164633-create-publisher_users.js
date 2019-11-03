'use strict';

const tableName = 'publisher_users';

module.exports = {
  up: (queryInterface, Sequelize) => {
    console.log("up to create " + tableName); 
    
    return queryInterface.createTable(tableName, {
      user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: {
            tableName: 'users',
          },
          key: 'id'
        }, 
      },
      
      publisher_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: {
            tableName: 'publisher',
          },
          key: 'id'
        }, 
      },

      role: {
        type: Sequelize.STRING(255),
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    console.log("down to delete " + tableName); 
    return queryInterface.dropTable(tableName);
  }
};