const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
  cb(null, '/Users/chrisfu/openapi.portal/server/api/controllers')
},

//chrisfu⁩/openapi.portal⁩/server⁩/api⁩/
filename: function (req, file, cb) {
  cb(null, file.originalname)
}
});

const upload = multer({ storage: storage }).single("file");

const publicRoutes = {
  'POST /user': 'UserController.register',
  'POST /register': 'UserController.register', // alias for POST /user
  'POST /login': 'UserController.login',
  'POST /validate': 'UserController.validate',
  'GET /users': 'UserController.getAll',

  'GET /specs':  'SpecController.getAll',
  'GET /specs/:id':  'SpecController.getOne',

//  npm install redoc --save


  'POST /uppity': {
    path: 'SpecController.register',
    middlewares: [
         upload
    ],
  },


  'GET /pub':  'PublisherController.getAll',
  'POST /company_register':  'PublisherController.register',

};

module.exports = publicRoutes;
