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

    const eqObjects = function(obj1, obj2) {
        const key1 = Object.keys(obj1);
        const key2 = Object.keys(obj2);
        if (key1.length !== key2.length) {
          return false;
        }
      
        for (const key of key1) {
          if (Array.isArray(obj1[key])) {
            if (obj1[key].length !== obj2[key].length) {
              return false;
            } else if (!eqArrays(obj1[key], obj2[key])) {
              return false;
            }
          } else if (obj1[key] !== obj2[key]) {
            return false;
          }
        }
      
        return true;
      };

      const assertObjectsEqual = function (actual, expected) {
        const inspect = require("util").inspect;
        const answer = eqObjects(actual, expected);
        if (answer) {
          console.log(
            `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
          );
        } else {
          console.log(
            `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
          );
        }
      };