const Sequelize = require('sequelize');
const sequelize = require('./sequelize.js');

const StudentsChoice = sequelize.define('studentschoices', {
    studentId: { type: Sequelize.STRING(255), allowNull: false },
    choiceId: { type: Sequelize.STRING(512), allowNull: false },
});

module.exports = StudentsChoice;
