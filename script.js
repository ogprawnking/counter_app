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


// Increase button
// Add event listener to increase button
increaseBtn.addEventListener('click', () => {
    count++; // increment count by 1
    if(count > 0) {
        countDisplay.style.color = 'green'; // reset color to black if it was red
        countDisplay.textContent = count; // update the displayed count
    }
});

increaseFiveBtn.addEventListener('click', () => {
    count += 5;
    if(count > 0) {
        countDisplay.textContent = count;
        countDisplay.style.color = 'green';
    }
});

// Decrease button
// Add event listener to decrease button
decreaseBtn.addEventListener('click', () => {
    countDisplay.textContent = count; // update the displayed count
    if(count > 0) {
        count--; // decrement count by 1
        }
    if(count <= 0) {
        countDisplay.style.color = 'red';
        countDisplay.textContent = count; // update the displayed count
    }
});

decreaseFiveBtn.addEventListener('click', () => {
    if(count > 0) {
        count -= 5;
        if(count < 0) {
            count = 0;
        }
        countDisplay.textContent = count;
        countDisplay.style.color = 'red';
    }
});




// Reset button
// Add event listener to reset button
resetBtn.addEventListener('click', () => {
    count = 0; // reset count to 0
    countDisplay.textContent = count; // update the displayed count
    countDisplay.style.color = 'red';

});