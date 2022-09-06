"use strict";

require('dotenv').config();

var config = require('./src/config');

var app = require('./src/app.js');

app.listen(config.PORT, function () {
  return console.log("server running on port ".concat(config.PORT));
});
module.exports = app;