const Sequelize = require('sequelize-views-support');
const sequelize = require('./sequelize.js');

const Activity = sequelize.define('activities', {
    key: { type: Sequelize.STRING(255), allowNull: false },
    day: { type: Sequelize.INTEGER, allowNull: false, unique: true },
    link: { type: Sequelize.STRING(255), allowNull: false },
    description: { type: Sequelize.STRING(255), allowNull: true },
});

module.exports = Activity;
