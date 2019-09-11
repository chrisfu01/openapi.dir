const Sequelize = require('sequelize');
const sequelize = require('../../config/database');

const tableName = 'openapi_categories';

const Category = sequelize.define('Category', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  name: {
    type: Sequelize.STRING(200),
    
  },
  
}, {  tableName });

Category.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());
  return values;
};

module.exports = Category;