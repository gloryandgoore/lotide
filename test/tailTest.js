const assert = require('chai').assert;
const tail = require('../tail');


//tail(words); // no need to capture the return value since we are not checking it
describe("#tail", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    it("returns ['Lighthouse', 'Labs'] for tail(words)", () => {
        assert.deepEqual(tail(words), ['Lighthouse', 'Labs']);
    });
});

//assertEqual(words.length, 3);

