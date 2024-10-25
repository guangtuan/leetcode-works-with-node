describe('2917. Find the K-or of an Array', () => {
    const assert = require('assert');
    const resolve = require('./index');
    const testCases = [
        {
            input: {
                nums: [7,12,9,8,9,15],
                k: 4
            },
            expected: 9
        }
    ];
    const run = (testCase: { input: { nums: number[], k: number }, expected: number }) => {
        it(`${JSON.stringify(testCase)}`, () => {
            assert.deepEqual(resolve(testCase.input.nums, testCase.input.k), testCase.expected);
        });
    };
    testCases.forEach(run);
});
