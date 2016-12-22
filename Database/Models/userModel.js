var Sequelize = require('sequelize');
var db = require('../_db');

var userSchema = {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    role: {
        type: Sequelize.STRING,
        defaultValue: 'user'
    },
};


var userConfig = {
    hooks: {
        beforeValidate: function (user) {
            var googleMapsClient = require('@google/maps').createClient({
                key: 'AIzaSyBFetAhXRcymhUCT9_2_k-nEs8TEkDiOo8'
            });
            googleMapsClient.geocode({
                address: user.address
            }, function(err, response) {
                if (response.json.results.length === 0) {
                    Sequelize.Promise.reject("You must enter a valid U.S. address")
                        .catch(err)
                }
            })
        }
    },
    // getterMethods: {
    //     latLongRoute: function () {
    //         return '/api/users/' + this.phone + '/latLong';
    //     }
    // }

};



const User = db.define('user', userSchema, userConfig);

module.exports = User;
