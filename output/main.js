"use strict";
var userDetails = function (id, user) {
    console.log("user id is " + id + "), name is " + user.name + " and age is " + user.age);
};
var sayHello = function (user) {
    console.log("hello " + (user.age > 50 ? "sir" : "Mr") + " " + user.name);
};
