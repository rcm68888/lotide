const assertArrayEqual = require('../assertArraysEqual.js');
const eqArrays = require('../eqArrays.js');

// assertArrayEqual(actual, expected)

assertArrayEqual(eqArrays([1, 2, 3], [1,2,3]), true)
assertArrayEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertArrayEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertArrayEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false )
// eqArrays(actual, expected)