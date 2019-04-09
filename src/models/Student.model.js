const Sequelize = require('sequelize-views-support');
const sequelize = require('./sequelize.js');

const Student = sequelize.define(
  'students',
  {
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        fn(val) {
          if (val === '') throw new Error('Please insert your username');
        },
        isUnique(value, next) {
          Student.find({
            where: {
              username: value,
            },
          }).then((result) => {
            if (result === null) {
              return next();
            }
            return next(' Username already exist');
          }).catch(err => next(err));
        },
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: { args: 6, msg: 'Password must be at least 6 characters' },
      },
    },
    age: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    gender: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      validate: {
        isBoolean: true,
      },
    },
    english: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      validate: {
        isBoolean: true,
      },
    },
    postcode: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: { args: 2, msg: 'Postcode must be at least 2 characters' },
      },
    },
  },
  { freezeTableName: true },
);
module.exports = Student;
