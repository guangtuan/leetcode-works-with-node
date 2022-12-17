const resolve = require('./index')
const assert = require('assert')

const testCases = [
    {
        input: 1,
        output: 1,
    },
    {
        input: 4,
        output: 2,
    },
    {
        input: 8,
        output: 2,
    },
]

describe('sqrt x', () => {
    testCases.forEach(({ input, output }) => {
        it(`input is ${input} and output is ${output}`, () => {
            assert.equal(resolve(input), output)
        })
    })
})
