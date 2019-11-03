'use strict';

const tableName = 'openapi_consumers';

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

      consumer_name: {
        type: Sequelize.STRING(200)
      },
    
      consumer_logo: {
        type: Sequelize.STRING(512),
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
