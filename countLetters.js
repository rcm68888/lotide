const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;
const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]
const countLetters = function (string) {
  const results = {}
  // let newString = string.split("")
  // console.log(newString)
  for (const item of string){

    if (letters.includes(item)) {

      if (results[item]){
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    } 
  }
  return results
}

const actual = countLetters("lighthouse in the house")

assertEqual(actual['l'], 1)
assertEqual(actual['i'], 2)
assertEqual(actual['g'], 1)
assertEqual(actual['h'], 4)
assertEqual(actual['t'], 2)
assertEqual(actual['o'], 2)
assertEqual(actual['u'], 2)
assertEqual(actual['s'], 2)
assertEqual(actual['n'], 1)
assertEqual(actual[''], undefined)

module.exports = countLetters;