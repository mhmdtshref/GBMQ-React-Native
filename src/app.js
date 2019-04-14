const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const router = require('./router');
require('env2')('config.env');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/admin/', express.static(path.join(__dirname, '..', 'admin', 'build')));
app.use('/', express.static(path.join(__dirname, '..', 'student', 'build')));

// app.use('/public', express.static(path.join(__dirname, '..', 'public')));

app.use(router);
module.exports = app;
