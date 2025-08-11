function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);

    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // Doing all operations
        let resultMultiply = multiply(num1, num2);
        let resultAddition = addition(num1, num2);
        let resultDivision = division(num1, num2);

        // Показываем всё сразу
        displayResult(
            `Multiply: ${resultMultiply}, Addition: ${resultAddition}, Division: ${resultDivision}`
        );
    } else {
        displayResult('Please enter valid numbers');
    }
}

function addition(a, b) {
    debugger;
    return a + b;
}

function multiply(a, b) {
    debugger;
    return a * b;
}

function division(a, b) {
    debugger;
    return a / b;
}

function displayResult(result) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result is: ${result}`;
}