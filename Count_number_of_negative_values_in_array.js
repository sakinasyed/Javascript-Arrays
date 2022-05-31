// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array

//method 1
function myFunction(a) {
    var b = a.filter(n=> n < 0)
    return b.length
 }

 //method 2
 function myFunction(a) {
    return a.filter((el) => el < 0).length;
 }