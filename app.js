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
db.sync()
// db.sync({force: true})
//     .then(function(){
//         User.create({
//             firstName: 'Me', lastName: 'Tester', address: 'Somewhere USA', phone: '555-555-5555', password: '12345'})
//     })
//     .then(function(){
//         Message.create({
//             to: 'someone', from: 'me', body: 'Here is a Test Message'})
//     })
    .then(function () {
        app.listen(3001, function () {
            console.log('Server is listening on port 3001');
        });
    })
    .catch(console.error);





module.exports = app;