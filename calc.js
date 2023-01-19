let display = document.getElementById("display");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn0 = document.getElementById("btn0");
let btnPlus = document.getElementById("btnPlus");
let btnMinus = document.getElementById("btnMinus");
let btnMultiply = document.getElementById("btnMultiply");
let btnDivide = document.getElementById("btnDivide");
let btnSqrt = document.getElementById("btnSqrt");
let btnRandom = document.getElementById("btnRandom");
let btnClear = document.getElementById("btnClear");
let btnEqual = document.getElementById("btnEqual");

btn1.addEventListener("click", function(){
    display.value += "1";
});
btn2.addEventListener("click", function(){
    display.value += "2";
});
btn3.addEventListener("click", function(){
    display.value += "3";
});
// Add event listeners for the rest of the buttons

btnPlus.addEventListener("click", function(){
    display.value += "+";
});
btnMinus.addEventListener("click", function(){
    display.value += "-";
});

btn4.addEventListener("click", function(){
    display.value += "4";
});
btn5.addEventListener("click", function(){
    display.value += "5";
});
btn6.addEventListener("click", function(){
    display.value += "6";
});
btn7.addEventListener("click", function(){
    display.value += "7";
});
btn8.addEventListener("click", function(){
    display.value += "8";
});
btn9.addEventListener("click", function(){
    display.value += "9";
});
btn0.addEventListener("click", function(){
    display.value += "0";
});

btnPlus.addEventListener("click", function(){
    display.value += "+";
});
btnMinus.addEventListener("click", function(){
    display.value += "-";
});
btnMultiply.addEventListener("click", function(){
    display.value += "*";
});
btnDivide.addEventListener("click", function(){
    display.value += "/";
});
btnSqrt.addEventListener("click", function(){
    display.value = Math.sqrt(display.value);
});

btnRandom.addEventListener("click", function(){
    let randomNum = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    display.value = randomNum;
});

btnClear.addEventListener("click", function(){
    display.value = "";
});

btnEqual.addEventListener("click", function(){
    display.value = eval(display.value);
});
