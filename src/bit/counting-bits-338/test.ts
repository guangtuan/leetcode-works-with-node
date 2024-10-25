describe('Counting Bits#338', () => {
    const assert = require('assert')
    const resolve = require('./index')
    const testCases = [
        {
            input: 2,
            expected: [0, 1, 1],
        },
        {
            input: 5,
            expected: [0, 1, 1, 2, 1, 2],
        },
    ]
    const run = ({
        input,
        expected,
    }: {
        input: number
        expected: number[]
    }) => {
        it(`input is ${input}, expected is ${expected}`, () => {
            assert.deepEqual(resolve(input), expected)
        })
    }
    testCases.forEach(run)
})
