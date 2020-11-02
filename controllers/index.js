var app = require('express')();

app.use('/home',require('./home'));
module.exports = app;