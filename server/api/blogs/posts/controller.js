const chalk = require('chalk');
const config = require('../../../config');
const sequelize = require('../../../db');
const Sequelize = require('../../../db').Sequelize;

module.exports = {

  one: function (req, res) {
    return sequelize.Blog.findById(req.params.id, {
      include: [
        {
          model: sequelize.User,
          attributes: ['firstName', 'middleName', 'lastName', 'displayName'],
          as: 'author'
        },
        {
          model: sequelize.Category
        }
      ],
      attributes: {
        exclude: ['UserId']
      }
    })
      .then(function (blog) {
        res.json(blog);
      });
  },

  get: function (req, res) {
    return sequelize.Blog.findAndCountAll({
      where: { published: true },
      distinct: true,
      include: [
        {
          model: sequelize.User,
          attributes: ['firstName', 'middleName', 'lastName', 'displayName'],
          as: 'author'
        },
        {
          model: sequelize.Category
        }
      ],
      order: [
        [ 'datePublished', 'DESC']
      ]
    })
      .then(function (blogs) {
        res.json(blogs);
      });
  },

  limit: function (req, res) {
    let limit = req.params.limit || 3;
    let offset = req.params.page * limit - limit || 0;

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
          model: sequelize.Category
        }
      ],
      order: [
        [ 'datePublished', 'DESC']
      ]
    })
      .then(function (blogs) {
        blogs.limit = limit;
        blogs.offset = offset;
        blogs.page = req.query.page || 1;
        res.json(blogs);
      });
  }

};
