const bcrypt = require('bcryptjs');
const { setCookies } = require('./setCookiesController');

const Student = require('../../models/Student.model.js');


// Sign in
const findStudent = username => Student.findOne({
  where: { username },
  raw: true,
});

const comparePassword = (password, student) => new Promise((resolve, reject) => {
  if (!student) {
    reject(new Error('username not found'));
  } else {
    bcrypt.compare(password, student.password, (compareErr, MatchedPasswords) => {
      if (MatchedPasswords) {
        resolve();
      }
      reject(new Error('Password does not match'));
    });
  }
});

const login = (req, res) => {
  const { username, password } = req.body;
  findStudent(username)
    .then(student => comparePassword(password, student))
    .then(() => setCookies(username))
    .then(token => res.cookie('logged_in', token, { maxAge: 999999999 }).json({ success: true }))
    .catch((err) => {
      if (err.message.includes('username') || (err.message).includes('Password does not match')) {
        res.json({ success: false, error: err.message });
      } else {
        res.json({ success: false, error: 'There is a problem, try again!' });
      }
    });
};

module.exports = login;
