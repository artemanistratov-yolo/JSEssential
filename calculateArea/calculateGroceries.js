let grocery1;
let grocery2;
let grocery3;

function calculateGroceries () {
    grocery1 = parseFloat(document.getElementById('grocery1').value) || 0;
    grocery2 = parseFloat(document.getElementById('grocery2').value) || 0;
    grocery3 = parseFloat(document.getElementById('grocery3').value) || 0;

    let amount = grocery1 + grocery2 + grocery3;
    document.getElementById('result').innerText = `The area of the rectangle is: ${amount}`;

}