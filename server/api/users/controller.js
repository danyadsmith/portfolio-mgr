const chalk = require('chalk');
const config = require('../../config');
const sequelize = require('../../db');
const gravatar = require('gravatar');

module.exports = {
  param: function (req, res, next) {
    return sequelize.User.findById(req.params.userid, {
      attributes: {
        exclude: ['password', 'address1', 'address2', 'city', 'stateProvince', 'country', 'postalCode', 'phone', 'email']
      }
    })
      .then(function (data) {
        if (data) {
          req.user = data.dataValues;
          //console.log(req.user);
          next();
        } else {
          var error = new Error('There is no user with that id');
          next(error);
        }
      });
  },

  get: function (req, res) {
    return sequelize.User.findAll({ attributes: {
      exclude: ['password', 'address1', 'address2', 'city', 'stateProvince', 'country', 'postalCode', 'location', 'phone', 'email']
    }})
      .then(function (users) {
        res.json(users);
      });
  },

  one: function (req, res) {
    res.json(req.user);
  },

  post: function (req, res) {
    var gravatarImg = gravatar.url(req.body.email, {s: 100});
    req.body.photoUrl = 'https:' + gravatarImg;
    return sequelize.User.create(req.body)
      .then(function (user) {
        res.json(user);
      });
  },

  put: function (req, res) {
    if (config.log.debug) {
      console.log(chalk.white('Current User:', JSON.stringify(req.user, null, 2)));
      console.log(chalk.blue('New User:', JSON.stringify(req.body, null, 2)));
    }
    return sequelize.User.findById(req.user.id)
      .then(function (user) {
        return user.updateAttributes(req.body)
          .then(function (user) {
            res.status(200).send(user);
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
    //console.log(req.user);
    return sequelize.User.findById(req.user.id)
      .then(function (user) {
        return user.destroy()
        .then(function () {
          res.json(user);
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
