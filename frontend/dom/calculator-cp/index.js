//handle when the number is pressed. It renders the number into #input element
function number(number) {
    // TODO: answer here
let input = document.querySelector("#input");
input.value += number;
}

//handle when the Del button, AC button and other operators (+, /, -, x) are pressed. It renders the operator into #input element
function operator(operator) {
    // TODO: answer here
let input = document.querySelector("#input");
input.value += operator;
if (operator === "AC") {
    input.value = "";
}
if (operator === "Del") {
    input.value = input.value.slice(0, -4);
}
}

//handle when = button is pressed. It renders the result into #input element
function calculate() {
    // TODO: answer here
let input = document.querySelector("#input");
input.value = eval(input.value);
}