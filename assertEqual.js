const pass = "✅✅✅  Assertion Passed: [actual] === [expected]";
const fail = "🛑🛑🛑 Assertion Failed: [actual] !== [expected]";



const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${pass}`);
  } else {
    console.log(`${fail}`);
  }
};


// Test code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
