const Spec = require('../models/Spec.js');
const Category = require('../models/Category.js');
const Publisher = require('../models/Publisher.js');


const authService = require('../services/auth.service');
const bcryptService = require('../services/bcrypt.service');

const express = require('express');
const app = express();
const multer = require('multer')
const cors = require('cors');
app.use(cors());
const SwaggerParser = require('swagger-parser');

const Sequelize = require('sequelize');
const sequelize = require('../../config/database');

/*
const multer = require('multer')

var storage = multer.memoryStorage()
var upload = multer({ storage: storage }).single("file");
*/

const CategoryController = () => {



  const validate = (req, res) => {
    const { token } = req.body;
    authService().verify(token, (err) => {
      if (err) {
        return res.status(401).json({ isvalid: false, err: 'Invalid Token!' });
      }
      return res.status(200).json({ isvalid: true });
    });
  };

  



  const getAll = async (req, res) => {
    try {
      sequelize.query(
        "SELECT a.id, a.name, count(*) as counter from openapi_categories as a left join openapi_specs as b on a.id = b.category_id group by a.id order by a.name"
      , { type: sequelize.QueryTypes.SELECT}).
      then(categories => {
        return res.status(200).json(categories);
      });
     
      //return res.status(200).json({ apis: categories.rows, total: categories.count });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  


  return {

    validate,
    getAll,
  };
};

module.exports = CategoryController;
