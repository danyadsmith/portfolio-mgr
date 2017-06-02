const chalk = require('chalk');
const config = require('../../../config');
const sequelize = require('../../../db');

module.exports = {
  param: function (req, res, next) {
    return sequelize.SocialMediaAccount.findById(req.params.id)
      .then(function (data) {
        if (data) {
          req.profile = data.dataValues;
          //console.log(req.profile);
          next();
        } else {
          var error = new Error('There is no profile with that id');
          next(error);
        }
      });
  },

  get: function (req, res) {
    return sequelize.SocialMediaAccount.findAll({where: {UserId: req.user.id}})
      .then(function (profiles) {
        res.json(profiles);
      });
  },

  one: function (req, res) {
    res.json(req.profile);
  },

  post: function (req, res) {
    return sequelize.SocialMediaAccount.create(req.body)
      .then(function (profile) {
        res.json(profile);
      });
  },

  put: function (req, res) {
    if (config.log.debug) {
      console.log(chalk.white('Current SocialMediaAccount:', JSON.stringify(req.profile, null, 2)));
      console.log(chalk.blue('New SocialMediaAccount:', JSON.stringify(req.body, null, 2)));
    }
    return sequelize.SocialMediaAccount.findById(req.params.id)
      .then(function (profile) {
        return profile.updateAttributes(req.body)
          .then(function (profile) {
            res.status(200).send(profile);
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
    //console.log(req.profile);
    return sequelize.SocialMediaAccount.findById(req.params.id)
      .then(function (profile) {
        return profile.destroy()
        .then(function () {
          res.json(profile);
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
