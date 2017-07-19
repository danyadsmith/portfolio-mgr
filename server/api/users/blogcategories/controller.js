const chalk = require('chalk');
const config = require('../../../config');
const sequelize = require('../../../db');
const Sequelize = require('../../../db').Sequelize;

module.exports = {
  param: function (req, res, next) {
    return sequelize.Category.findById(req.params.id)
      .then(function (data) {
        if (data) {
          req.category = data.dataValues;
          //console.log(req.category);
          next();
        } else {
          var error = new Error('There is no blog category with that id');
          next(error);
        }
      });
  },

  get: function (req, res) {
    return sequelize.Category.findAll({
      where: {
        id: {
          $in: Sequelize.literal('(SELECT DISTINCT "CategoryId" FROM "BlogCategories" WHERE "BlogId" IN (SELECT DISTINCT "id" FROM "Blogs" WHERE "UserId" = ' + req.user.id + ' AND "published" = true))')
        }
      },
      order: [
        ['name', 'ASC']
      ]
    })
      .then(function (categories) {
        //console.log(req.user.id);
        res.json(categories);
      });
  },

  one: function (req, res) {
    res.json(req.category);
  },

  post: function (req, res) {
    return sequelize.BlogCategory.create(req.body)
      .then(function (category) {
        res.json(category);
      });
  },

  delete: function (req, res) {
    console.log(req.body);
    return sequelize.BlogCategory.findOne(req.body)
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
