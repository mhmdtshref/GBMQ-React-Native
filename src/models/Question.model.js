const Sequelize = require('sequelize-views-support');
const sequelize = require('./sequelize.js');

const Question = sequelize.define('questions', {
  text: { type: Sequelize.STRING, allowNull: false },
  imageUrl: { type: Sequelize.STRING, allowNull: false },
  type: { type: Sequelize.BOOLEAN, allowNull: false },
  quizNo: { type: Sequelize.INTEGER, allowNull: false },
});

module.exports = Question;
