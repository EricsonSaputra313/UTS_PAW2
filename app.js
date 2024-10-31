var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.use(function(req, res, next) {
    res.setHeader("Acces-Controll-Allow-Origin","*");
    res.setHeader(
        "Acces-Controll-Allow-Methods",
        "Origin, X_Requested-With, Content-Type, Accept"
    );
    res.setHeader("Acces-Controll-Allow-Methods","POST");
    next();
});
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
