const chalk = require('chalk');
const config = require('../../config');
const sequelize = require('../../db');
const twilio = require('../../middleware/').messenger;
const mailer = require('../../middleware/').mailer;

module.exports = {
  post: function (req, res) {
    return sequelize.Message.create(req.body)
      .then(function (message) {
        var textMsg = 'A site visitor sent a message from ' + config.url + '\n\n';
        textMsg += 'From: ' + message.name + '\n';
        textMsg += 'Subject: ' + message.subject + '\n';
        textMsg += 'Email: ' + message.email + '\n\n';
        textMsg += message.message + '\n';
        twilio.sendMessage(textMsg);
        mailer.sendMail(req, res);
        res.json(message);
      });
  }
};
