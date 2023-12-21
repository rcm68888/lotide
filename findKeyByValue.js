const assertEqual = require('./assertEqual');

//takes an object and a value and returns the first key which contains the given value
const findKeyByValue = function(obj, value){
  return Object.keys(obj).find(key => obj[key] === value);
}

module.exports = findKeyByValue;

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  comedy: "The Big Bang Theory"
}

findKeyByValue(bestTVShowsByGenre, "The Wire")

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Big Bang Theory"), "comedy");