const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
const db = require('./Database/_db');

const app = express();
const User = require('./Database/Models/userModel');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const loginSubRouter = require('./routes/login-router');
// import messagesSubRouter from './routes/messages-router';

app.use('/login', loginSubRouter);
// app.use('/messages', messagesSubRouter);


// app.use('/', express.static(path.resolve(__dirname, '../', 'public')));

app.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname, './components/index.html'));
});

app.use(function (err, req, res, next) {
    console.error(err, err.stack);
    res.status(500).send(err);
});


//Synch your database
db.sync({force: true})  //returns a promise so you can .then off it
    .then(function(){
        User.create({
            firstName: 'Me', lastName: 'Tester', address: 'Somewhere USA', phone: '555-555-5555', password: '12345'})
    })
    .then(function () {
        app.listen(3001, function () {
            console.log('Server is listening on port 3001');
        });
    })
    .catch(console.error);





module.exports = app;