'use strict';

const Alert = require('./alertModel');
const Interest = require('./interestModel');
const User = require('./userModel');
const LatLong = require('./latLongModel');

// Many-to-Many
User.belongsToMany(Interest, {through: 'userInterest'});
Interest.belongsToMany(User, {through: 'userInterest'});

Interest.belongsToMany(Alert, {through: 'interestAlert'});
Alert.belongsToMany(Interest, {through: 'interestAlert'});

User.belongsToMany(Alert, {through: 'userAlert'});
Alert.belongsToMany(User, {through: 'userAlert'});

//One-to-Many
//Each user has only one state senator, and each senator has multiple users... but I'm not storing the legislators
//info in the database, so you don't see that model explicitly.  But it's here.  :-)

//One-to-one
User.belongsTo(LatLong);


module.exports = {
    User: User,
    Interest: Interest,
    Alert: Alert,
    LatLong: LatLong
};
