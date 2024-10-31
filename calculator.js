let operator;
let result = 0;
let arrayCalc = [];
const displayDiv = document.querySelector("#display");
let myObject = { array: arrayCalc, result: 0, operator: "" };

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

let operate = function (a, b, operator) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "*") {
        return multiply(a, b);
    } else if (operator === "/") {
        return divide(a, b);
    }  else if (operator === "%") {
        if(a === 0) {
            return b / 100;
        }
        return a / 100;
    }  else if (operator === "=") {
        return a;
    } else {
        return b;
    }
}

let operators = function () {
    const buttons = document.querySelectorAll(".operator");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (button.classList.contains("plus")) {
                result = operate(myObject.result, +(myObject.array.reduce((string, value) => string + value, "")), myObject.operator);
                displayDiv.textContent = result;
                arrayCalc = [];
                myObject.array = arrayCalc;
                myObject.result = result;
                myObject.operator = "+";
            }
            if (button.classList.contains("minus")) {
                result = operate(myObject.result, +(myObject.array.reduce((string, value) => string + value, "")), myObject.operator);
                displayDiv.textContent = result;
                arrayCalc = [];
                myObject.array = arrayCalc;
                myObject.result = result;
                myObject.operator = "-";
            }
            if (button.classList.contains("multiply")) {
                result = operate(myObject.result, +(myObject.array.reduce((string, value) => string + value, "")), myObject.operator);
                displayDiv.textContent = result;
                arrayCalc = [];
                myObject.array = arrayCalc;
                myObject.result = result;
                myObject.operator = "*";
            }
            if (button.classList.contains("divide")) {
                result = operate(myObject.result, +(myObject.array.reduce((string, value) => string + value, "")), myObject.operator);
                displayDiv.textContent = result;
                arrayCalc = [];
                myObject.array = arrayCalc;
                myObject.result = result;
                myObject.operator = "/";
            }
            if (button.classList.contains("equals")) {
                result = operate(myObject.result, +(myObject.array.reduce((string, value) => string + value, "")), myObject.operator);
                displayDiv.textContent = result;
                arrayCalc = [];
                myObject.array = arrayCalc;
                myObject.result = result;
                myObject.operator = "=";
            }
            if (button.classList.contains("backspace")) {
                arrayCalc.pop();
                displayDiv.textContent = arrayCalc.reduce((string, value) => string + value, "");
            }
            if (button.classList.contains("clear")) {
                arrayCalc = [];
                result = 0;
                myObject = { array: arrayCalc, result: 0, operator: "" };
                displayDiv.textContent = "";
            }
            if (button.classList.contains("percent")) {
                result = operate(myObject.result, +(myObject.array.reduce((string, value) => string + value, "")), myObject.operator);
                //displayDiv.textContent = arrayCalc.reduce((string, value) => string + value, "") / 100;
                //result = arrayCalc.reduce((string, value) => string + value, "") / 100;
                //arrayCalc = [result];
                displayDiv.textContent = result;
                myObject.array = arrayCalc;
                myObject.result = result;
                myObject.operator = "%";

            }
            if (button.classList.contains("plus-minus")) {
                if (result === 0) {
                    if (arrayCalc.includes("-")) {
                        arrayCalc.shift();
                    } else {
                        arrayCalc.unshift("-");
                    }
                    displayDiv.textContent = arrayCalc.reduce((string, value) => string + value, "");
                } else {
                    result = -result;
                    displayDiv.textContent = result;
                }
            }
        });
    });
};


const activatePopulateDisplay = function () {
    const buttons = document.querySelectorAll(".number");

    buttons.forEach((button) => {
        button.addEventListener("click", populateDisplay);

    });
};

const deactivatePopulateDisplay = function () {
    const buttons = document.querySelectorAll(".number");

    buttons.forEach((button) => {
        button.removeEventListener("click", populateDisplay);
    });
};

const populateDisplay = function (event) {
    const button = event.currentTarget;

    if (button.classList.contains("one")) {
        arrayCalc.push(1);
        displayDiv.textContent = arrayCalc.reduce((string, value) => string + value, "");
    }
    if (button.classList.contains("two")) {
        arrayCalc.push(2);
        displayDiv.textContent = arrayCalc.reduce((string, value) => string + value, "");
    }
    if (button.classList.contains("three")) {
        arrayCalc.push(3);
        displayDiv.textContent = arrayCalc.reduce((string, value) => string + value, "");
    }
    if (button.classList.contains("four")) {
        arrayCalc.push(4);
        displayDiv.textContent = arrayCalc.reduce((string, value) => string + value, "");
    }
    if (button.classList.contains("five")) {
        arrayCalc.push(5);
        displayDiv.textContent = arrayCalc.reduce((string, value) => string + value, "");
    }
    if (button.classList.contains("six")) {
        arrayCalc.push(6);
        displayDiv.textContent = arrayCalc.reduce((string, value) => string + value, "");
    }
    if (button.classList.contains("seven")) {
        arrayCalc.push(7);
        displayDiv.textContent = arrayCalc.reduce((string, value) => string + value, "");
    }
    if (button.classList.contains("eight")) {
        arrayCalc.push(8);
        displayDiv.textContent = arrayCalc.reduce((string, value) => string + value, "");
    }
    if (button.classList.contains("nine")) {
        arrayCalc.push(9);
        displayDiv.textContent = arrayCalc.reduce((string, value) => string + value, "");
    }
    if (button.classList.contains("zero")) {
        arrayCalc.push(0);
        displayDiv.textContent = arrayCalc.reduce((string, value) => string + value, "");
    }
    if (button.classList.contains("dot")) {
        if (!arrayCalc.includes(".")) {
            arrayCalc.push(".");
            displayDiv.textContent = arrayCalc.reduce((string, value) => string + value, "");
        }
    }
}
operators();
activatePopulateDisplay();