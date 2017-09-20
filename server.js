//express and body parser
var express = require("express");
var validator = require('validator');


var app = express();
var port = process.env.PORT || 3000;

console.log(validator.isEmail('foo@bar.com')); //=> true

app.listen(port, function() {
    console.log("Listening on PORT " + port)})
