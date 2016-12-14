const express = require('express');
const db = require('../Database/_db');
// const User = db.model('user');

// This router is mounted on /login
const router = express.Router();

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();


router.get('/', function (req, res, next){
    res.send('This is where my login page (Component?) will go');
});

module.exports = router;
