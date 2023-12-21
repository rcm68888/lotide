const assertArraysEqual = require('./assertArraysEqual.js');

//takes in an array and returns the middle element of the input array
const middle = function(array) {
  let centre = Math.floor(array.length / 2);
  let newArray = [];
     if (array.length < 3){
      newArray = []
    } else if (array.length % 2 === 0){
      newArray.push(array[centre-1])
      newArray.push(array[centre])
    } else {
      newArray.push(array[centre])
    }
   return newArray
}
module.exports = middle;

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);