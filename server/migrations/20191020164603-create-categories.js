'use strict';

const tableName = 'openapi_categories';

module.exports = {
  up: (queryInterface, Sequelize) => {
    console.log("up to create " + tableName); 
    
    return queryInterface.createTable(tableName, {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    
      name: {
        type: Sequelize.STRING(200),  
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

