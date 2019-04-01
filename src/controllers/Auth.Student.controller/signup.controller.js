const bcrypt = require('bcryptjs');
const { setCookies } = require('./setCookiesController');
const Student = require('../../models/Student.model.js');


const hashStudentPassword = student => new Promise((resolve, reject) => {
  if (!student) {
    reject(new Error('Student not found'));
  } else {
    bcrypt.hash(student.password, 10, (hashError, hashedPassword) => {
      const newStudent = student;
      newStudent.password = hashedPassword;
      resolve(newStudent);
    });
  }
});

const createStudent = ({
  username, password, age, gender, english, postcode,
}) => Student.create({
  username,
  password,
  age,
  gender,
  english,
  postcode,
  raw: true,
});

const signup = (req, res) => {
  const student = req.body;

  hashStudentPassword(student)
    .then(createStudent)
    .then(() => setCookies(student.username))
    .then(token => res.cookie('logged_in', token, { maxAge: 999999999 }).json({ success: true }))
    .catch((err) => {
      if (err.message.includes('Student not found')) {
        res.json({ success: false, error: err.message });
      } else {
        res.json({ success: false, error: 'There is a problem, try again!' });
      }
    });
};


module.exports = signup;
