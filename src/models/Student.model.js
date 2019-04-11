const Sequelize = require('sequelize-views-support');
const sequelize = require('./sequelize.js');

const Student = sequelize.define(
  'students',
  {
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
          len: { args: 3, msg: 'Username should be at least 3 characters' },
          isUnique: (value, next) => {
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
    },
    age: {
      type: Sequelize.INTEGER,
      allowNull: false,
        validate: {
          isInt: { args: true, msg: 'Age should be a integer number'},
            min: { args: 14, msg: 'Minimum valid age is 14' },
            max: { args: 18, msg: 'Maximum valid age is 18' },
        }
    },
    gender: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      validate: {
        isBoolean: { args: true, msg: 'Gender must be a boolean value!'},
      },
    },
    english: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      validate: {
        isBoolean: { args: true, msg: 'English must be a boolean value'},
      },
    },
    postcode: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
          is: { args: /^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z])))) [0-9][A-Za-z]{2})$/,
          msg: 'Post code is not right'
        },
      },
    },
  },
  { freezeTableName: true },
);
module.exports = Student;
