var router = require('express').Router();

router.use('/categories', require('./categories/routes'));

module.exports = router;
