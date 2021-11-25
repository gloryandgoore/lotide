const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`They are the same.`);
  } else {
    console.log(`They are different.`);
  }
};

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

const letterPositions = function(sentence) {
  const newObject = {};
  for (let i = 0; i < sentence.length; i++) {
    let character = sentence[i];
    if (character !== " ") {
      if (newObject[character]) {
        newObject[character].push[i];
      } else {
        newObject [character] = [i];
      }
    }
  }
  return newObject;
};

assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2,], [3]);
assertArraysEqual(letterPositions("hello").o, [4]);