const chalk = require('chalk');
const config  = require('../config');
const twilio  = require('twilio');

var accountSid = config.twilio.account_sid;
var authToken = config.twilio.auth_token;

if(config.log.info) {
  console.log(chalk.white('Testing Twilio Configuration.......'));
  console.log('Account SID:', chalk.yellow(config.twilio.account_sid));
  console.log('Auth Token:', chalk.yellow(config.twilio.auth_token));
  console.log('Twilio Phone:', chalk.yellow(config.twilio.account_phone));
  console.log('Text To:', chalk.yellow(config.twilio.user_phone));
}

var client = new twilio(accountSid, authToken);

var sendMessage = function (message) {
  client.messages.create({
    body: message,
    to: config.twilio.user_phone,  // Text this number
    from: config.twilio.account_phone // From a valid Twilio number
  })
  .then(function (message) {
    if(config.log.info) {
      console.log(chalk.white('Twilio Message Sent.......'));
      console.log(chalk.yellow('SID:', message.sid));
    }
  });
};

module.exports = {
  sendMessage: sendMessage
};
