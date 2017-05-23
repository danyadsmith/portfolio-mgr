const _ = require('lodash');
const bcrypt = require('bcrypt');
const config = require('../config');
const jwt = require('jsonwebtoken');
const sequelize = require('../config/db');

module.exports = {
  hashPassword: function (password) {
    return bcrypt.hash(password, 10);
  },

  getUser: function (username) {
    return sequelize.User.findOne({where: {username: username}})
  },

  createUser: function (user) {
    return sequelize.User.create(user);
  },

  createToken: function (data) {
    return jwt.sign({
      exp: config.jwt.expiry,
      data: _.omit(data, 'password')
    }, config.jwt.secret)
  }
};
