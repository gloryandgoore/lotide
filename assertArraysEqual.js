const eqArrays = require('./eqArrays')

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`They are the same.`);
  } else {
    console.log(`They are different.`);
  }
};
  
  module.exports = assertArraysEqual;