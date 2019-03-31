const bcrypt = require('bcryptjs');
const { Student } = require('../models/Student.model.js');

exports.postStudent = (req, res) => {
  const {
    username,
    password,
    age,
    gender,
    english,
    postcode,
  } = req.body;

  Student.findOne({
    where: {
      username,
    },
    attributes: ['username'],
    raw: true,
  })
    .then((result) => {
      if (!result) {
        res.json({ error: 'Student not found' });
      }
    });

  bcrypt.hash(password, 10, (hashErr, hashedPassword) => {
    if (hashErr) res.send(hashErr);
    Student.create({
      username,
      password: hashedPassword,
      age,
      gender,
      english,
      postcode,
      raw: true,
    })
      .then(() => {
        res.json({ success: 'Student has been added' });
      })
      .catch(() => res.status(500).json({ error: 'Something wrong in addition query' }));
  });
};
