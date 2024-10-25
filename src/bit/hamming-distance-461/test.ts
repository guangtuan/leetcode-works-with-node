describe('461. Hamming Distance', () => {
    const assert = require('assert')
    const resolve = require('./index')
    const testCases = [
        {
            input: { x: 1, y: 4 },
            expected: 2,
        },
    ]
    const run = (testCase: {
        input: { x: number; y: number }
        expected: number
    }) => {
        it(`${JSON.stringify(testCase)}`, () => {
            assert.deepEqual(
                resolve(testCase.input.x, testCase.input.y),
                testCase.expected,
            )
        })
    }
    testCases.forEach(run)
})
