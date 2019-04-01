const Sequelize = require('sequelize-views-support');
const sequelize = require('./sequelize.js');

const Admin = sequelize.define('admins', {
  username: { type: Sequelize.STRING(255), allowNull: false },
  password: { type: Sequelize.STRING(255), allowNull: false },
  name: { type: Sequelize.STRING(255), allowNull: false },
});

module.exports = Admin;
