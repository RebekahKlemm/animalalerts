const express = require('express');
const db = require('../Database/_db');
// const Alert = require('../Database/Models/alertModel');
const {Alert, Interest} = require('../Database/Models/index');


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
    // console.log("got into newAlert route, req body interests", req.body.to)
    var toSend = [];
        Interest.findOne({where:{category: req.body.to}})
            .then(function(interest){
                interest.getUsers()
                    .then(function(users){
                        return users.map(function(user){
                            Alert.create({
                                to: user.dataValues.phone,
                                //might have to be user.dataValues.phone
                                from: req.body.from,
                                body: req.body.body,
                            })
                                .then(function(alert){
                                    interest.addAlert([alert])
                                    toSend.push(alert);
                                    if(toSend.length === users.length){
                                        // console.log('toSend----------->', toSend)
                                        res.send(toSend);
                                    }

                                })
                        })
                    })
                    // .then(function(){
                    //     // console.log('toSend----------->', toSend)
                    //     // res.send(toSend);
                    // })
            })

});


// router.post('/newAlert', function (req, res, next){
//     console.log("got into newAlert route, req body interests", req.body.to)
//     let alerts = [];
//     req.body.to.map(interest =>
//         Interest.findOne({where:{category: interest}})
//         // .then(console.log('here is the interest the database found: ', interest)))
//             .then(interest => interest.getUsers())
//             // .then(users => console.log(users)))
//             .then(users => users.map(function(user){
//                  Alert.create({
//                         to: user.phone,
//                         //might have to be user.dataValues.phone
//                         from: req.body.from,
//                         body: req.body.body,
//                     })
//                         .then(function(alert){
//                             alerts.push(alert)
//                         })
//                      .then(console.log('here is alerts', alerts))
//                 }
//             ))
//             .then(function(){
//                 console.log('AAAAAAAAAlerts', alerts)
//                     res.status(201).send(alerts);
//             })
//             .catch(next)
//     )



    // req.body.interests.map(interest =>
    //     Interest.findOne({where:{category: interest}})
    //         .then(interest => interest.getUsers())
    //         .then(users => users.map(user => Alert.create({
    //             to: user.phone,
    //             from: req.body.from,
    //             body: req.body.body,
    //         })))
    //         .then(function(newAlert){
    //             if (newAlert){
    //                 res.status(201).send(newAlert);
    //             }
    //         })
    // )
    //     .catch(next);
// });


// router.post('/newAlert', function (req, res, next){
//     Alert.create({
//         to: req.body.to,
//         from: req.body.from,
//         body: req.body.body,
//     })
//         .then(function(newAlert){
//             if (newAlert){
//                 res.status(201).send(newAlert);
//             }
//         })
//         .catch(next);
// });


// router.get('/:id', function(req, res, next){
//     Alert.findAll({
//         where: {to: req.params.id}
//     })
//         .then(function(alerts){
//             res.send(alerts);
//         })
// })

module.exports = router;

