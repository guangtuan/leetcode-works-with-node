const testCases = [
    {
        input: 0,
        output: [1],
    },
    {
        input: 1,
        output: [1, 1],
    },
    {
        input: 2,
        output: [1, 2, 1],
    },
    {
        input: 3,
        output: [1, 3, 3, 1],
    },
    {
        input: 4,
        output: [1, 4, 6, 4, 1],
    },
]

const assert = require('assert')
const resolve = require('./index')

describe("#119.Pascal's Triangle II", () => {
    testCases.forEach(({ input, output }) => {
        it(`input is ${input} and output is ${output}`, () => {
            assert.deepEqual(resolve(input), output)
        })
    })
})
