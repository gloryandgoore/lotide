const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };

const findKey = function (object, callback) {
    for (let vacaySpot in object) {
        if (callback(object[vacaySpot])) {
            return vacaySpot;
        }
    }
};

  let answer = findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars == 3) 

  console.log(assertEqual(answer, "Akaleri"));
  console.log(assertEqual(answer, "noma"));

  module.exports = findKey;