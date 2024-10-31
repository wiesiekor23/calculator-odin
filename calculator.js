let result = 0;
let arrayCalc = [];
const displayDiv = document.querySelector("#display");
let myObject = { array: arrayCalc, result: 0, operator: "" };

let add = function (a, b) { return a + b; }
let subtract = function (a, b) {return a - b; }
let multiply = function (a, b) { return a * b; }
let divide = function (a, b) { return (a / b).toFixed(3).replace(/\.?0+$/, "");}

let operate = function (a, b, operator) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return b === 0 ? "DIV/0 Dummy" : divide(a, b);
        case "%":
            return a === 0 ? b / 100 : a / 100;
        case "=":
            return a;
        default:
            return b;
    }
};


let operators = function () {
    const buttons = document.querySelectorAll(".operator");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (button.classList.contains("plus")) {
                handleOperation("+");
            } else if (button.classList.contains("minus")) {
                handleOperation("-");
            } else if (button.classList.contains("multiply")) {
                handleOperation("*");
            } else if (button.classList.contains("divide")) {
                handleOperation("/");
            } else if (button.classList.contains("equals")) {
                handleOperation("=");
            } else if (button.classList.contains("percent")) {
                handleOperation("%");
            } else if (button.classList.contains("backspace")) {
                handleBackspace();
            } else if (button.classList.contains("clear")) {
                handleClear();
            } else if (button.classList.contains("plus-minus")) {
                handlePlusMinus();
            }
        });
    });
};

const handleOperation = function(operator) {
    result = operate(myObject.result, +(myObject.array.reduce((string, value) => string + value, "")), myObject.operator);
    displayDiv.textContent = result;
    arrayCalc = [];
    myObject.array = arrayCalc;
    myObject.result = result;
    myObject.operator = operator;
}

const handleBackspace = function() {
    arrayCalc.pop();
    displayDiv.textContent = arrayCalc.reduce((string, value) => string + value, "");
}

const handleClear = function() {
    arrayCalc = [];
    result = 0;
    myObject = { array: arrayCalc, result: 0, operator: "" };
    displayDiv.textContent = "";
}

const handlePlusMinus = function() {
    if (result === 0) {
        if (arrayCalc.includes("-")) {
            arrayCalc.shift();
            myObject.array = arrayCalc;
        } else {
            arrayCalc.unshift("-");
            myObject.array = arrayCalc;
        }
        displayDiv.textContent = arrayCalc.reduce((string, value) => string + value, "");
    } else {
        result = -result;
        myObject.result = result;
        displayDiv.textContent = result;
    }
}

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
    if (arrayCalc.length < 10) {
        if (button.classList.contains("one")) {
            arrayCalc.push(1);
        }
        if (button.classList.contains("two")) {
            arrayCalc.push(2);
        }
        if (button.classList.contains("three")) {
            arrayCalc.push(3);
        }
        if (button.classList.contains("four")) {
            arrayCalc.push(4);
        }
        if (button.classList.contains("five")) {
            arrayCalc.push(5);
        }
        if (button.classList.contains("six")) {
            arrayCalc.push(6);
        }
        if (button.classList.contains("seven")) {
            arrayCalc.push(7);
        }
        if (button.classList.contains("eight")) {
            arrayCalc.push(8);
        }
        if (button.classList.contains("nine")) {
            arrayCalc.push(9);
        }
        if (button.classList.contains("zero")) {
            arrayCalc.push(0);
        }
        if (button.classList.contains("dot")) {
            if (!arrayCalc.includes(".")) {
                arrayCalc.push(".");
            }
        }
        displayDiv.textContent = arrayCalc.reduce((string, value) => string + value, "");
    } else {
        console.log("Maximum limit of 10 inputs reached.");
    }
};

operators();
activatePopulateDisplay();