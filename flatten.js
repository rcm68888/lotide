const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

//takes in an array and if the array has other arrays, it then removes the nested arrays
const flatten = function(array){
  let newArray = []
for (let i =0; i < array.length; i ++){
  
  if (Array.isArray(array[i])){
    for(let j=0; j < array[i].length; j ++){
      
      newArray.push(array[i][j])
    } 
  } else{
    newArray.push(array[i])
  }
}  return (newArray)
}
console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])
assertArraysEqual(flatten([[1, 2], [3, 4], [5], [6]]), [1, 2, 3, 4, 5, 6])

module.exports = flatten;