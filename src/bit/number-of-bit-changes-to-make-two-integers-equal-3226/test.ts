describe('3226. Number of Bit Changes to Make Two Integers Equal', () => {
    const assert = require('assert');
    const resolve = require('./index');
    const testCases = [
        {
            input: { n: 13, k: 4 },
            expected: 2
        },
        {
            input: { n: 21, k: 21 },
            expected: 0
        },
        {
            input: { n: 14, k: 13 },
            expected: -1
        }
    ];
    const run = (testCase: { input: { n: number, k: number }, expected: number }) => {
        it(`${JSON.stringify(testCase)}`, () => {
            assert.deepEqual(resolve(testCase.input.n, testCase.input.k), testCase.expected);
        });
    };
    testCases.forEach(run);
});

