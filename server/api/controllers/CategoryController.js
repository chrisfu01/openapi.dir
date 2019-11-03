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

  /*
  const register = async (req, res) => {
    console.log("received" + req.file);
    console.log(req.body.categoryId);

    SwaggerParser.validate(req.file.path, (err, api) => {
      if (err) {
        console.error(err);
      }
      else {
        console.log("API name: %s, Version: %s, BODY TITLE: %s", api.info.title, api.info.version, req.body.apiName);
        console.log("NM: " + (!req.body.apiName || req.body.apiName == null || req.body.apiName == '') ); 
        try {
          const data = Spec.create({
            name: (!req.body.apiName || req.body.apiName == null || req.body.apiName == '' || req.body.apiName == 'null') ? api.info.title : req.body.apiName,
            description: api.info.description,
            spec: SwaggerParser.YAML.stringify(api),
            version: api.info.version,
            source_repository: api.info["x-origin"].url,
            avatar_url: api.info["x-logo"].url,
            category_id: req.body.categoryId
          });
          const token = authService().issue({ id: data.id });
          //console.log(data);
    
         return res.status(200).json({ msg: 'Success!' });
        } catch (err) {
          console.log(err);
          return res.status(500).json({ msg: 'Internal server error' });
        }
        
      }
    });

  };
*/


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
        "SELECT a.name, count(*) as counter from openapi_categories as a join openapi_specs as b on a.id = b.category_id group by a.id order by a.name"
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
