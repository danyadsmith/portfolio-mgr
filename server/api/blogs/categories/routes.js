var router = require('express').Router();
var controller = require('./controller');
var auth = require('../../../auth/authHelpers');

router.route('/')
  .get(controller.get);

router.route('/:id')
  .get(controller.one);

router.route('/:id/:limit/:offset')
  .get(controller.limit);

module.exports = router;
