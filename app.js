const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
const db = require('./Database/_db');

const app = express();
const User = require('./Database/Models/userModel');
const Message = require('./Database/Models/messageModel');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const apiRouter = require('./routes/apiRouter');

//here are my API routes
app.use('/api', apiRouter);

//Here is where I serve up the first page
app.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname, './components/index.html'));
});

app.use(function (err, req, res, next) {
    console.error(err, err.stack);
    res.status(err.status || 500).send(err);
});


//Synch the database
// db.sync()
db.sync({force: true})
    .then(function(){
        User.bulkCreate([
            {firstName: 'Joe', lastName: 'Smith', address: '1503 Nicks Dr, Stevens Point, WI 54482', phone: '123', password: '123'},
            {firstName: 'Bill', lastName: 'Johnson', address: '1542 E Military Rd, Superior, WI 54880', phone: '456', password: '456'},
            {firstName: 'Susie', lastName: 'Williams', address: '12700 12th St, Kenosha, WI 53144', phone: '789', password: '789', role: 'admin'}
        ])
    })
    .then(function(){
        Message.bulkCreate([
            {to: '123', from: '789', body: 'Here is an Alert to Joe from Susie'},
            {to: '456', from: '789', body: 'Here is an Alert to Bill from Susie'}
        ])
    })
    .then(function () {
        app.listen(3001, function () {
            console.log('Server is listening on port 3001');
        });
    })
    .catch(console.error);

module.exports = app;