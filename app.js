var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var port = 3000;
var app = express();
var MongoDB = require('./db');
var MONGODB_URI = process.env.MONGODB_URI;
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.listen(port, function () {
    MongoDB(MONGODB_URI);
    console.log("Server started on " + port);
});
module.exports = app;
