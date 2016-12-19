
const express = require('express');
const db = require('../Database/_db');

// This router is mounted on /api
const router = express.Router();
const users = require('./users');
const alerts = require('./alerts');
const interests = require('./interests');


router.use('/users', users);
router.use('/alerts', alerts);
router.use('/interests', interests);


module.exports = router;
