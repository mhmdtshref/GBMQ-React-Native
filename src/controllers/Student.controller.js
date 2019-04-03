const jwt = require('jsonwebtoken');
const Student = require('../models/Student.model');
const Quiz1Mark = require('../models/Quiz1Mark.model');
const Quiz2Mark = require('../models/Quiz2Mark.model');
const StudentsChoice = require('../models/StudentsChoice.model');

require('env2')('config.env');

const { SECRET } = process.env;

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
    if (!student) {
      reject(new Error('Student Not Found!'));
    } else {
      resolve(student);
    }
  }).catch((err) => {
    reject(err);
  });
});

const checkAuth = req => new Promise((resolve, reject) => {
  const hashedId = req.cookies.id;

  if (!hashedId) {
    resolve(false);
  } else {
    jwt.verify(hashedId, SECRET, (verifyError, decoded) => {
      if (verifyError || !decoded) {
        reject(new Error('0'));
      } else {
        req.studentId = decoded;
        resolve(decoded);
      }
    });
  }
});

const findStudentById = studentId => new Promise((resolve, reject) => {
  Student.findOne({ where: { id: studentId.id } }).then((student) => {
    if (!student) {
      reject(new Error('0'));
    } else {
      resolve(student.dataValues);
    }
  }).catch((err) => {
    reject(err);
  });
});

const checkQuiz2 = student => new Promise((resolve, reject) => {
  Quiz2Mark.findOne({ where: { stdid: student.id }, attributes: ['stdid', 'mark', 'username'] })
    .then((studentMark) => {
      if (!studentMark) {
        resolve(student);
      } else {
        reject(new Error('3'));
      }
    })
    .catch((err) => {
      reject(err);
    });
});

const checkQuiz1 = student => new Promise((resolve, reject) => {
  Quiz1Mark.findOne({ where: { stdid: student.id }, attributes: ['stdid', 'mark', 'username'] })
    .then((studentMark) => {
      if (!studentMark) {
        resolve();
      } else {
        reject(new Error('2'));
      }
    })
    .catch((err) => {
      reject(err);
    });
});

const getStudentQuiz1Date = studentId => new Promise((resolve, reject) => {
  StudentsChoice.findOne({ studentid: studentId })
    .then((studentChoice) => {
      if (!studentChoice) {
        reject(new Error('1'));
      } else {
        resolve(studentChoice.createdAt);
      }
    })
    .catch((err) => {
      reject(err);
    });
});

const checkState = (req, res) => {
  checkAuth(req)
    .then(findStudentById)
    .then(checkQuiz2)
    .then(checkQuiz1)
    .then(() => new Promise((resolve, reject) => {
      reject(new Error(1));
    }))
    .catch((err) => {
      switch (err.message) {
        case '0':
          res.json({ success: true, data: { studentState: 0 } });
          break;
        case '1':
          res.json({ success: true, data: { studentState: 1 } });
          break;
        case '2':
          getStudentQuiz1Date(req.studentId)
            .then((createdAt) => {
              res.json({ success: true, data: { studentState: 2, quiz1Date: createdAt } });
            })
            .catch((getQuizErr) => {
              res.json({ success: false, error: getQuizErr.message });
            });
          break;
        default:
          res.json({ success: false, error: err.message });
      }
    });
};

module.exports = {
  create,
  findStudentByUsername,
  checkState,
};
