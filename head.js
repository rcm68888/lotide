const assertEqual = require('./assertEqual');

// head is a function that returns the first element of an array
const head = function(actual) {
  return actual[0];
};
module.exports = head;
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5]), 5);
