const eqArrays = require('./eqArrays')
const assertArraysEqual= require('./assertArraysEqual')

    
const middle = function(array) {

  let resultArray = [];
  const lengthOfArray = array.length;
  const mid = Math.ceil((lengthOfArray) / 2 - 1);
  const mid2 = Math.floor((lengthOfArray) / 2 + 1);

  
  // Arrays with odd numbers should return the middle element
  // Arrays with even numbers should return the middle two elements

  if (array.length > 2) {
    for (let index = mid; index < mid2; index++) {
      resultArray.push(array[index]);
    }
  }
    

  return resultArray;

};

//console.log(middle, [1, 2, 3, 4, 5, 6]) // => [3, 4])




module.exports = middle;