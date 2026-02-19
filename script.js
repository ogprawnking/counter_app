// Get elements from HTML
// using document.getElementById() to get the elements by their id and store them in variables for later use
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');
const countDisplay = document.getElementById('count');

// Store current count
let count = 0; // defaults to 0

// Increase button
// Add event listener to increase button
increaseBtn.addEventListener('click', () => {
    count++; // increment count by 1
    countDisplay.textContent = count; // update the displayed count
});

// Decrease button
// Add event listener to decrease button
decreaseBtn.addEventListener('click', () => {
    if(count <= 0) {
        return; // if count is 0 or less, do nothing and exit the function
    }
    else {
        count--; // decrement count by 1
        countDisplay.textContent = count; // update the displayed count
    }
});

// Reset button
// Add event listener to reset button

resetBtn.addEventListener('click', () => {
    count = 0; // reset count to 0
    countDisplay.textContent = count; // update the displayed count
});