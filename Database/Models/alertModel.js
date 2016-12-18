var Sequelize = require('sequelize');
var db = require('../_db');

var alertSchema = {
    to: {
        type: Sequelize.STRING,
        allowNull: false
    },
    from: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.STRING,
        allowNull: false
    }
};


var alertConfig = {};

const Alert = db.define('alert', alertSchema, alertConfig);




module.exports = Alert;
