const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

//takes in an array, returns a new array and stops where the callback returns a truthy value
const takeUntil = (array, callback) => {
  let newArray = [];
  for (let item in array) {
    if (callback(array[item]) === true){
      break;
    } else {
      newArray.push(array[item])
    }
  } return newArray
}
/*const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);*/

module.exports = takeUntil;