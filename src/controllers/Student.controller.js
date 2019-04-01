const bcrypt = require('bcryptjs');
const Student = require('../models/Student.model.js');


const hashStudentPassword = student => new Promise((resolve, reject) => {
  bcrypt.hash(student.password, 10, (hashError, hashedPassword) => {
    if (hashError) {
      reject(hashError);
    } else {
      const newStudent = student;
      newStudent.password = hashedPassword;
      resolve(newStudent);
    }
  });
});

const createStudent = ({
  username, password, age, gender, english, postcode,
}) => new Promise((resolve, reject) => {
  Student.create({
    username,
    password,
    age,
    gender,
    english,
    postcode,
    raw: true,
  })
    .then(() => {
      resolve();
    })
    .catch((err) => {
      reject(err);
    });
});

const signup = (req, res) => {
  const student = req.body;

  hashStudentPassword(student)
    .then(createStudent)
    .then(() => {
      res.json({ success: true });
    })
    .catch((err) => {
      res.json({ success: false, error: err.message });
    });
};

module.exports = { signup };
