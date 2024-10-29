let initialInput = 5;
let operator;
let followingInput = 10;

let add = function (a, b) {
    return a + b;
}

let subtract = function (a, b) {
    return a - b;
}

let multiply = function (a, b) {
    return a * b;
}

let divide = function (a, b) {
    return a / b;
}

let operate = function (a, operator, b) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "*") {
        return multiply(a, b);
    } else if (operator === "/") {
        return divide(a, b);
    }
}

const array = [];

const populateDisplay = function () {
    const buttons = document.querySelectorAll(".number");
    const displayDiv = document.querySelector("#display");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (button.classList.contains("one")) {
                array.push(1);
                displayDiv.textContent = array.reduce((string, value) => string + value, "");
            }
            if (button.classList.contains("two")) {
                array.push(2);
                displayDiv.textContent = array.reduce((string, value) => string + value, "");
            }
            if (button.classList.contains("three")) {
                array.push(3);
                displayDiv.textContent = array.reduce((string, value) => string + value, "");
            }
            if (button.classList.contains("four")) {
                array.push(4);
                displayDiv.textContent = array.reduce((string, value) => string + value, "");
            }
            if (button.classList.contains("five")) {
                array.push(5);
                displayDiv.textContent = array.reduce((string, value) => string + value, "");
            }
            if (button.classList.contains("six")) {
                array.push(6);
                displayDiv.textContent = array.reduce((string, value) => string + value, "");
            }
            if (button.classList.contains("seven")) {
                array.push(7);
                displayDiv.textContent = array.reduce((string, value) => string + value, "");
            }
            if (button.classList.contains("eight")) {
                array.push(8);
                displayDiv.textContent = array.reduce((string, value) => string + value, "");
            }
            if (button.classList.contains("nine")) {
                array.push(9);
                displayDiv.textContent = array.reduce((string, value) => string + value, "");
            }
            if (button.classList.contains("zero")) {
                array.push(0);
                displayDiv.textContent = array.reduce((string, value) => string + value, "");
            }
        })

    });
};

/* document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll(".number");
    populateDisplay(buttons);
}) */

populateDisplay();

//alert(result);