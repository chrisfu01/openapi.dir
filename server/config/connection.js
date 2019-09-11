const development = {
  database: 'spec',
  username: 'root',
  password: '',
  host: 'localhost',
  dialect: 'mysql' || 'sqlite' || 'postgres',
};

const testing = {
  database: 'spec',
  username: 'root',
  password: '',
  host: 'localhost',
  dialect: 'mysql' || 'sqlite' || 'postgres',
};

const production = {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST || 'localhost',
  dialect: 'mysql' || 'postgres',
};

module.exports = {
  development,
  testing,
  production,
};
