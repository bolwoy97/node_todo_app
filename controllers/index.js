var app = require('express')();

app.use(require('./home'));
module.exports = app;