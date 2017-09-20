//express and body parser
var express = require("express");
var validator = require('validator');

var app = express();
var port = process.env.PORT || 3000;

var email = 'foo@bar.com';

console.log(validator.isEmail(email)); //=> true

app.listen(port, function() {
    console.log("Listening on PORT " + port)})
