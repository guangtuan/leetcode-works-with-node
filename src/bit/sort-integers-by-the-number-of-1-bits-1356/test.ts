describe('1356. Sort Integers by The Number of 1 Bits', () => {
    const assert = require('assert')
    const resolve = require('./index')
    const testCases = [
        {
            input: [0, 1, 2, 3, 4, 5, 6, 7, 8],
            expected: [0, 1, 2, 4, 8, 3, 5, 6, 7],
        },
        {
            input: [1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1],
            expected: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024],
        },
    ]
    const run = (testCase: { input: number[]; expected: number[] }) => {
        it(`${JSON.stringify(testCase)}`, () => {
            assert.deepEqual(resolve(testCase.input), testCase.expected)
        })
    }
    testCases.forEach(run)
})
