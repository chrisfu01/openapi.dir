'use strict';

const tableName = 'openapi_spec_tags';

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

      tag: {
        type: Sequelize.STRING(100),
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    console.log("down to delete " + tableName); 
    return queryInterface.dropTable(tableName);
  }
};
