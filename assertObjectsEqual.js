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

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2);

module.exports = assertObjectsEqual;