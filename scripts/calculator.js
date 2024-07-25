"use strict";

// Variables to hold operations - use to display on calculator -----------------
const calcDisplay = document.querySelector('textarea');
const numButtons = document.querySelectorAll('.num_button');
const opButtons = document.querySelectorAll('.op_button');
const equalsButton = document.querySelector('.equals_button');

let num1 = null;
let num2 = null;
let operator = null;
let result = null;

function operate(num1, num2, operator) {
    switch (operator) {
        case ("+"):
            return add(num1, num2);
            break;
        case ("-"):
            return subtract(num1, num2);
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
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return Number(a) - Number(b);
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let isNum1Set = false;
let isNum2Set = false;
let isOperatorSet = false;

numButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        let tempNum = event.target.innerHTML;
        if (!isNum1Set) {
            if (num1 === null) {
                num1 = tempNum;
            } else if (!isNum1Set) {
                num1 += tempNum;
            }
            calcDisplay.innerHTML = num1;
        } else if (isNum1Set) {
            if (num2 === null) {
                num2 = tempNum;
            } else if (!isNum2Set) {
                num2 += tempNum;
            }
            calcDisplay.innerHTML += num2;
        }
    })
});

opButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        if (isOperatorSet === false) {
            operator = event.target.innerHTML;
            isNum1Set = true;
        }
        calcDisplay.innerHTML += operator;
        isOperatorSet = true;
    })
});

equalsButton.addEventListener("click", function() {
    let result = operate(num1, num2, operator);
    calcDisplay.innerHTML = result;
});
