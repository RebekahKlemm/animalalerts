'use strict';

const Alert = require('./alertModel');
const Interest = require('./interestModel');
const User = require('./userModel');

// Form the associations
User.belongsToMany(Interest, {through: 'userInterest'});
Interest.belongsToMany(User, {through: 'userInterest'});

Interest.belongsToMany(Alert, {through: 'interestAlert'});
Alert.belongsToMany(Interest, {through: 'interestAlert'});

// User.belongsToMany(Alert, {through: 'userAlert'});
// Alert.belongsToMany(User, {through: 'userAlert'});



// exported just in case, but can also be fetched via db.model

module.exports = {
    User: User,
    Interest: Interest,
    Alert: Alert,
};
