const express = require('express');
const db = require('../Database/_db');
const User = require('../Database/Models/userModel');

// This router is mounted on /api/users
const router = express.Router();


router.get('/', function (req, res, next){
    User.findAll()
        .then(function(users){
            res.send(users);
        })
});


router.post('/signup', function (req, res, next){
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

router.get('/:id', function(req, res, next){
    User.findOne({
        where: {phone: req.params.id}
    })
        .then(function(user){
            res.send(user);
        })
})

module.exports = router;
