const resolve = require('./index');
const assert = require('assert');

const testCases = [
    {
        input: 50,
        expected: [1, 2]
    },
    {
        input: 2,
        expected: [0, 1]
    },
    {
        input: 5,
        expected: [2, 0]
    }
];

describe('#670 -> maximum-swap', () => {
    testCases.forEach((testCase) => {
        it(`input ${testCase.input}, expected is ${testCase.expected}`, () => {
            assert.deepEqual(resolve(testCase.input), testCase.expected)
        });
    });
});
