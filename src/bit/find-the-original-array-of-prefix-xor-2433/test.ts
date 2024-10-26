describe('2433. Find The Original Array of Prefix Xor', () => {
    const assert = require('assert')
    const resolve = require('./index')
    const testCases = [
        {
            input: [5, 2, 0, 3, 1],
            expected: [5, 7, 2, 3, 2],
        },
        {
            input: [13],
            expected: [13],
        },
    ]
    const run = (testCase: { input: number[]; expected: number[] }) => {
        it(`${JSON.stringify(testCase)}`, () => {
            assert.deepEqual(resolve(testCase.input), testCase.expected)
        })
    }
    testCases.forEach(run)
})
