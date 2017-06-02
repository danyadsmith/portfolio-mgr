const chalk = require('chalk');
const config = require('../../config');
const sequelize = require('../../db');

module.exports = {
  param: function (req, res, next) {
    return sequelize.ProjectType.findById(req.params.id)
      .then(function (data) {
        if (data) {
          req.projectType = data.dataValues;
          //console.log(req.projectType);
          next();
        } else {
          var error = new Error('There is no projectType with that id');
          next(error);
        }
      });
  },

  get: function (req, res) {
    return sequelize.ProjectType.findAll()
      .then(function (categories) {
        res.json(categories);
      });
  },

  one: function (req, res) {
    res.json(req.projectType);
  },

  post: function (req, res) {
    return sequelize.ProjectType.create(req.body)
      .then(function (projectType) {
        res.json(projectType);
      });
  },

  put: function (req, res) {
    if (config.log.debug) {
      console.log(chalk.white('Current ProjectType:', JSON.stringify(req.projectType, null, 2)));
      console.log(chalk.blue('New ProjectType:', JSON.stringify(req.body, null, 2)));
    }
    return sequelize.ProjectType.findById(req.params.id)
      .then(function (projectType) {
        return projectType.updateAttributes(req.body)
          .then(function (projectType) {
            res.status(200).send(projectType);
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
    //console.log(req.projectType);
    return sequelize.ProjectType.findById(req.params.id)
      .then(function (projectType) {
        return projectType.destroy()
        .then(function () {
          res.json(projectType);
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
