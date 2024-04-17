const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function Calculate() {
    display.value = eval(display.value);
    

}
function Clear() {
    display.value = "";
}