var router = require('express').Router();

router.use('/categories', require('./categories/routes'));
router.use('/skills', require('./skills/routes'));
router.use('/blogs', require('./blogs/routes'));

module.exports = router;
