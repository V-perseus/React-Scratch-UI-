const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();

// mongo db connection
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/metaIndex')
.then(() => {
  console.log('Database connected')
},
error => {
  console.log('Database could not be connected : ' + error)
}
);

// Import Routes
const usersRoute = require('./routes/users');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json({limit: '150mb'}));
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
limit: '150mb',
extended: true
}));

// cors policy allow
app.options('*', cors());
app.use(cors({
  origin:"*",
  methods:['GET','POST','PATCH','DELETE','PUT'],
  allowedHeaders:'Content-Type,Authorization,Origin,X-Requested-with,Accept'
}));

// Use Routes
// app.get('/', (req,res) => {
//   res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
// });
app.use('/api/users',usersRoute);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

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
