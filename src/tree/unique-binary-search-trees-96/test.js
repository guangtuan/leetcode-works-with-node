const assert = require('assert')

const testCases = [
    {
        input: 3,
        output: 5,
    },
]

const resolve = require('./index')

describe('96. Unique Binary Search Trees', () => {
    testCases.forEach(({ input, output }) => {
        it(`input is ${input}, output is ${output}`, () => {
            assert.equal(output, resolve(input))
        })
    })
})
