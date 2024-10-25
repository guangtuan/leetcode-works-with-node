const assert = require('assert')
const resolve = require('./index')

const testCases = [
    {
        input: 11,
        expected: 3,
    },
    {
        input: 128,
        expected: 1,
    },
    {
        input: 2147483645,
        expected: 30,
    },
]

const run = ({ input, expected }: { input: number; expected: number }) => {
    it(`input is ${input}, expected is ${expected}`, () => {
        assert.equal(resolve(input), expected)
    })
}

describe('number of 1 bits', () => {
    testCases.forEach(run)
})
