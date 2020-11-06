var app = require('express')();

app.use(require('./front'));
app.use('/sometest',require('./sometest'));
app.use('/sessions',require('./sessions'));
module.exports = app;