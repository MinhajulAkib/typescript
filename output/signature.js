"use strict";
//simple signature function
let add;
add = (a, b) => {
    return a + b;
};
//console.log(add(3, 4));
//complex calculation
let calculation;
calculation = (a, b, c) => {
    if (c == "add") {
        return a + b;
    }
    else {
        return a - b;
    }
};
console.log(calculation(5, 6, 'minus'));
