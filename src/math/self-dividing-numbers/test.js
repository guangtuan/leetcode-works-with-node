const resolve = require('./index');
const assert = require('assert');

const testCases = [
    {
        input: {
            left: 1, right: 22
        },
        expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
    },
    {
        input: {
            left: 47, right: 85
        },
        expected: [48, 55, 66, 77]
    }
];

describe("#728 self-dividing-numbers", () => {
    testCases.forEach(({ input, expected }) => {
        it(`input is ${JSON.stringify(input)} and output is ${expected}`, () => {
            assert.deepEqual(resolve(input.left, input.right), expected);
        });
    });
});