const dotenv = require('dotenv');

// Set the NODE_ENV to 'development' by default.
process.env.NODE_ENV = (process.env.NODE_ENV || 'development').toLowerCase();

// Load environment variables from .env in the `core` directory
const envFound = dotenv.config({ path: __dirname + '/.env' });
if (envFound.error) {
  throw new Error(" Couldn't find .env file in core directory ");
}

module.exports = {
  env: process.env.NODE_ENV,
  api: {
    prefix: '/api',
  },
  port: process.env.PORT || 5000,
  database: {
    connection: process.env.DB_CONNECTION,
    name: process.env.DB_NAME,
  },
};

