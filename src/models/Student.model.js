const Sequelize = require('sequelize');
const sequelize = require('./sequelize.js');


const Student = sequelize.define('students', {
  username: {
    type: Sequelize.STRING(20),
    unique: true,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  gender: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  english: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  postcode: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
}, { freezeTableName: true });
module.exports = Student;
