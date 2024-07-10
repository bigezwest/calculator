"use strict";

// Variables to hold operations - use to display on calculator -----------------
let num1 = null;
let num2 = null;
let operator = null;


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

console.log("1 + 2 = " + add(1, 2));
console.log("2 - 1 = " + subtract(2, 1));
console.log("1 * 2 = " + multiply(1, 2));
console.log("2 / 1 = " + divide(2, 1));
