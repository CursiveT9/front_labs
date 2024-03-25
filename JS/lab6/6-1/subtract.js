function subtract() {
    let firstNumber = parseFloat(document.getElementById('firstNumber').value);
    let secondNumber = parseFloat(document.getElementById('secondNumber').value);
    document.getElementById('result').innerText = String(firstNumber - secondNumber);
}
