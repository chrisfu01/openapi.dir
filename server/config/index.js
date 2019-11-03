const privateRoutes = require('./routes/privateRoutes');
const publicRoutes = require('./routes/publicRoutes');

const config = {
  migrate: false, // migration should run from cmd line
  privateRoutes,
  publicRoutes,
  port: process.env.PORT || '3000',
};

module.exports = config;
