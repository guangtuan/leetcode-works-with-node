const resolve = require('./index')

const testCases = [
    {
        input: 1,
        output: 0,
    },
    {
        input: 2,
        output: 2,
    },
    {
        input: 3,
        output: 3,
    },
    {
        input: 9,
        output: 6,
    },
    {
        input: 12,
        output: 7,
    },
]

const assert = require('assert')

describe('#2 keys keyboard', () => {
    testCases.forEach(({ input, output }) => {
        it(`input ${input}, output is ${output}`, () => {
            assert.equal(output, resolve.call(null, input))
        })
    })
})
