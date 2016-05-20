var express = require('express');
var auth = require('./db/auth');

var router = express.Router();

// Authentication Routes
router.post('/auth/user-login', auth.login);
router.post('/auth/user-create', auth.create);
router.get('/auth/logout', auth.logout);

module.exports = router;