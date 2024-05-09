var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authsRouter = require('./routes/auth');
var moviesRouter = require('./routes/movies');
var watchListRouter = require('./routes/watchList');




var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/auth', authsRouter);
app.use('/api/movies', moviesRouter);
app.use('/api/watchList', watchListRouter);



mongoose.connect(process.env.DB_URL)

module.exports = app;
