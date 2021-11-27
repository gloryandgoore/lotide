const eqArrays = function(arrayOne, arrayTwo) {

  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};




const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


  
//Returns true if both objects have identical keys with identical values
// otherwise you get back a big fat false!
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
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqArrays(eqObjects(cd, dc))); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqArrays((eqObjects(cd, cd2)))); // => false