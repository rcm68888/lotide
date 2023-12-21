const assertEqual = require('./assertEqual');

//takes an object and a value and returns the first key which contains the given value
const findKeyByValue = function (object, value){
  let loop = Object.values(object)
  let key = (Object.keys(object))
  let output = ""
for (let i= 0; i < loop.length;i ++){

  if (loop[i] === value) {
    output = key[i]

  }
}
 return output
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