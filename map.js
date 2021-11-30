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



const map = function(array, callback) {
    const results = [];
    for (let item of array) {
      results.push(callback(item));
  }
    
    return results;
  }
const words = ["apple", "shirt", "fan", "light", "sanitizer"];
const results1 = map(words, word => word[0]);


assertArraysEqual(map(["apple", "shirt", "fan", "light", "sanitizer"], word => word[word.length -1]), ["a", "s", "f", "l", "s"])
assertArraysEqual(map(["apple", "shirt", "fan", "light", "sanitizer"], word => word[word.length -1]), [ 'e', 's', 'n', 't', 'r' ])
assertArraysEqual(map(words, word => word), ["apple", "shirt", "fan", "light", "sanitizer"]);
assertArraysEqual(map(words, word => word[0]), ["a", "s", "f", "l", "s"])
assertArraysEqual(map(words, word => word.length), [5, 5, 3, 5, 9]); 

module.exports = map;