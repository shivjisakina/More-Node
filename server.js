const EventEmitter = require('events');
var schema = require('async-validator');

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
var alphaNum = "SJA8271";
var notAlphaNum = "fjdlk";

//Create an event handler:
const emailHandler = function () {
    console.log(validator.isEmail("Email" +  email)); //=> true

    console.log(validator.isBoolean(email)); //=> false
    };

myEmitter.on('email', emailHandler);

myEmitter.emit('email');

console.log(validator.isBoolean("boolean" + boolean)); //=> true

console.log(validator.isCreditCard(creditcard)); //=> true

console.log(validator.isCreditCard(fakecreditcard)); //=> false

console.log(validator.isEmpty(empty)); //=> true

console.log(validator.isEmpty(notEmpty)); //=> false

console.log(validator.isFQDN(domain)); //=> true

console.log(validator.isFQDN(notDomain)); //=> false

console.log(validator.isAlphanumeric(alphaNum)); //=> true

app.listen(port, function() {
    console.log("Listening on PORT " + port)})
