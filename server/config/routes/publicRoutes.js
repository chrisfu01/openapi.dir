const multer = require('multer')
var os = require('os');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, os.tmpdir())
    //cb(null, '/Users/chrisfu/openapi.portal/server/api/controllers')
  },

  //chrisfu⁩/openapi.portal⁩/server⁩/api⁩/
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
    // cb(null, file.originalname)
  }
});

const upload = multer({ storage: storage }).single("file");

const publicRoutes = {
  'POST /user': 'UserController.register',
  'POST /register': 'UserController.register', // alias for POST /user
  'POST /login': 'UserController.login',
  'POST /validate': 'UserController.validate',
  'GET /users': 'UserController.getAll',
  'GET /specs/':  'SpecController.getAll',
  'GET /yaml/:id':  'SpecController.getOne',


//  npm install redoc --sav

  'POST /upload': {
    path: 'SpecController.register',
    middlewares: [
         upload
    ],
  },

  'POST /urlify': 'SpecController.urlify',
  


  'GET /pub':  'PublisherController.getAll',
  'POST /company_register':  'PublisherController.register',
  'GET /category': 'CategoryController.getAll',


};

module.exports = publicRoutes;
