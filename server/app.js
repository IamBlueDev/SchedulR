var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var schedulesRouter = require('./routes/schedule');

var database = require('./database/database');

var app = express();

var passport = require('passport');
var passportsetup = require('./oauth/passport-setup');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('database', database);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));



app.use(passport.initialize());
app.use(passport.session());
passportsetup();

passport.serializeUser(  (user,cb) =>{
  cb(null,user);
} )

passport.deserializeUser(  (user,cb) =>{
  cb(null,user);
} )



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/s',schedulesRouter);
app.use('/s/:id',schedulesRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});




// database.Client.connect();

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
