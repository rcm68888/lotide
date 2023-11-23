const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion passed: ${actual} === ${expected}`)
  } else {
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`)
  }
}

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