var router = require('express').Router();
var controller = require('./controller');
var auth = require('../../../auth/authHelpers');

router.param('id', controller.param);

router.route('/')
  .get(controller.get)
  .post(controller.post);

router.route('/:id')
  .get(controller.one)
  .put(controller.put)
  .delete(controller.delete);

module.exports = router;
