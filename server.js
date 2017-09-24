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


//=======================================================

var descriptor = {
    name: {type: "string", required: true}
};
var asyncvalidator = new schema(descriptor);
asyncvalidator.validate({name: "muji"}, function(errors, fields) {
    if(errors) {
        // validation failed, errors is an array of all errors
        // fields is an object keyed by field name with an array of
        // errors per field
        console.log(handleErrors(errors, fields));
    }
    // validation passed
    console.log("passed")
});

var descriptor = {
    address: {
        type: "object", required: true,
        fields: {
            street: {type: "string", required: true},
            city: {type: "string", required: true},
            zip: {type: "string", required: true, len: 8, message: "invalid zip"}
        }
    },
    name: {type: "string", required: true}
}
var validator2 = new schema(descriptor);
validator2.validate({ address: {} }, function(errors, fields) {
    // errors for street, address.city, address.zip and address.name

    //console.log(errors, fields)
    for (var i = 0; i < errors.length; i++) {
        console.log(errors[i].message)
    }
});

app.listen(port, function() {
    console.log("Listening on PORT " + port)})
