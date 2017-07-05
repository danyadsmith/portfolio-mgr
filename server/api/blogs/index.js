var router = require('express').Router();
var auth = require('../../auth/authHelpers');

router.use('/categories', require('./categories/routes'));
router.use('/posts', require('./posts/routes'));

module.exports = router;
