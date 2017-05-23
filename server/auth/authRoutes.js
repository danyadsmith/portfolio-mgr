var router = require('express').Router();
var controller = require('./authController');

// before we send back a jwt, lets check
// the password and username match what is in the DB
router.post('/signup', controller.signup);

module.exports = router;
