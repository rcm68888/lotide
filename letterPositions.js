const eqArrays = require('./eqArrays');
const assertArraysEqual = require ('./assertArraysEqual');

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

console.log(letterPositions("hello"));

const actual = letterPositions("hallo canada");
assertArraysEqual(actual["a"],[1,7,9,11]);
assertArraysEqual(actual["a"],[1,6,8,9]);
assertArraysEqual(actual["l"],[2,3]);