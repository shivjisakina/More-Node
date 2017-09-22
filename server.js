const EventEmitter = require('events');

const myEmitter = new EventEmitter();

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
var domain = "google.com";
var notDomain = "sjdl.c";

//Create an event handler:
const emailHandler = function () {
    console.log(validator.isEmail("Email" +  email)); //=> true

    console.log(validator.isBoolean(email)); //=> false
    };

//Assign the event handler to an event:
myEmitter.on('email', emailHandler);

//Fire the 'scream' event:
myEmitter.emit('email');
// Prints: I hear a scream!

console.log(validator.isBoolean(boolean)); //=> true

console.log(validator.isCreditCard(creditcard)); //=> true

console.log(validator.isCreditCard(fakecreditcard)); //=> false

console.log(validator.isEmpty(empty)); //=> true

console.log(validator.isEmpty(notEmpty)); //=> false

console.log(validator.isFQDN(domain)); //=> true

console.log(validator.isFQDN(notDomain)); //=> false

app.listen(port, function() {
    console.log("Listening on PORT " + port)})
