const assert = require('assert')
const resolve = require('./index')

const testCases = [
    {
        input: 2,
        output: 2,
    },
    {
        input: 3,
        output: 3,
    },
    {
        input: 4,
        output: 5,
    },
    {
        input: 5,
        output: 8,
    },
]

const run = ({ input, output }) => {
    it(`input is ${input}, expected output is ${output}`, () => {
        assert.equal(resolve(input), output)
    })
}

describe('climbing stairs', () => {
    testCases.forEach(run)
})
