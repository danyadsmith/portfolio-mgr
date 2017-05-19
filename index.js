var app = require('./server/server');
var chalk = require('chalk');
var config = require('./server/config');

app.listen(config.port, function () {
  console.log(chalk.blue('PORTFOLIO MANAGER..............................'));
  console.log('Server API is listening on port ' + config.port);
  console.log('Client site accessible at ' + chalk.white(config.url + ":" + config.port));
});
