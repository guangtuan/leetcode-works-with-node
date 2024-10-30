describe('2429. Minimize XOR', () => {
    const assert = require('assert')
    const resolve = require('./index')
    const testCases = [
        {
            input: { num1: 3, num2: 5 },
            expected: 3,
        },
        {
            input: { num1: 1, num2: 12 },
            expected: 3,
        },
        {
            input: { num1: 25, num2: 72 },
            expected: 24,
        },
    ]
    const run = (testCase: {
        input: { num1: number; num2: number }
        expected: number
    }) => {
        it(`${JSON.stringify(testCase)}`, () => {
            assert.deepEqual(
                resolve(testCase.input.num1, testCase.input.num2),
                testCase.expected,
            )
        })
    }
    testCases.forEach(run)
})
