const chalk = require('chalk');
const config = require('../../../config');
const sequelize = require('../../../db');
const Sequelize = require('../../../db').Sequelize;

module.exports = {


  one: function (req, res) {

    return sequelize.Blog.findAndCountAll({
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
      // attributes: {
      //   exclude: ['UserId']
      // },
      order: [
        [ 'datePublished', 'DESC']
      ]
    })
      .then(function (blogs) {
        //console.log(req.user.id);
        var length = (blogs.count > 3) ? Math.ceil(blogs.count / 3) : 1;
        blogs.pages = Array.apply(null, {length: length })
          .map(Number.call, Number)
          .map(function (page) { return page + 1; });
        res.json(blogs);
      });
  },

  limit: function (req, res) {
    let limit = req.params.limit || 3;
    let offset = req.params.offset || 0;

    return sequelize.Blog.findAndCountAll({
      where: { published: true },
      limit: limit,
      offset: offset,
      distinct: true,
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
      order: [
        [ 'datePublished', 'DESC']
      ]
    })
      .then(function (blogs) {
        blogs.limit = Number(limit);
        blogs.offset = Number(offset);
        blogs.pageCount = (blogs.limit > blogs.count) ? 1 : blogs.count / blogs.limit;
        blogs.page = blogs.offset / blogs.limit + 1;
        blogs.pages = Array.apply(null, {length: blogs.pageCount})
          .map(Number.call, Number)
          .map(function (page) { return page + 1; });
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
