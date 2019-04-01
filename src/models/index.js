const sequelize = require('./sequelize');
const Question = require('./Question.model');
const Student = require('./Student.model');
const StudentsChoice = require('./StudentsChoice.model');
const Admin = require('./Admin.model');
const Quiz1Mark = require('./Quiz1Mark.model');
const Choice = require('./Choice.model');
const Quiz2Mark = require('./Quiz2Mark.model');

module.exports = {
  Question, Student, Choice, StudentsChoice, Admin, Quiz1Mark, Quiz2Mark, sequelize,
};
