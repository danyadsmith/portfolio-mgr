const chalk = require('chalk');
const config = require('../../config');
const sequelize = require('../../db');

module.exports = {
  post: function (req, res) {
    return sequelize.Message.create(req.body)
      .then(function (message) {
        res.json(message);
      });
  }
};
