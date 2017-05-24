const chalk = require('chalk');
const config = require('../config');
const helpers = require('./authHelpers');

module.exports = {
  signup: function (req, res, next) {
    helpers.getUser(req.body.username)
      .then(function (user) {
        if (user) {
          if (config.log.info) {
            console.log(chalk.red('[Error] An error occurred on signup. Cannot create account because username already exists.'));
          }
          res.status(409).send({message: 'Cannot create account because username already exists'});
        } else {
          throw new Error('User not found');
        }
      })
      .catch(function (error) {
        if (error.message === 'User not found') {
          helpers.hashPassword(req.body.password)
            .then(function (hash) {
              var user = req.body;
              user.password = hash;
              return helpers.createUser(req.body);
            })
            .then(function (data) {
              var token = helpers.createToken(data);
              if (config.log.info) {
                console.log('Created account for username: ', chalk.white(data.username));
                console.log('Generated token: ', chalk.white(token));
              }
              res.status(201).json({token: token});
            });
        } else {
          next(error);
        }
      });
  },

  signin: function (req, res) {
    if (req.body.username && req.body.password) {
      return helpers.getUser(req.body.username)
        .then(function (user) {
          if (user) {
            return helpers.checkPassword(req, user.dataValues)
              .then(function (valid) {
                if (valid) {
                  var token = helpers.createToken(user);
                  if (config.log.info) {
                    console.log('Sign in successful for: ', chalk.white(user.username));
                    console.log('Refreshed token: ', chalk.white(token));
                  }
                  res.status(200).json({token: token});
                } else {
                  throw new Error('Bad password');
                }
              });
          } else {
            throw new Error('Bad username');
          }
        })
        .catch(function (error) {
          switch (error.message) {
          case 'Bad username':
            if (config.log.info) {
              console.log(chalk.red('[Error] There is no registered user with username: ', req.body.username));
            }
            res.status(401).send({message: 'Invalid username.'});
            break;
          case 'Bad password':
            if (config.log.info) {
              console.log(chalk.red('[Error] Incorrect password submitted for username: ', req.body.username));
            }
            res.status(401).send({message: 'Invalid password.'});
            break;
          default:
            break;
          }
        });
    } else {
      if (config.log.info) {
        console.log(chalk.red('[Error] Visitor did not submit a username or password'));
      }
      res.status(400).send({message: 'You must submit a username and password.'});
    }
  }

};
