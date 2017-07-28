const chalk = require('chalk');
const config  = require('../config');
const nodemailer = require('nodemailer');

var sendMail = function (req, res) {
  var name = req.body.name;
  var from = req.body.email;
  var subject = req.body.subject;
  var message = req.body.message;
  var to = config.owner.email;
  var smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: config.owner.email,
      pass: config.owner.password
    }
  });
  var mailOptions = {
    from: from,
    to: to,
    cc: from,
    replyTo: from,
    subject: '[SingularBrand.io Contact Form] ' + subject,
    text: name + '(' + from + ') just submitted the following message:\n\n' + message
  };
  smtpTransport.sendMail(mailOptions, function (error, res) {
    if (error) {
      console.log(error);
    }
    if (config.log.debug) {
      console.log(res);
    }
  });
};

module.exports = {
  sendMail: sendMail
};
