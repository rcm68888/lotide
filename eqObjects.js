const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

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

module.exports = eqObjects;

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);
const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);