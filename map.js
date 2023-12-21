const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const words = ["ground", "control", "to", "major", "tom"];

//takes in an array and a callback function and runs the callback on the item
const map = function(array, callback) {
  const results = [];
  for (let item of array){
    results.push(callback(item))
  }
  return results;
}
const results1 = map(words, word => word[1]);
//console.log(results1);
assertArraysEqual(results1, [ 'r', 'o', 'o', 'a', 'o' ]);
// Test case
const input = words;
const expected_output = ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"];
assertArraysEqual(map(input, word => word.toUpperCase()), expected_output);

module.exports = map;