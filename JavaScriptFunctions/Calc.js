function Solve(val) {
    var v = document.getElementById('res');
    v.value += val;
 }
 function Result() {
    var num1 = document.getElementById('res').value;
    var num2 = eval(num1);
    document.getElementById('res').value = num2;
 }
 function Clear() {
    var inp = document.getElementById('res');
    inp.value = '';
 }
 function backspace() {
    var ev = document.getElementById('res');
    var currentValue = ev.value;
    var newValue = currentValue.substring(0, currentValue.length - 1);
    ev.value = newValue;
}