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
                    user.setLatLong(latLong);
                    return latLong;
                })
                .then(latLong => res.send(latLong))
            }
        )
});


const OpenStates = require('openstates');

var openstates = new OpenStates('abc');


// router.get('/:id/legislators', function(req, res, next){
//     // User.findOne({
//     //     where: {phone: req.params.id}
//     // })
//     //     .then(function(user){
//             openstates.legDetail('NCL000173', function(err, json) {
//                 if (err) throw err;
//                 res.send(json);
//             });
//     // })
//
//
// })

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
                    // openstates.geoLookup(44.5212, -89.5218, function(err, json) {
                    openstates.geoLookup(latLong.lat, latLong.long, function(err, json) {
                        if (err) throw err;
                        res.send(json);
                    });
                })

        })


})

// Lookup all legislators that serve districts containing a given point
// OpenStates.prototype.geoLookup = function(lat, long, callback) {
//     var params = {
//         lat: lat,
//         long: long
//     };
//     this.makeRequest('legislators/geo', params, callback);
// };


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


module.exports = router;
