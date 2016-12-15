
const express = require('express');
const db = require('../Database/_db');

// This router is mounted on /api
const router = express.Router();
const users = require('./users');
const messages = require('./messages');


router.use('/users', users);
router.use('/messages', messages);


module.exports = router;
