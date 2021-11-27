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
      console.log(`✅✅✅ It has passed!`);
    } else {
      console.log(`🛑🛑🛑 It has failed!`);
    }
  };
  
  const takeUntil = function(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      array.splice(i);
      return array;
    }
  }
  
  };
  
  
  
  
  
  
  
  const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  const results1 = takeUntil(data1, x => x < 0);
  console.log(results1);
  
  console.log('---');
  
  
  const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const results2 = takeUntil(data2, x => x === ',');
    console.log(results2);
  
  assertArraysEqual(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x[data2.length -1]), [ 'I\'ve', 'been', 'to', 'Hollywood' ])
  
  //[ 1, 2, 5, 7, 2 ]
  //---
  //[ 'I\'ve', 'been', 'to', 'Hollywood' ]
  
  