const chalk = require('chalk');
const config = require('../../../config');
const sequelize = require('../../../db');

module.exports = {
  param: function (req, res, next) {
    return sequelize.Credential.findById(req.params.id)
      .then(function (data) {
        if (data) {
          req.credential = data.dataValues;
          //console.log(req.credential);
          next();
        } else {
          var error = new Error('There is no credential with that id');
          next(error);
        }
      });
  },

  get: function (req, res) {
    return sequelize.Credential.findAll({where: {UserId: req.user.id}})
      .then(function (credentials) {
        res.json(credentials);
      });
  },

  one: function (req, res) {
    res.json(req.credential);
  },

  post: function (req, res) {
    var credential = req.body;
    credential.category = {
      id: req.body.CategoryId
    };
    delete credential.CategoryId;
    return sequelize.Credential.create(credential)
      .then(function (credential) {
        res.json(credential);
      });
  },

  put: function (req, res) {
    if (config.log.debug) {
      console.log(chalk.white('Current Credential:', JSON.stringify(req.credential, null, 2)));
      console.log(chalk.blue('New Credential:', JSON.stringify(req.body, null, 2)));
    }
    return sequelize.Credential.findById(req.params.id)
      .then(function (credential) {
        return credential.updateAttributes(req.body)
          .then(function (credential) {
            res.status(200).send(credential);
          })
          .catch(function (error) {
            res.status(400).send(error);
          });
      })
      .catch(function (error) {
        res.status(400).send(error);
      });
  },

  delete: function (req, res) {
    //console.log(req.credential);
    return sequelize.Credential.findById(req.params.id)
      .then(function (credential) {
        return credential.destroy()
        .then(function () {
          res.json(credential);
        })
        .catch(function (error) {
          res.status(400).send(error);
        });
      })
      .catch(function (error) {
        res.status(400).send(error);
      });
  }
};
