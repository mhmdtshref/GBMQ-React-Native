const jwt = require('jsonwebtoken');
const excel = require('exceljs');
const {
  Question, Choice, StudentsView, Admin,
} = require('../models');
require('env2')('config.env');


const createQuestion = (question) => {
  const {
    text, imageUrl, type, quizNo, category,
  } = question;
  return Question.create({
    text,
    imageUrl,
    type,
    quizNo,
    category,
    raw: true,
  });
};

const postQuestion = (req, res) => {
  const {
    choice1, choice2, choice3, choice4, ...question
  } = req.body;
  createQuestion(question)
    .then(createdEquestion => Promise.all(
      [choice1, choice2, choice3, choice4].map((choice) => {
        const choiceObj = JSON.parse(choice);
        choiceObj.questionId = createdEquestion.get('id');
        return Choice.create(choiceObj);
      }),
    ))
    .then(() => {
      res.json({ success: true });
    })
    .catch((err) => {
      res.json({ success: false, error: err.message });
    });
};

const getStatisticsFile = (req, res) => {
  StudentsView.findAll({ attributes: ['username', 'age', 'gender', 'postcode', 'english', 'q1mark', 'q2mark'] })
    .then((students) => {
      const workbook = new excel.Workbook();
      const sheet = workbook.addWorksheet('students-data');
      sheet.addRow(Object.keys(students[0].dataValues));
      students.forEach((student) => {
        sheet.addRow().values = Object.values({ ...student.dataValues, gender: (student.dataValues.gender ? 'Male' : 'Female'), english: (student.dataValues.english ? 'Yes' : 'No') });
      });
      res.set({
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'Content-Disposition': 'attachment; filename=student-data.xlsx',
      });
      workbook.xlsx.write(res).then(() => {
        res.end();
      });

      // console.log(students.map(student => student.dataValues));
    });
};

const findAdmin = username => new Promise((resolve, reject) => {
  Admin.findOne({
    where: { username },
    raw: true,
  }).then((admin) => {
    if (!admin) {
      reject(new Error('User Not Found!'));
    } else {
      resolve(admin);
    }
  }).catch((err) => {
    reject(err);
  });
});

const checkAuth = (req, res) => {
    const { ADMINSECRET } = process.env;
    const hashedId = req.cookies.id;

    if (!hashedId) {
        res.json({
            success: false,
            error: 'Unauthenticated',
        });
    } else {
        jwt.verify(hashedId, ADMINSECRET, (verifyError, decoded) => {
            if (verifyError || !decoded) {
                res.json({
                    success: false,
                    error: verifyError ? verifyError.message : 'Unauthenticated',
                });
            } else {
                res.json({ success: true });
            }
        });
    }
};

module.exports = {
  createQuestion,
  postQuestion,
  getStatisticsFile,
  findAdmin,
  checkAuth
};
