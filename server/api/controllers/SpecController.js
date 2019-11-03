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



/*
const multer = require('multer')

var storage = multer.memoryStorage()
var upload = multer({ storage: storage }).single("file");
*/

const SpecController = () => {
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



    
    //return res.status(500).json({msg: 'error!'});

  };



  const validate = (req, res) => {
    const { token } = req.body;

    authService().verify(token, (err) => {
      if (err) {
        return res.status(401).json({ isvalid: false, err: 'Invalid Token!' });
      }

      return res.status(200).json({ isvalid: true });
    });
  };

  
  const getOne = async (req, res) => {
    try {
      const api = await Spec.findOne({
        where: {
          id: req.params.id
        }
        ,order: [['publisher_id', 'DESC']],
      });
      res.set('Content-Type', 'application/json');
      return res.send(api.spec);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  


  const getAll = async (req, res) => {
    try {
      const apis = await Spec.findAndCountAll({
        attributes:[
          'id', 'name', 'description', 'spec', 'avatar_url', 'num_comments'
        ],
        limit: 5,
        offset: 5*(req.params.page-1),
        order: [
          // Will escape title and validate DESC against a list of valid direction parameters
          ['id', 'ASC']],
        
        include: [{
          as: 'category', 
          model: Category,
          attributes: [['name', 'categoryName']]
        },
        {
          as: 'publisher',
          model: Publisher,
        }]
      });
      return res.status(200).json({ apis: apis.rows, total: apis.count });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  


  return {
    register,
    validate,
    getAll,
    getOne
  };
};

module.exports = SpecController;
