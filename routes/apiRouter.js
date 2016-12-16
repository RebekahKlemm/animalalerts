
const express = require('express');
const db = require('../Database/_db');

// This router is mounted on /api
const router = express.Router();
const users = require('./users');
const alerts = require('./alerts');


router.use('/users', users);
router.use('/alerts', alerts);


module.exports = router;
