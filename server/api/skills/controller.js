const chalk = require('chalk');
const config = require('../../config');
const sequelize = require('../../db');

module.exports = {
  param: function (req, res, next) {
    return sequelize.Skill.findById(req.params.id)
      .then(function (data) {
        if (data) {
          req.skill = data.dataValues;
          //console.log(req.skill);
          next();
        } else {
          var error = new Error('There is no skill with that id');
          next(error);
        }
      });
  },

  get: function (req, res) {
    return sequelize.Skill.findAll()
      .then(function (skills) {
        res.json(skills);
      });
  },

  one: function (req, res) {
    res.json(req.skill);
  },

  post: function (req, res) {
    var skill = req.body;
    return sequelize.Skill.create(skill)
      .then(function (skill) {
        res.json(skill);
      });
  },

  put: function (req, res) {
    if (config.log.debug) {
      console.log(chalk.white('Current Skill:', JSON.stringify(req.skill, null, 2)));
      console.log(chalk.blue('New Skill:', JSON.stringify(req.body, null, 2)));
    }
    return sequelize.Skill.findById(req.params.id)
      .then(function (skill) {
        return skill.updateAttributes(req.body)
          .then(function (skill) {
            res.status(200).send(skill);
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
    //console.log(req.skill);
    return sequelize.Skill.findById(req.params.id)
      .then(function (skill) {
        return skill.destroy()
        .then(function () {
          res.json(skill);
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
