const chalk = require('chalk');
const config = require('../../../config');
const sequelize = require('../../../db');

module.exports = {
  param: function (req, res, next) {
    return sequelize.Job.findById(req.params.id)
      .then(function (data) {
        if (data) {
          req.job = data.dataValues;
          //console.log(req.job);
          next();
        } else {
          var error = new Error('There is no job with that id');
          next(error);
        }
      });
  },

  get: function (req, res) {
    if (config.log.info) {
      console.log('User Object:', req.user);
    }
    return sequelize.Job.findAll({where: {UserId: req.user.id}})
      .then(function (jobs) {
        res.json(jobs);
      });
  },

  one: function (req, res) {
    res.json(req.job);
  },

  post: function (req, res) {
    var job = req.body;
    return sequelize.Job.create(job)
      .then(function (job) {
        res.json(job);
      });
  },

  put: function (req, res) {
    if (config.log.debug) {
      console.log(chalk.white('Current Job:', JSON.stringify(req.job, null, 2)));
      console.log(chalk.blue('New Job:', JSON.stringify(req.body, null, 2)));
    }
    return sequelize.Job.findById(req.params.id)
      .then(function (job) {
        return job.updateAttributes(req.body)
          .then(function (job) {
            res.status(200).send(job);
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
    //console.log(req.job);
    return sequelize.Job.findById(req.params.id)
      .then(function (job) {
        return job.destroy()
        .then(function () {
          res.json(job);
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
