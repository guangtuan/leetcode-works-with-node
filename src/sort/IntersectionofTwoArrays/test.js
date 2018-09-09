const testCases = [
    {
        a: [1, 2, 2, 1],
        b: [2, 2],
        output: [2]
    },
    {
        a: [4, 9, 5],
        b: [9, 4, 9, 8, 4],
        output: [9, 4]
    }
];

const resolve = require('./index');

const assert = require('assert');

describe("Intersection of Two Arrays", () => {
    testCases.forEach(({a, b, output}) => {
        const actual = resolve(a, b);
        assert.deepEqual(actual.sort(), output.sort());
    });
});