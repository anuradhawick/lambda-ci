const dotenv = require('dotenv');

// require and configure dotenv, will load vars in .env in PROCESS.ENV
dotenv.config();

module.exports.getEnvVars = () => ({
  value1: process.env.VALUE1,
  value2: process.env.VALUE2
});