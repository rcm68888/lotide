const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

//assertArrayEqual(actual, expected);
const without = function(array, remove){
  let newArray = array
  
for (let i =0; i <= remove.length; i ++){
  const index = array.indexOf(remove[i])
if (index > -1){
  newArray.splice(index, 1)
} 
}
return newArray
}

assertArraysEqual(without([1, 2, 3], [1]), [2, 3] )
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"] )

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
//Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;