const chalk = require('chalk');
const config = require('../../config');
const sequelize = require('../../db');

module.exports = {
  param: function (req, res, next) {
    return sequelize.Portfolio.findById(req.params.id)
      .then(function (data) {
        if (data) {
          req.portfolio = data.dataValues;
          //console.log(req.portfolio);
          next();
        } else {
          var error = new Error('There is no portfolio with that id');
          next(error);
        }
      });
  },

  get: function (req, res) {
    return sequelize.Portfolio.findAll()
      .then(function (portfolios) {
        res.json(portfolios);
      });
  },

  one: function (req, res) {
    res.json(req.portfolio);
  },

  post: function (req, res) {
    return sequelize.Portfolio.create(req.body)
      .then(function (portfolio) {
        res.json(portfolio);
      });
  },

  put: function (req, res) {
    if (config.log.debug) {
      console.log(chalk.white('Current Portfolio:', JSON.stringify(req.portfolio, null, 2)));
      console.log(chalk.blue('New Portfolio:', JSON.stringify(req.body, null, 2)));
    }
    return sequelize.Portfolio.findById(req.params.id)
      .then(function (portfolio) {
        return portfolio.updateAttributes(req.body)
          .then(function (portfolio) {
            res.status(200).send(portfolio);
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
    //console.log(req.portfolio);
    return sequelize.Portfolio.findById(req.params.id)
      .then(function (portfolio) {
        return portfolio.destroy()
        .then(function () {
          res.json(portfolio);
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
