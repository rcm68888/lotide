const eqArrays = function(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false;
  }
  for(let i=0; i< arr1.length; i++){
      if (arr1[i] !== arr2[i]){
        return false
      }
  }
  return true
}

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
  }
}

const eqObjects = function(object1, object2) {
  let keys = Object.keys(object1);
  let status = true;


  if((Object.keys(object1).length) === Object.keys(object2).length){
    for (const key of keys){
      if (Array.isArray(object1[key])) {
        let arrays = eqArrays(object1[key], object2[key]);
        if(arrays === false) status = false;  
      }else if(object1[key] !== object2[key]){
        status = false;
      }
    }
  }
  else{
    status = false;
  }
  return status; 
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅  Assertion Passed:${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑  Assertion Failed:${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

assertObjectsEqual(cd, dc)