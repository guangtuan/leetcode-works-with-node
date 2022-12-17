const resolve = require('./index')
const assert = require('assert')

const testCases = [
    {
        input: 16,
        output: true,
    },
    {
        input: 14,
        output: false,
    },
    {
        input: 15 * 15,
        output: true,
    },
    {
        input: 22555 * 22555,
        output: true,
    },
    {
        input: 14 * 14,
        output: true,
    },
]

describe('valid perfect square', () => {
    testCases.forEach(({ input, output }) => {
        it(`input is ${input} and output is ${output}`, () => {
            assert.equal(resolve(input), output)
        })
    })
})
