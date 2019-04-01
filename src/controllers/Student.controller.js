const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('env2')('config.env');

const Student = require('../models/Student.model.js');

const { SECRET } = process.env;

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

// Login
const findStudent = username => new Promise((resolve, reject) => {
  Student.findOne({
    where: { username },
    raw: true,
  }).then((user) => {
    if (!user) {
      reject(new Error('No user found'));
    } else {
      resolve(user);
    }
  })
    .catch((err) => {
      reject(err);
    });
});

const comparePassword = (username, password, student) => new Promise((resolve, reject) => {
  bcrypt.compare(password, student.password, (compareErr, MatchedPasswords) => {
    if (compareErr) {
      reject(compareErr);
    } if (MatchedPasswords) {
      const token = jwt.sign({ username }, SECRET);
      resolve(token);
    } else {
      reject(new Error('Password does not match'));
    }
  });
});

const login = (req, res) => {
  const { username, password } = req.body;
  findStudent(username)
    .then(student => comparePassword(username, password, student))
    .then((token) => {
      res.cookie('logged_in', token, { maxAge: 999999999 }).json({ success: true, token });
    })
    .catch((err) => {
      res.json({ success: false, error: err.message });
    });
};

module.exports = { signup, login };
