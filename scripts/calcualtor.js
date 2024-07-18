"use strict";

// Variables to hold operations - use to display on calculator -----------------
let num1 = null;
let num2 = null;
let operator = null;

function operate(num1, num2, operator) {
    switch (operator) {
        case ("+"):
            add(num1, num2);
            break;
        case ("-"):
            subtract(num1, num2);
            break;
        case ("*"):
            multiply(num1, num2);
            break;
        case ("/"):
            divide(num1, num2);
            break;
        default:
            /* Error and then clear or back up */
    }
}

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

const calcDisplay = document.querySelector('textarea');
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener("mouseover", () => {
        button.style.backgroundColor = "#BFEAF5";
    }),
    button.addEventListener("mouseleave", () => {
        button.style.backgroundColor = "#EFF5F5";
    }),
    button.addEventListener("click", (event) => {
        let tempNum = event.target.innerHTML;
        calcDisplay.innerHTML = tempNum;
    })
});
