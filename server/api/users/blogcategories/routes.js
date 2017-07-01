var router = require('express').Router();
var controller = require('./controller');
var auth = require('../../../auth/authHelpers');

router.param('id', controller.param);

router.route('/')
  .get(controller.get)
  .post(controller.post)
  .delete(controller.delete);

router.route('/:id')
  .get(controller.one);

module.exports = router;
