const Sequelize = require('sequelize');
const sequelize = require('./sequelize.js');

const Choice = sequelize.define('choices', {
    text: { type: Sequelize.STRING(255), allowNull: false },
    isRight: { type: Sequelize.BOOLEAN, allowNull: false },
    questionId: { type: Sequelize.INTEGER, allowNull: false },
});

module.exports = Choice;
