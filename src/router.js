const express = require('express');
const path = require('path');
const AuthController = require('./controllers/Auth.controller');
const StudentController = require('./controllers/Student.controller');
// const studentMiddleware = require('./middlewares/checkStudentAuth.middleware');

// const validations = require('./validations');

const router = express.Router();

router.post('/signup', AuthController.signup);
router.post('/login', AuthController.login);

router.get('/checkState', StudentController.checkState);

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
