const Spec = require('../models/Spec.js');
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
    //const { body } = req;

    // req.file
    console.log(req.body.pubid);

    SwaggerParser.validate(req.file.originalname, (err, api) => {
      if (err) {
        console.error(err);
      }
      else {
        console.log("API name: %s, Version: %s", api.info.title, api.info.version);

        try {
          const data = Spec.create({
            name: api.info.title,
            description: api.info.description,
            spec: SwaggerParser.YAML.stringify(api),
            version: api.info.version,
            source_repository: api.info["x-origin"].url,
            avatar_url: api.info["x-logo"].url,
            publisher_id: req.body.pubid
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
      const apis = await Spec.findAll();
      return res.status(200).json({ apis: apis, total: apis.length });
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
