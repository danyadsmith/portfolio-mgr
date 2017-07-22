//const auth = require('./authentication');
const headers = require('./headers');
const mailer = require('./mailer');
const messenger = require('./messenger');

module.exports = {
  //auth: auth.authenticate,
  headers: headers.headers,
  messenger: messenger,
  mailer: mailer
};
