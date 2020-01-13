
const Category = require('../models/Category');
const Sequelize = require('sequelize');
const sequelize = require('../../config/database');


const service =  () => {
  const getAll = async () => {

    try {
      return await Category.findAndCountAll({
        attributes:[
          'id', 'name'
        ]
      });
    } catch (err) {
      console.log(err);
    }

    }

  const checkId = async (type) => {
    try {
      const r1 = await Category.findOrCreate({
        where: {
          name: type,
        }
      });
      return r1;
    } catch (err) {
      console.log(err);
    }
  }

  
  const getId = async (type) => {
    try {
      return await Category.findAndCountAll({
        attributes:[
          'id','name'
        ],
        where: {
          name: type,
        }
      }).then(cat => {
        //console.log(cat.count);
        if (cat.count > 0) {
          //let b = Object.keys(cat.rows);
          //console.log(cat.rows);
          return cat.rows[0].id;
        } else {
          return null;
        }

        //return (cat.count > 0);
      });
      
    } catch (err) {
      console.log(err);
    }
  }
  

  const put = (type) => {
       try {
        return Category.create({
        name: type});
    } catch (err) {
      console.log(err);
    }
  }
 
  return {
    getAll,
    checkId,
    getId,
    put,
  };

};

module.exports = service;
