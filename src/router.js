const express = require('express');
const path = require('path');
const signupstudentController = require('./controllers/Auth.Student.controller/signup.controller.js');
const loginstudentController = require('./controllers/Auth.Student.controller/login.controller.js');

// const validations = require('./validations');

const router = express.Router();

router.post('/signup', signupstudentController);
router.post('/login', loginstudentController);


router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'student', 'build', 'index.html'));
});

/*
TODO: Route to run the admin app:
router.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'student', 'build', 'index.html'));
});
*/


module.exports = router;
