const express = require('express');
const db = require('../Database/_db');
// const User = require('../Database/Models/userModel');
const {User, LatLong} = require('../Database/Models/index');

// This router is mounted on /api/users
const router = express.Router();


router.get('/', function (req, res, next){
    User.findAll()
        .then(function(users){
            // console.log('inside router.get in users, here is users', users)
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
            openstates.geoLookup(44.5212, -89.5218, function(err, json) {
                if (err) throw err;
                res.send(json);
            });
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


module.exports = router;
