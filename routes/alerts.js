const express = require('express');
const db = require('../Database/_db');
// const Alert = require('../Database/Models/alertModel');
const {Alert} = require('../Database/Models/index');


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
        where: {$or:[{to: req.params.id}, {from: req.params.id}]}
    })
        .then(function(alerts){
            res.send(alerts);
        })
})



router.post('/newAlert', function (req, res, next){
    Alert.create({
        to: req.body.to,
        from: req.body.from,
        body: req.body.body,
    })
        .then(function(newAlert){
            if (newAlert){
                res.status(201).send(newAlert);
            }
        })
        .catch(next);
});


// router.get('/:id', function(req, res, next){
//     Alert.findAll({
//         where: {to: req.params.id}
//     })
//         .then(function(alerts){
//             res.send(alerts);
//         })
// })

module.exports = router;

