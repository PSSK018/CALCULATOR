

function appendtodisplay(input) {
    document.getElementById("hero").value += input;
}
function clearDisplay() {
    document.getElementById("hero").value = "";
}
function calculate() {
    try {
        let x = eval(document.getElementById("hero").value);
        if(!Number.isInteger(x)) {
        x = x.toFixed(5);
        }
        document.getElementById("hero").value = x;
    }
    catch {
        document.getElementById("hero").value = "ERROR";
    }
}
function remove() {
    document.getElementById("hero").value = document.getElementById("hero").value.slice(0,-1);
}