const assert = require('assert')
const resolve = require('./index')

const testCases = [
    {
        input: 5,
        output: 2,
    },
    {
        input: 1,
        output: 0,
    },
    {
        input: 255,
        output: 0,
    },
    {
        input: 8,
        output: 7,
    },
]

const run = ({ input, output }) => {
    it(`input is ${input}, expected output is ${output}`, () => {
        assert.equal(resolve(input), output)
    })
}

describe('buddy Strings', () => {
    testCases.forEach(run)
})
