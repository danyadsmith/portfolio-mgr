var _ = require('lodash');
require('dotenv').config()

var config = {
  dev: 'development',
  test: 'testing',
  prod: 'production',
  port: process.env.PORT || 3000,
  jwt: {
    secret: process.env.JWT_SECRET || 'supersecret',
    expiry: 24 * 60 * 10
  }
};

process.env.NODE_ENV = process.env.NODE_ENV || config.dev;
config.env = process.env.NODE_ENV;
var envConfig;

try {
  envConfig = require('./' + config.env);
  envConfig = envConfig || {};
} catch (e) {
  envConfig = {};
}

module.exports = _.assign(config, envConfig);
