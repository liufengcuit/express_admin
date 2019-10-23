
var indexRouter = require('./indexs');
var usersRouter = require('./users');
var loginRouter = require('./login/login');

module.exports = function(app){
    app.use('/admin', indexRouter);
    app.use('/users', usersRouter);
    app.use('/login', loginRouter);
    
}