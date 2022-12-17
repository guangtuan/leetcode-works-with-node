const resolve = require('./index')
const assert = require('assert')
const testCases = [
    {
        input: [1, 4, 3, 2],
        output: 4,
    },
    {
        input: [6214, -2290, 2833, -7908],
        output: -5075,
    },
]

describe('#561. Array Partition I', () => {
    testCases.forEach(({ input, output }) => {
        it(`input is ${input} and output is ${output}`, () => {
            assert.equal(output, resolve.call(null, input))
        })
    })
})
