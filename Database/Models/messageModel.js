var Sequelize = require('sequelize');
var db = require('../_db');

var messageSchema = {
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


var messageConfig = {};



const Message = db.define('message', messageSchema, messageConfig);

module.exports = Message;
