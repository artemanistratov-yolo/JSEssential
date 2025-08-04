let count = 0; // Initializing count to 0

function increaseCount() {
    count++; //Increasing it by 1
    displayCount(); //display count
    checkCountValue(); //Check values and display messages
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count;
}

function checkCountValue() {
    if (count === 10) {
        alert("You are gaining 10 followers! Congrats!");
    }
    else if (count === 20) {
        alert("You are really popular,congrats");
    }
}