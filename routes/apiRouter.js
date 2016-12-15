const express = require('express');
const db = require('../Database/_db');
const User = require('../Database/Models/userModel');

// This router is mounted on /api
const router = express.Router();


router.get('/users', function (req, res, next){
    User.findAll()
        .then(function(users){
            res.send(users);
        })
});


router.post('/signup', function (req, res, next){
    console.log('in API route');
    User.create({
            firstName: req.body.first,
            lastName: req.body.last,
            address: req.body.address,
            phone: req.body.phone,
            password: req.body.password
        })
        .then(function(newUser){
            if (newUser){
                res.status(201).send(newUser);
            }
        })
        .catch(next);
});

module.exports = router;