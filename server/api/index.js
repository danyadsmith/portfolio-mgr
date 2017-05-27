var router = require('express').Router();

router.use('/blogs', require('./blogs/routes'));
router.use('/categories', require('./categories/routes'));
router.use('/credentials', require('./credentials/routes'));
router.use('/jobs', require('./jobs/routes'));
router.use('/projects', require('./projects/routes'));
router.use('/services', require('./services/routes'));
router.use('/skills', require('./skills/routes'));

module.exports = router;
