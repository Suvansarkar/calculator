const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".number-button");
let arr = [];
let lastOperator = "+";
let dotUsed = false;

let calculate = function (a, b, operator) {
    a = +a;
    b = +b;
    if(operator==="+"){
        return +(a+b).toFixed(8);
    }else if(operator === "-"){
        return +(a-b).toFixed(8);
    }else if(operator === "*"){
        return +(a*b).toFixed(8);
    }else if(operator === "/"){
        return +(a/b).toFixed(8);
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
    dotUsed=false;
    arr.forEach(item=>{item = 0;});
});
document.querySelector('.delete').addEventListener('click', ()=>{display.textContent = display.textContent.slice(0, -1); dotUsed=false;});

document.querySelector('.add').addEventListener('click', ()=>{
    dotUsed=false;
    if (display.textContent.includes(lastOperator)){
        // console.log("RUN!!!");
        let arr = display.textContent.split(lastOperator);
        display.textContent = calculate(arr[0], arr[1], lastOperator);
    }else{
        arr[0] = display.textContent;
    }
    lastOperator = "+";
    display.textContent += "+";
});
document.querySelector('.multiply').addEventListener('click', ()=>{
    dotUsed=false;
    if (display.textContent.includes(lastOperator)){
        // console.log("RUN!!!");
        let arr = display.textContent.split(lastOperator);
        display.textContent = calculate(arr[0], arr[1], lastOperator);
    }else{
        arr[0] = display.textContent;
    }
    lastOperator = "*";
    display.textContent += "*";
});
document.querySelector('.divide').addEventListener('click', ()=>{
    dotUsed=false;
    if (display.textContent.includes(lastOperator)){
        // console.log("RUN!!!");
        let arr = display.textContent.split(lastOperator);
        display.textContent = calculate(arr[0], arr[1], lastOperator);
    }else{
        arr[0] = display.textContent;
    }
    lastOperator = "/";
    display.textContent += "/";
});
document.querySelector('.subtract').addEventListener('click', ()=>{
    dotUsed=false;
    if (display.textContent.includes(lastOperator)){
        // console.log("RUN!!!");
        let arr = display.textContent.split(lastOperator);
        display.textContent = calculate(arr[0], arr[1], lastOperator);
    }else{
        arr[0] = display.textContent;
    }
    lastOperator = "-";
    display.textContent += "-";
});

document.querySelector('.dot').addEventListener('click', ()=> {
    if(dotUsed==false){
        dotUsed=true;
        display.textContent += '.';
    }
});
document.querySelector('.equals').addEventListener('click', ()=>{
    dotUsed=false;
    let arr = display.textContent.split(lastOperator);
    display.textContent = calculate(arr[0], arr[1], lastOperator);
    if(display.textContent.includes('.')){
        dotUsed = true;
    }
});