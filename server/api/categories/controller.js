const chalk = require('chalk');
const config = require('../../config');
const sequelize = require('../../db');

module.exports = {
  param: function (req, res, next) {
    return sequelize.Category.findById(req.params.id)
      .then(function (data) {
        if (data) {
          req.category = data.dataValues;
          //console.log(req.category);
          next();
        } else {
          var error = new Error('There is no category with that id');
          next(error);
        }
      });
  },

  get: function (req, res) {
    return sequelize.Category.findAll()
      .then(function (categories) {
        res.json(categories);
      });
  },

  one: function (req, res) {
    res.json(req.category);
  },

  post: function (req, res) {
    return sequelize.Category.create(req.body)
      .then(function (category) {
        res.json(category);
      });
  },

  put: function (req, res) {
    if (config.log.debug) {
      console.log(chalk.white('Current Category:', JSON.stringify(req.category, null, 2)));
      console.log(chalk.blue('New Category:', JSON.stringify(req.body, null, 2)));
    }
    return sequelize.Category.findById(req.params.id)
      .then(function (category) {
        return category.updateAttributes(req.body)
          .then(function (category) {
            res.status(200).send(category);
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
    //console.log(req.category);
    return sequelize.Category.findById(req.params.id)
      .then(function (category) {
        return category.destroy()
        .then(function () {
          res.json(category);
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
