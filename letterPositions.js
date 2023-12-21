const eqArrays = require('./eqArrays');
const assertArraysEqual = require ('./assertArraysEqual');

//takes in a sentence and returns the indices where each letter occurs in the sentence
const letterPositions = function (sentence) {
  const results = {};
  let index = 0;
  for (const item of sentence) {
    if (results[item]) {
      results[item].push(index);
    } else {
      results[item] = [index];
    }
    index++;
  }
  delete results[' '];
  return results;
};

module.exports = letterPositions;

console.log(letterPositions("zebra is in the zoo"));

const actual = letterPositions("zebra is in the zoo");
assertArraysEqual(actual["z"],[0,16]);
assertArraysEqual(actual["o"],[17,18]);
assertArraysEqual(actual["i"],[6,9]);