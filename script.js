const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".number-button");
buttons.forEach((item) => {
    item.addEventListener('click', () => {
        display.textContent += item.textContent;
    });
});

document.querySelector('.clear').addEventListener('click', ()=>{display.textContent = ''});
document.querySelector('.delete').addEventListener('click', ()=>{display.textContent = display.textContent.slice(0, -1)});