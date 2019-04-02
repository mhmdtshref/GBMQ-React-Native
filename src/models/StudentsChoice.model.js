const sequelize = require('./sequelize.js');

const Student = require('./Student.model');
const Choice = require('./Choice.model');

const StudentsChoice = sequelize.define('studentsChoices', {});

StudentsChoice.belongsTo(Student);
StudentsChoice.belongsTo(Choice);

module.exports = StudentsChoice;
