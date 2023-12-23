const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {};
  sentence = sentence.replace(/\s/g, '');
  for (let i = 0; i < sentence.length; i ++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};

module.exports = letterPositions;

/*console.log(letterPositions("hello"));
const actual = letterPositions("hallo canada");
assertArrayEqual(actual["a"],[1,6,8,10]);
assertArrayEqual(actual["a"],[1,6,8,9]);*/