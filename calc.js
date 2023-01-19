// Get the DOM elements
const display = document.getElementById("display");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btn0 = document.getElementById("btn0");
const btnPlus = document.getElementById("btnPlus");
const btnMinus = document.getElementById("btnMinus");
const btnMultiply = document.getElementById("btnMultiply");
const btnDivide = document.getElementById("btnDivide");
const btnSqrt = document.getElementById("btnSqrt");
const btnRandom = document.getElementById("btnRandom");
const btnClear = document.getElementById("btnClear");
const btnEqual = document.getElementById("btnEqual");

// Add event listeners for the number buttons
function displaynum(num) {
    display.value += num;
}

// Add event handlers for the rest
btnPlus.addEventListener("click", function () {
    display.value += "+";
});
btnMinus.addEventListener("click", function () {
    display.value += "-";
});

btnMultiply.addEventListener("click", function () {
    display.value += "*";
});
btnDivide.addEventListener("click", function () {
    display.value += "/";
});
btnSqrt.addEventListener("click", function () {
    display.value = Math.sqrt(display.value);
});

btnRandom.addEventListener("click", function () {
    const randomNum = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    display.value = randomNum;
});

btnClear.addEventListener("click", function () {
    display.value = "";
});

btnEqual.addEventListener("click", function () {
    display.value = eval(display.value);
});
