/*const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};
module.exports = assertEqual;

// const assertEqual = require('./assertEqual');*/

const head = function(actual) {
  return actual[0];
};

/* assertEqual(head([5,6,7]), 5);
   assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
   assertEqual(head([5]), 5);
   assertEqual(head([]), 5); */