var router = require('express').Router();
var controller = require('./controller');
var auth = require('../../auth/authHelpers');

router.param('userid', controller.param);

router.route('/')
  .get(controller.get)
  .post(controller.post);

router.route('/:userid')
  .get(controller.one)
  .put(controller.put)
  .delete(controller.delete);

router.use('/:userid/blogs', require('./blogs/routes'));
router.use('/:userid/credentials', require('./credentials/routes'));
router.use('/:userid/jobs', require('./jobs/routes'));
router.use('/:userid/portfolios', require('./portfolios/routes'));
router.use('/:userid/profiles', require('./profiles/routes'));
router.use('/:userid/projects', require('./projects/routes'));
router.use('/:userid/services', require('./services/routes'));
router.use('/:userid/skills', require('./skills/routes'));


module.exports = router;

