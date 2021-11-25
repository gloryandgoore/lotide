const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(theString) {
  const count = {};
  for (let i = 0; i < theString.length; i++) {
    count[theString.charAt(i)] = theString.split(theString.charAt(i)).length - 1;
  }

  return count;
};

console.log(countLetters('LHL'));
console.log(countLetters('Lighthouse Labs'));
