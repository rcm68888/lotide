const eqArrays = function(actual, expected) {
  let match = true;
  for (let i = 0; i < actual.length; i ++) {
    if (actual[i] !== expected[i]) {
      match = false;
    }
  } return match;

};
const assertArrayEqual = function(actual, expected) {
  let equivalentArrays = eqArrays(actual, expected);
  if (equivalentArrays === true) {
    console.log(`✅  Assertion Passed: ${actual} === ${expected}`);
  } else if (equivalentArrays === false) {
    console.log(`🛑  Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

console.log(letterPositions("hello"));

const actual = letterPositions("hallo canada");
assertArrayEqual(actual["a"],[1,6,8,10]);
assertArrayEqual(actual["a"],[1,6,8,9]);