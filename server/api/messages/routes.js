var router = require('express').Router();
var controller = require('./controller');
var auth = require('../../auth/authHelpers');

router.route('/')
  .post(controller.post);

module.exports = router;
