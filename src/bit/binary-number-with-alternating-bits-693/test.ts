describe('693. Binary Number with Alternating Bits', () => {
    const assert = require('assert');
    const resolve = require('./index');
    const testCases = [
        { input: 5, expected: true },
        { input: 7, expected: false },
        { input: 11, expected: false },
        { input: 17, expected: false },
    ];
    const run = (testCase: { input: number, expected: boolean }) => {
        it(`${JSON.stringify(testCase)}`, () => {
            assert.deepEqual(resolve(testCase.input), testCase.expected);
        });
    };
    testCases.forEach(run);
});
