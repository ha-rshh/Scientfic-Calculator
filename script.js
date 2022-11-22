const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll('.sign');
const equalsButton = document.querySelector(".equals");
const resultEl = document.querySelector("#result");
const clear = document.querySelector('.clear');
const delButton = document.querySelector('.backSpace')
const currentTextEl = document.querySelector("#current")
const previousTextEl = document.querySelector("#previous")


function show() {
    console.log(operation)
    currentTextEl.innerText = currentOp;
    currentTextEl.innerText += operation;
    previousTextEl.innerText = previousOp;
    
    
}

// START
let currentOp = "", previousOp = "",result = "", operation;

function appendNumber(number) {
    if (number === "." && currentOp.includes('.')) return;
    currentOp += number;
    console.log({currentOp});
    show()
}
function compute(){
    let prev= parseFloat(previousOp);
    let curr= parseFloat(currentOp);
    let computation;
    if(operation != ""){
        switch(operation){
            case "+":
                computation = prev + curr;
                break;
            case "-":
                computation = prev - curr;
                break;
            case "/":
                computation = prev / curr;
                break;
            case "x":
                computation = prev * curr;
                break;
            default:
                return;
        }
    }
    currentOp = computation;
    operation = undefined;
    previousOp = "";
}

equalsButton.addEventListener("click", ()=>{
    compute();
    show()
})

function chooseOperation(newOperation){
    if(currentOp === "") return;
    if(previousOp != ""){
        compute();
    }
    operation = newOperation;
    previousOp = currentOp;
    currentOp = "";
}
numberButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        // console.log(button.innerText);
        appendNumber(button.innerText)
    })
    show()
})
operationButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        chooseOperation(button.innerText);
        show()
    })
})
function dellastChar(){
    currentOp = currentOp.slice(0,-1);
    // console.log({currentOp});
    show()
    
}
delButton.addEventListener("click", () =>{
    dellastChar()
    show()
})
function clearAll(){
    currentOp = "";
    previousOp = "";
    operation = "";
}
clear.addEventListener("click", ()=>{
    clearAll();
    show()
})