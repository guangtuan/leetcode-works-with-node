const resolve = require('./index');
const assert = require('assert');

const testCases = [
    {
        input: 0,
        expected: false
    },
    {
        input: -5555,
        expected: false
    },
    {
        input: 256,
        expected: true
    }
];

describe('#295 -> power-of-two', () => {
    testCases.forEach((testCase) => {
        it(`input ${testCase.input}, expected is ${testCase.expected}`, () => {
            assert.deepEqual(resolve(testCase.input), testCase.expected)
        });
    });
});
