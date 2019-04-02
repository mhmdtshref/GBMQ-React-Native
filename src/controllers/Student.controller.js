const Student = require('../models/Student.model');

const create = (student) => {
  const {
    username, password, age, gender, english, postcode,
  } = student;
  return Student.create({
    username, password, age, gender, english, postcode, raw: true,
  });
};


const findStudentByUsername = username => new Promise((resolve, reject) => {
    Student.findOne({
        where: { username },
        raw: true,
    }).then((student) => {
        if(!student){
          reject(new Error('Student Not Found!'));
        } else {
          resolve(student);
        }
    }).catch((err) => {
      reject(err);
    });
});


module.exports = {
  create,
  findStudentByUsername,
};
