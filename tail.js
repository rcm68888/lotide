const assertEqual = require ('./assertEqual');

// returns the array without the input array's first element
const tail = function(array) {
  return array.slice(1);
};

module.exports = tail;