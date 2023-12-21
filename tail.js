const assertEqual = require ('./assertEqual');

// returns the array without the input array's first element
const tail = function(array) {
  return array.slice(1);
};

module.exports = tail;
  
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length,2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length,3);