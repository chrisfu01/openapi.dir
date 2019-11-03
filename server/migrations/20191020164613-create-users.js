'use strict';

const tableName = 'users';

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
