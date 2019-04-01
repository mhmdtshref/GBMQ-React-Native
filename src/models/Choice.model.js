const Sequelize = require('sequelize-views-support');
const sequelize = require('./sequelize.js');

const Question = require('./Question.model');

const Choice = sequelize.define('choices', {
  text: { type: Sequelize.STRING(255), allowNull: false },
  isRight: { type: Sequelize.BOOLEAN, allowNull: false },
});

Choice.belongsTo(Question);

module.exports = Choice;
