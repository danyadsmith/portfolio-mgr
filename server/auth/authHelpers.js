const _ = require('lodash');
const bcrypt = require('bcrypt');
const config = require('../config');
const jwt = require('jsonwebtoken');
const sequelize = require('../db');

module.exports = {

  createUser: function (user) {
    return sequelize.User.create(user);
  },

  getUser: function (username) {
    return sequelize.User.findOne({where: {username: username}});
  },

  authenticateToken: function (token) {
    return jwt.decode(token, config.jwt.secret);
  },

  checkPassword: function (request, user) {
    return bcrypt.compare(request.body.password, user.password);
  },

  createToken: function (data) {
    return jwt.sign({
      exp: config.jwt.expiry,
      data: _.omit(data, 'password')
    }, config.jwt.secret);
  },

  hashPassword: function (password) {
    return bcrypt.hash(password, 10);
  }

};
