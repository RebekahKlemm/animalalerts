const express = require('express');
const db = require('../Database/_db');
// const User = require('../Database/Models/userModel');
const {User, LatLong} = require('../Database/Models/index');

// This router is mounted on /api/users
const router = express.Router();

//This route demonstrates eager loading
router.get('/', function (req, res, next){
    User.findAll({ include: [ LatLong ] })
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
                newUser.setInterests(req.body.interests)
                    .then(res.status(201).send(newUser))

            }
        })
        .catch(next);
});

router.get('/:id', function(req, res, next){
    User.findOne({
        where: {phone: req.params.id}
    })
        .then(function(user){
            // console.log('------------>inside user router /:id, here is user I return from db', user)
            res.send(user);
        })
})


var googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyBFetAhXRcymhUCT9_2_k-nEs8TEkDiOo8'
});

router.get('/:id/latLong', function(req, res, next){
    User.findOne({
        where: {phone: req.params.id}
    })
        .then(function(user){
            // Geocode an address.
            googleMapsClient.geocode({
                address: user.address
            }, function(err, response) {
                if (!err) {
                    res.send(response.json.results[0].geometry.location);
                }
            });
        })

})


//
router.post('/:id/latLong', function (req, res, next){
    User.findOne({
        where: {phone: req.params.id}
    })
        .then(function(user){
            LatLong.create({
                lat: req.body.lat,
                long: req.body.lng
            })
                .then(function(latLong){
                    console.log('~~~~~~~~~~~~~user', user)
                    console.log('~~~~~~~~~~~~~latLong', latLong)
                    user.setLatLong(latLong);
                    console.log('~~~~~~~~~~~~~user AFTER LATLONG', user)

                    return latLong;
                })
                .then(latLong => res.send(latLong))
            }
        )
});


const OpenStates = require('openstates');

var openstates = new OpenStates('abc');

router.get('/:id/legislators', function(req, res, next){
    User.findOne({
        where: {phone: req.params.id}
    })
        .then(function(user){
            user.getLatLong()
                .then(function (latLong){
                    console.log('user.getLatLong', latLong)
                    return latLong;
                })
                .then(function(latLong){
                    openstates.geoLookup(latLong.lat, latLong.long, function(err, json) {
                        if (err) throw err;
                        res.send(json);
                    });
                })

        })


})


//this takes an array, where the first object is the user, and the second is a string that identifies the new role
router.post('/changeUserRole', function (req, res, next){
    User.findOne({
        where: {phone: req.body[0].phone}
    })
        .then(function(user) {
            return user.update({
                role: req.body[1]
            })
        }).then(user => res.send(user));
});


//this takes an array, where the first object is the oldUser, and the second is the newUser
router.post('/edit', function (req, res, next){
    User.findOne({
        where: {phone: req.body[0].phone}
    })
        .then(function(user){
            return user.update({
                firstName: req.body[1].first,
                lastName: req.body[1].last,
                address: req.body[1].address,
                password: req.body[1].password
            })
        }).then(function(user) {
            //geocode the new address
             googleMapsClient.geocode({
                address: user.address
            }, function(err, response) {
                if (!err) {
                    res.send(response.json.results[0].geometry.location);
                }
            })
        })
    // res.send(user)
});


module.exports = router;
