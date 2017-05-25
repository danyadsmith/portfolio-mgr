var router = require('express').Router();

router.use('/categories', require('./categories/routes'));
router.use('/skills', require('./skills/routes'));

module.exports = router;
