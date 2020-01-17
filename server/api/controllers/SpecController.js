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
const Op = Sequelize.Op;

const { stringify } = require('querystring');
const fetch = require('node-fetch');



const SpecController = () => {
  const register = async (req, res) => {

    try {
      console.log("received" + req.file);
      console.log(req.body.categoryId);

      if (!req.body.captcha) {
        return res.json({
          success: false,
          msg: 'Please select captcha'
        });
      }

      const secretKey = '6Ldyds8UAAAAALrQUQBV--2gjazsrjIqe3uK25mG';

      // Verify URL
      const query = stringify({
        secret: secretKey,
        response: req.body.captcha,
        remoteip: req.connection.remoteAddress
      });
      const verifyURL = `https://google.com/recaptcha/api/siteverify?${query}`;

      // Make a request to verifyURL
      const body = await fetch(verifyURL).then(res => res.json());

      // If not successful
      if (body.success !== undefined && !body.success) {
        return res.json({
          success: false,
          msg: 'Failed captcha verification'
        });
      }



      SwaggerParser.validate(req.file.path, (err, api) => {
        if (err) {
          console.error(err);
        } else {
          console.log("API name: %s, Version: %s, BODY TITLE: %s", api.info.title, api.info.version, req.body.apiName);
          console.log("NM: " + (!req.body.apiName || req.body.apiName == null || req.body.apiName == ''));
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
            const token = authService().issue({
              id: data.id
            });
            //console.log(data);

            return res.status(200).json({
              msg: 'Success!'
            });
          } catch (err) {
            console.log(err);
            return res.status(500).json({
              msg: 'Internal server error'
            });
          }

        }
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        msg: err
      });
    }

    
    //return res.status(500).json({msg: 'error!'});

  };

  const urlify = async (req, res) => {
    //console.log("received" + req.file);
    console.log(req.body);
    console.log(req.body.file);
    console.log(req.body.categoryId);



    SwaggerParser.validate(req.body.file, (err, api) => {
      if (err) {
        console.error(err);
      }
      else {
        //console.log("API name: %s, Version: %s, BODY TITLE: %s", api.info.title, api.info.version, req.body.apiName);
        //console.log("NM: " + (!req.body.apiName || req.body.apiName == null || req.body.apiName == '') ); 
        try {
          const data = Spec.create({
            name: api.info.title,
            description: api.info.description,
            spec_url: req.body.file,
            version: api.info.version,
            //source_repository: api.info["x-origin"].url,
            source_repository: (typeof(api.info["x-origin"])!= "undefined" && typeof(api.info["x-origin"].url)!= "undefined") ? api.info["x-origin"].url : null,
            //avatar_url: api.info["x-logo"].url,
            avatar_url: (typeof(api.info["x-logo"])!= "undefined" && typeof(api.info["x-logo"].url) != "undefined") ? api.info["x-logo"].url : null,
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
      //res.set('Content-Type', 'application/x-www-form-urlencoded');
      // return res.send(api.spec_url);
      return res.status(200).json({
        id: api.id,
        url: api.spec_url});
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  


  const getAll = async (req, res) => {
    try {
      let where = {}


      if (req.query.search && req.query.search.length > 0) {
        where = {
          [Op.or]: [{name: {
                [Op.like]: '%' + req.query.search + '%'
          }},{description: {
              [Op.like]: '%' + req.query.search + '%'
          } 
          } 
          ]
        }
      } 

      if (req.query.category_id) {
          where['category_id'] = req.query.category_id
          console.log(where)
      }
      

      /*
      where = {}

      if (req.category_id) {
        where.category_id = req.category_id
      }

      */
      
      const apis = await Spec.findAndCountAll({
        attributes:[
          'id', 'name', 'description', 'spec', 'avatar_url', 'num_comments', 'category_id', 'created_at', 'spec_url'
        ],
        limit: 10,
        offset: 10*(req.query.page-1),
        order: [
          // Will escape title and validate DESC against a list of valid direction parameters
          ['id', 'ASC']],
   
        where: where,
        
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
    urlify,
    validate,
    getAll,
    getOne
  };
};

module.exports = SpecController;
