const api = require('./api');
const authRouter = require('./auth/authRoutes.js');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const config = require('./config');
const express = require('express');
const middleware = require('./middleware');
const morgan = require('morgan');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(middleware.auth);

if (config.env !== 'testing') {
  app.use(morgan('dev'));
}

app.use(middleware.headers);

app.use('/api', api)
app.use('/', authRouter);

app.use(function (err, req, res, next) {
  console.error(chalk.red.bold('ERROR: ', err));
  res.send(err);
  next();
});

module.exports = app;
