// router/api.js
const express = require('express');
const router = express.Router();
const controller = require('../controller/functions');


// Login route
router.post('/login', controller.login);

module.exports = router;
