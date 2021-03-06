const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const employRouter = require('./routes/employ');
const productRouter = require('./routes/product');
const tableFileRouter = require('./routes/tablefile');
const balanceRouter = require('./routes/balance');
const stockRouter = require('./routes/stock');
const mgrButtonSetupRouter = require('./routes/mgrbuttonsetup');
const poshwsetupRouter = require('./routes/poshwsetup');

const cors = require('cors')

const app = express();
app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/pos/', indexRouter);
app.use('/pos/employ', employRouter);
app.use('/pos/product', productRouter);
app.use('/pos/tablefile', tableFileRouter);
app.use('/pos/balance', balanceRouter);
app.use('/pos/stock', stockRouter);
app.use('/pos/mgrbuttonsetup', mgrButtonSetupRouter);
app.use('/pos/poshwsetup', poshwsetupRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
