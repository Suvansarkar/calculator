const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".number-button");
let a;
let b;
let lastOperator = "";
let dotUsed = false;

let calculate = function (a, b, operator) {
    if(operator==="+"){
        return a+b;
    }else if(operator === "-"){
        return a-b;
    }else if(operator === "*"){
        return a*b;
    }else if(operator === "/"){
        return a/b;
    }

    alert("wtf? what did you just do?");
}

buttons.forEach((item) => {
    item.addEventListener('click', () => {
        display.textContent += item.textContent;
    });
});

document.querySelector('.clear').addEventListener('click', ()=>{
    display.textContent = '';
    a = 0;
    b = 0;
});
document.querySelector('.delete').addEventListener('click', ()=>{display.textContent = display.textContent.slice(0, -1)});
document.querySelector('.add').addEventListener('click', ()=>{
    lastOperator = "+";
    if (display.textContent.includes("+")){
        console.log("RUN!!!");
        let arr = display.textContent.split("+");
        a = +arr[0];
        b = +arr[1];
        display.textContent = a+b;
    }else{
        a = +display.textContent;
    }
    display.textContent += "+";
    
    // buffer += +display.textContent;
    // lastOperator = "+";
    // display.textContent = "";
});

document.querySelector('.equals').addEventListener('click', ()=>{
    let index = display.textContent.indexOf(lastOperator);
    b = +display.textContent.slice(display.textContent.indexOf(lastOperator)+1);
    display.textContent = calculate(a, b, lastOperator);
    a = +display.textContent;
});