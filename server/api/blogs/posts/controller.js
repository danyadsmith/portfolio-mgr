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
    return sequelize.Blog.findAll({
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
      },
      order: [
        [ 'datePublished', 'DESC']
      ]
    })
      .then(function (blogs) {
        //console.log(req.user.id);
        res.json(blogs);
      });
  }

};
