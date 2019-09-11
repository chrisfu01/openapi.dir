'use strict';
const bcrypt = require('bcrypt-nodejs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync('pass0123', salt);

    return queryInterface.bulkInsert('users', [{
      firstname: 'John',
      lastname: 'Doe',
      email: 'demo@demo.com',
      password_hash: hash
    }], {});

  
  },

  down: (queryInterface, Sequelize) => {
    
  }
};
