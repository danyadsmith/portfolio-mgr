const chalk = require('chalk');
const config = require('../../../config');
const sequelize = require('../../../db');

module.exports = {
  param: function (req, res, next) {
    return sequelize.CommunityService.findById(req.params.id, {attributes: {
        exclude: ['UserId', 'TypeId']
      }})
      .then(function (data) {
        if (data) {
          req.communityService = data.dataValues;
          //console.log(req.communityService);
          next();
        } else {
          var error = new Error('There is no communityService with that id');
          next(error);
        }
      });
  },

  get: function (req, res) {
    return sequelize.CommunityService.findAll({where: {UserId: req.user.id}, attributes: {
        exclude: ['UserId', 'TypeId']
      }})
      .then(function (communityServices) {
        res.json(communityServices);
      });
  },

  one: function (req, res) {
    res.json(req.communityService);
  },

  post: function (req, res) {
    return sequelize.CommunityService.create(req.body)
      .then(function (communityService) {
        res.json(communityService);
      });
  },

  put: function (req, res) {
    if (config.log.debug) {
      console.log(chalk.white('Current CommunityService:', JSON.stringify(req.communityService, null, 2)));
      console.log(chalk.blue('New CommunityService:', JSON.stringify(req.body, null, 2)));
    }
    return sequelize.CommunityService.findById(req.params.id)
      .then(function (communityService) {
        return communityService.updateAttributes(req.body)
          .then(function (communityService) {
            res.status(200).send(communityService);
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
    //console.log(req.communityService);
    return sequelize.CommunityService.findById(req.params.id)
      .then(function (communityService) {
        return communityService.destroy()
        .then(function () {
          res.json(communityService);
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
