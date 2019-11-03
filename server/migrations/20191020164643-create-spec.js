'use strict';

const tableName = 'openapi_specs';

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

      description: {
        type: Sequelize.STRING(1024),
      },

      spec: {
        type: Sequelize.TEXT,
      },

      version: {
        type: Sequelize.STRING(32),
      },

      source_repository: {
        type: Sequelize.STRING(255),
      },

      avatar_url: {
        type: Sequelize.STRING(255),
      },

      publisher_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'publisher',
          },
          key: 'id'
        }, 
       
      }
      ,
      category_id: {
        type: Sequelize.INTEGER,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'openapi_categories',
          },
          key: 'id'
        }, 
      },

      num_comments: {
        type: Sequelize.INTEGER,
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