const chalk = require('chalk');
const config = require('../config');
const helpers = require('./authHelpers');

module.exports = {
  signup: function (req, res) {
    helpers.hashPassword(req.body.password)
      .then(function (hash) {
        var user = req.body;
        user.password = hash;
        return helpers.getUser(user.username);
      })
      .then(function (user) {
        if (user) {
          res.status(409).send({message: 'Cannot create account because username already exists'});
        }
        return helpers.createUser(req.body);
      })
      .then(function (data) {
        var token = helpers.createToken(data);
        if (config.log.info) {
          console.log('Created account for username: ', chalk.white(data.username));
          console.log('Generated token: ', chalk.white(token));
        }
        res.status(201).json({token: token});
      })
  },
}
