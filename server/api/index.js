var router = require('express').Router();

router.use('/users', require('./users/routes'));
router.use('/categories', require('./categories/routes'));

module.exports = router;
