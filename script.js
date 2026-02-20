// Get elements from HTML
// using document.getElementById() to get the elements by their id and store them in variables for later use
const increaseBtn = document.getElementById('increase');
const increaseFiveBtn = document.getElementById('increase-five');
const decreaseBtn = document.getElementById('decrease');
const decreaseFiveBtn = document.getElementById('decrease-five');

const resetBtn = document.getElementById('reset');
const countDisplay = document.getElementById('count');

// Store current count
let count = 0; // defaults to 0
countDisplay.style.color = 'red';
let savedCount = localStorage.getItem("count"); // try get count from local storage.
if (savedCount !== null){
    count = parseInt(savedCount); // stops at the first non-numeric character.
    if(count <= 0) {
        updateCounterDisplay('red');
    } else {
        updateCounterDisplay('green');
    }
}
// updates the count display and saves the count to local storage
function updateCounterDisplay(color = 'black') {
    countDisplay.textContent = count; // update displayed count
    localStorage.setItem("count", count); // save count to variable called "count"
    countDisplay.style.color = color; // update color of count display
}


// Increase button
// Add event listener to increase button
increaseBtn.addEventListener('click', () => {
    count++; // increment count by 1
    if(count > 0) {
        updateCounterDisplay('green');
    }
});

increaseFiveBtn.addEventListener('click', () => {
    count += 5;
    if(count > 0) {
        updateCounterDisplay('green');
    }
});

// Decrease button
// Add event listener to decrease button
decreaseBtn.addEventListener('click', () => {
    countDisplay.textContent = count; // update the displayed count
    if(count > 0) {
        count--; // decrement count by 1
        updateCounterDisplay('green');
        }
    if(count <= 0) {
        count = 0; // prevent count from going below 0
        updateCounterDisplay('red');
    }
});

decreaseFiveBtn.addEventListener('click', () => {
    if(count > 0) {
        count -= 5;
        updateCounterDisplay('green');
        if(count <= 0) {
            count = 0;
            updateCounterDisplay('red');
        }
    }
});


// Reset button
// Add event listener to reset button
resetBtn.addEventListener('click', () => {
    count = 0; // reset count to 
    updateCounterDisplay('red');
});