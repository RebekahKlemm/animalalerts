/**
 * Created by rebekahklemm on 12/21/16.
 */
const express = require('express');
const db = require('../Database/_db');
const {User, LatLong} = require('../Database/Models/index');

// This router is mounted on /api/addressDetails
const router = express.Router();

router.get('/', function (req, res, next){
    LatLong.findAll()
        .then(function(latLong){
            res.send(latLong);
        })
});

module.exports = router;
