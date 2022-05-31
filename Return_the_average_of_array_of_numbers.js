// Write a function that takes an array of numbers as argument
// It should return the average of the numbers

//method 1
function myFunction( arr ) {
    return arr.reduce((acc, cur) => acc + cur, 0) / arr.length
    }

//method 2
function myFunction(arr) {
    const sum = arr.reduce((a, b) => a + b, 0);
    const avg = (sum / arr.length) || 0;
    return avg
 }