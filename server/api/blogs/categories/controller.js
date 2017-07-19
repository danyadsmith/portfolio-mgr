const chalk = require('chalk');
const config = require('../../../config');
const sequelize = require('../../../db');
const Sequelize = require('../../../db').Sequelize;

module.exports = {


  one: function (req, res) {
    return sequelize.Blog.findAll({
      include: [
        {
          model: sequelize.User,
          attributes: ['firstName', 'middleName', 'lastName', 'displayName'],
          as: 'author'
        },
        {
          model: sequelize.Category,
          where: { id: { $any: [ Number(req.params.id) ] } }
        }
      ],
      attributes: {
        exclude: ['UserId']
      },
      order: [
        [ 'datePublished', 'DESC']
      ]
    })
      .then(function (blogs) {
        //console.log(req.user.id);
        res.json(blogs);
      });
  },

  get: function (req, res) {
    return sequelize.Category.findAll({
      where: {
        id: {
          $in: Sequelize.literal('(SELECT DISTINCT "CategoryId" FROM "BlogCategories" WHERE "BlogId" IN (SELECT DISTINCT "id" FROM "Blogs" WHERE "published" = true))')
        }
      },
      order: [
        ['name', 'ASC']
      ]
    })
      .then(function (categoriesByName) {
        //console.log(req.user.id);
        res.json(categoriesByName);
      });
  }
};
