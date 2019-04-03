const Sequelize = require('sequelize-views-support');
const sequelize = require('./sequelize.js');

const Admin = sequelize.define('admins', {
  username: { type: Sequelize.STRING, allowNull: false },
  password: { type: Sequelize.STRING, allowNull: false },
  name: { type: Sequelize.STRING, allowNull: false },
});

module.exports = Admin;
