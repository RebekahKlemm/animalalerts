var Sequelize = require('sequelize');
var db = require('../_db');

var alertSchema = {
    body: {
        type: Sequelize.STRING,
        allowNull: false
    }
};


var alertConfig = {};

const Alert = db.define('alert', alertSchema, alertConfig);




module.exports = Alert;
