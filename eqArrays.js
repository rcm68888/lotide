const eqArrays = function (actual, expected){
  let match = true
  for(let i =0; i < actual.length; i ++){
    if (actual[i] !== expected[i]) {
      match = false   
    }  
  } 
  return match
}
module.exports = eqArrays;

/*const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};*/