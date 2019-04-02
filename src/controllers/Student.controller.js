const Student = require('../models/Student.model');

const create = (student) => {
  const {
    username, password, age, gender, english, postcode,
  } = student;
  return Student.create({
    username, password, age, gender, english, postcode, raw: true,
  });
};


const findStudentByUsername = username => Student.findOne({
  where: { username },
  raw: true,
});


module.exports = {
  create,
  findStudentByUsername,
};
