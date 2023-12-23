const eqObjects = require('./eqObjects')
const eqArrays = require('./eqArrays')

//determines if the two objects are identical
const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅  Assertion Passed:${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑  Assertion Failed:${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;