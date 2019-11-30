'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('openapi_categories', [
      {
      id: 3,
      name: 'Sports',
     },
     {
      id: 4,
      name: 'Finance',
     },
     {
      id: 5,
      name: 'Manufacturing',
     },

     {
      id: 6,
      name: 'Agriculture',
     },
     
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
