const assertArrayEqual = require('./assertArraysEqual.js');

const middle = function(array) {
  let centre = Math.floor(array.length / 2)
  let newArray = []
  //for (let i =0; i < array.length; i ++){
    
    //console.log(array[i])
     if (array.length < 3){
      newArray = []
    }else if (array.length % 2 === 0){
      // console.log(array[centre-1], array[centre])
      newArray.push(array[centre-1])
      newArray.push(array[centre])
    } else {
      // console.log(array[centre])
      newArray.push(array[centre])
    }
   return newArray
}