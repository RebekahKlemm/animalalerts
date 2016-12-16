const express = require('express');
const db = require('../Database/_db');
const Alert = require('../Database/Models/alertModel');

// This router is mounted on /api/alerts
const router = express.Router();


router.get('/', function (req, res, next){
    Alert.findAll()
        .then(function(alerts){
            res.send(alerts);
        })
});

router.get('/:id', function(req, res, next){
    Alert.findAll({
        where: {to: req.params.id}
    })
        .then(function(alerts){
            res.send(alerts);
        })
})

module.exports = router;

