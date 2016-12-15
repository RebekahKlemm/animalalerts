const express = require('express');
const db = require('../Database/_db');
const User = require('../Database/Models/userModel');

// This router is mounted on /
const router = express.Router();


router.get('/', function (req, res, next){
    res.send('Check out the signup-router.js file, you ended up here');
});

router.post('/', function (req, res, next){
    User.findOrCreate()
});

module.exports = router;
