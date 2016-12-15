const express = require('express');
const db = require('../Database/_db');
const Message = require('../Database/Models/messageModel');

// This router is mounted on /api/messages
const router = express.Router();


router.get('/', function (req, res, next){
    Message.findAll()
        .then(function(messages){
            res.send(messages);
        })
});

module.exports = router;

