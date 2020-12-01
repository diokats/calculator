


let display = document.getElementById('display');
function btn(value) {
        if(display.innerText === 0) {
            display.innerText = value;
        } else {
            display.innerText += value;
        }
        return display.innerText;
}
let equals = document.getElementById('equal');
const equal= () =>{
    if(display.innerText !== "") {
        display.innerText = eval(display.innerText)
    } else {
        display.innerText = "";
    }
}
const clear =() => {
    display.innerText = "";
}