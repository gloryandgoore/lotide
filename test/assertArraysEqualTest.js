const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert

describe("#assertArrayEqual", () => {
    it ("returns They are the same. for [1, 2, 3], [1, 2, 3]", () => {
        assert.deepEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]));
    });
    
});

//assertArraysEqual([1, 2, 3], [1, 2, 3]);