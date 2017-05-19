const chalk = require('chalk');
const config = require('../config');
const express = require('express');
const app = express();


var server = app.listen(config.port, function () {
  console.log('Listening on port ' + config.port);
  server.close(function () {
    console.log(chalk.red('Shutting down server on port ' + config.port));
  });
});
