// Write a function that takes an array of strings as argument
// Return the longest string

//method 1
function myFunction( arr ) {
    return arr.reduce((a, b) => a.length <= b.length ? b : a)
    }

//method 2
function myFunction(arr) {
    var longestWord = "";
      arr.forEach(function(word) {
        if(word.length > longestWord.length) {
          longestWord = word;
        }
      });
     return longestWord;
 }