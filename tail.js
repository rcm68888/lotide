const assertEqual = require ('./assertEqual');

const tail = function(actual) {
  return actual.slice(1);
};

module.exports = tail;
  
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length,2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length,3);
 
const resultz = tail([2]);
assertEqual(resultz[0],2);