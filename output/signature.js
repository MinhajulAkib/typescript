"use strict";
//simple signature function
var add;
add = function (a, b) {
    return a + b;
};
//console.log(add(3, 4));
//complex calculation
var calculation;
calculation = function (a, b, c) {
    if (c == "add") {
        return a + b;
    }
    else {
        return a - b;
    }
};
console.log(calculation(5, 6, 'minus'));
