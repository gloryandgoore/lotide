const assertEqual = require('../assertEqual');
const assert = require('chai').assert
describe("#assertEqual", () => {
    it ("returns '✅✅✅  Assertion Passed: 1 === 1' for 1, 1", () => {
        assert.deepEqual(assertEqual(1, 1));
    });
    it("returns '🛑🛑🛑 Assertion Failed: Lighthouse Labs !== Bootcamp' for 'Lighthouse Labs', 'Bootcamp'", () => {
        assert.deepEqual(assertEqual("Lighthouse Labs", "Bootcamp"));
    });
    
});


//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);
