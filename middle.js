const assertArraysEqual = require('./assertArraysEqual.js');

//akes in an array and returns the middle element of the input array
const middle = function(array) {
  let centre = Math.floor(array.length / 2)
  let newArray = []
  //for (let i =0; i < array.length; i ++){
    
    //console.log(array[i])
     if (array.length < 3){
      newArray = []
    }else if (array.length % 2 === 0){
      // console.log(array[centre-1], array[centre])
      newArray.push(array[centre-1])
      newArray.push(array[centre])
    } else {
      // console.log(array[centre])
      newArray.push(array[centre])
    }
   return newArray
}
module.exports = middle;

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

// Odd Number of Elements
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), []);

// // Even Number of Elements
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);