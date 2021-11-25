const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
    
};
  
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`They are the same.`);
  } else {
    console.log(`They are different.`);
  }
};
    
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


console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6]));// => [3, 4]