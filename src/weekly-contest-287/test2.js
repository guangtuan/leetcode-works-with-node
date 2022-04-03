const assert = require("assert");
const resolve = require("./index2");

const testCases = [
    {
        input: [[1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5], [4, 8], [4, 9], [10, 4], [10, 9]],
        expected: [[1, 2, 10], [4, 5, 7, 8]]
    },
    {
        input: [[2, 3], [1, 3], [5, 4], [6, 4]],
        expected: [[1, 2, 5, 6], []]
    }
];

describe('#2nd', () => {
    testCases.forEach(({input, expected}) => {
        it(`input is ${JSON.stringify(input)}, output is ${expected}`, () => {
            assert.deepEqual(resolve(input), expected);
        });
    });
});