var app = require('express')();

//app.use(require('./front'));
//app.use('/front',require('./front'));
app.use('/sometest',require('./sometest'));
app.use('/sessions',require('./sessions'));
app.use('/api/todos',require('./api/todos'));
module.exports = app;