var router = require('express').Router();

router.use('/users', require('./users/routes'));
router.use('/categories', require('./categories/routes'));
router.use('/types', require('./types/routes'));
router.use('/messages', require('./messages/routes'));
router.use('/blogs', require('./blogs/index'));

module.exports = router;
