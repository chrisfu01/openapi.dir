const Sequelize = require('sequelize');
const path = require('path');

//const connection = require('./connection');
require('dotenv').config()

console.log(process.env.DB_NAME);

let database = new Sequelize (
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  }

);



module.exports = database;
