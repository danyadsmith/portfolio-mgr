const _ = require('lodash');
const config = require('../../config');
const sequelize = require('../../config/db');

module.exports = {
  param: function (req, res, next, id) {
    return sequelize.Category.findById(id)
      .then(function (category) {
        if (category) {
          req.category = category.dataValues;
          //console.log(req.category);
          next(category);
        } else {
          next(new Error('No category with that id'));
        }
      });
  },

  get: function (req, res) {
    return sequelize.Category.findAll()
      .then(function (categories) {
        res.json(categories);
      })
  },

  one: function (req, res) {
    var category = req.category;
    res.json(category);
  },

  post: function (req, res) {
    return sequelize.Category.create(req.body)
      .then(function (category) {
        res.json(category);
      });
  },

  put: function (req, res) {
    return sequelize.Category.findById(req.params.id)
      .then(function (category) {
        if (!category) {
          res.status(404).send({message: 'Category not found'});
        }
        return category.update({name: req.body.name})
          .then(() => res.status(200).send(category))
          .catch((error) => res.status(400).send(error));
      });
  },

  delete: function (req, res) {
    console.log(req.category);
    return sequelize.Category.findById(req.category.id)
      .then(function (category) {
        console.log(category);
          category.destroy()
            .then(function (category) {
              if (category && category.deletedAt) {
                res.json(category)
              }
            })
      });
  }

}
