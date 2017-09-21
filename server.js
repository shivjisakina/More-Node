//express and body parser
var express = require("express");
var validator = require('validator');

var app = express();
var port = process.env.PORT || 3000;

var email = 'foo@bar.com';
var boolean = "false";
var creditcard = "4485618240638341";
var fakecreditcard = "448561824063834";
var empty = "";
var notEmpty = "not empty";
var domain = "google.com"
var notDomain = "sjdl.c"

console.log(validator.isEmail(email)); //=> true

console.log(validator.isBoolean(email)); //=> false

console.log(validator.isBoolean(boolean)); //=> true

console.log(validator.isCreditCard(creditcard)); //=> true

console.log(validator.isCreditCard(fakecreditcard)); //=> false

console.log(validator.isEmpty(empty)); //=> true

console.log(validator.isEmpty(notEmpty)); //=> false

console.log(validator.isFQDN(domain)); //=> true

console.log(validator.isFQDN(notDomain)); //=> false

app.listen(port, function() {
    console.log("Listening on PORT " + port)})
