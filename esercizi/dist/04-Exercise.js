"use strict";
exports.__esModule = true;
var express = require('express');
var app = express();
app.use(function (req, res, next) {
    res.header({ Headers: "Server header" });
    next();
});
app.get('/', function (req, res) {
    res.status(200).send({ json: "Json server file" });
});
app.listen(process.env.PORT, function () { console.log("SERVER: Running on localhost:3000"); });
exports["default"] = app;
