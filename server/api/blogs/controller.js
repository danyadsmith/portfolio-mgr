const chalk = require('chalk');
const config = require('../../config');
const sequelize = require('../../config/db');

module.exports = {
  param: function (req, res, next) {
    return sequelize.Blog.findById(req.params.id)
      .then(function (data) {
        if (data) {
          req.blog = data.dataValues;
          //console.log(req.blog);
          next();
        } else {
          var error = new Error('There is no blog with that id');
          next(error);
        }
      });
  },

  get: function (req, res) {
    return sequelize.Blog.findAll()
      .then(function (blogs) {
        res.json(blogs);
      });
  },

  one: function (req, res) {
    res.json(req.blog);
  },

  post: function (req, res) {
    return sequelize.Blog.create(req.body)
      .then(function (blog) {
        res.json(blog);
      });
  },

  put: function (req, res) {
    if (config.log.debug) {
      console.log(chalk.white('Current Blog:', JSON.stringify(req.blog, null, 2)));
      console.log(chalk.blue('New Blog:', JSON.stringify(req.body, null, 2)));
    }
    return sequelize.Blog.findById(req.params.id)
      .then(function (blog) {
        return blog.updateAttributes(req.body)
          .then(function (blog) {
            res.status(200).send(blog);
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
    //console.log(req.blog);
    return sequelize.Blog.findById(req.params.id)
      .then(function (blog) {
        return blog.destroy()
        .then(function () {
          res.json(blog);
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
