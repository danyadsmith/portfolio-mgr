const chalk = require('chalk');
const config = require('../../../config');
const sequelize = require('../../../db');

module.exports = {
  param: function (req, res, next) {
    return sequelize.Project.findById(req.params.id, {
      include: [
        { model: sequelize.ProjectType, as: 'type'}
      ],
      attributes: {
        exclude: ['UserId', 'TypeId']
      }})
      .then(function (data) {
        if (data) {
          req.project = data.dataValues;
          //console.log(req.project);
          next();
        } else {
          var error = new Error('There is no project with that id');
          next(error);
        }
      });
  },

  get: function (req, res) {
    return sequelize.Project.findAll({where: {UserId: req.user.id},
      include: [
        { model: sequelize.ProjectType, as: 'type'}
      ],
      attributes: {
        exclude: ['UserId', 'TypeId']
      }})
      .then(function (projects) {
        res.json(projects);
      });
  },

  one: function (req, res) {
    res.json(req.project);
  },

  post: function (req, res) {
    return sequelize.Project.create(req.body)
      .then(function (project) {
        res.json(project);
      });
  },

  put: function (req, res) {
    if (config.log.debug) {
      console.log(chalk.white('Current Project:', JSON.stringify(req.project, null, 2)));
      console.log(chalk.blue('New Project:', JSON.stringify(req.body, null, 2)));
    }
    return sequelize.Project.findById(req.params.id)
      .then(function (project) {
        return project.updateAttributes(req.body)
          .then(function (project) {
            res.status(200).send(project);
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
    //console.log(req.project);
    return sequelize.Project.findById(req.params.id)
      .then(function (project) {
        return project.destroy()
        .then(function () {
          res.json(project);
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
