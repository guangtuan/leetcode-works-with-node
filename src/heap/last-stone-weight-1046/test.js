const resolve = require('./index')
const assert = require('assert')

const testCases = [
    {
        input: [2, 7, 4, 1, 8, 1],
        output: 1,
    },
    {
        input: [9, 3, 2, 10],
        output: 0,
    },
]

describe('#1046. Last Stone Weight', () => {
    testCases.forEach(({ input, output }) => {
        it(`input is ${input} and output is ${output}`, () => {
            assert.equal(resolve(input), output)
        })
    })
})
