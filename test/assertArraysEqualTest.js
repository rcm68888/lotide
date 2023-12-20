const assertArraysEqual = require('../assertArraysEqual.js');
const eqArrays = require('../eqArrays.js');

// assertArrayEqual(actual, expected)

assertArraysEqual(eqArrays([1, 2, 3], [1,2,3]), true)
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false )
// eqArrays(actual, expected)