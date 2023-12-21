const eqArrays = require('./eqArrays.js');

//determines if arrays are identical
const assertArraysEqual = function(actual, expected) {
  console.log(eqArrays(actual, expected));
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
module.exports = assertArraysEqual;