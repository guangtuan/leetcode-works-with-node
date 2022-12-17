const resolve = require('./index')
const assert = require('assert')

const testCases = [
    {
        input: [4, 2, 3],
        output: true,
    },
    {
        input: [4, 2, 2],
        output: true,
    },
    {
        input: [4, 2, 1],
        output: false,
    },
    {
        input: [1],
        output: true,
    },
    {
        input: [1, 2, 4, 5],
        output: true,
    },
    {
        input: [1, 2, 5, 4, 5, 7],
        output: true,
    },
    {
        input: [1, 3, 5, 4, 5, 7],
        output: true,
    },
    {
        input: [3, 4, 2, 3],
        output: false,
    },
    {
        input: [1, 3, 2],
        output: true,
    },
    {
        input: [1, 2, 5, 3, 3],
        output: true,
    },
]

const run = ({ input, output }) => {
    it(`input is ${input}, expected output is ${output}`, () => {
        assert.equal(resolve(input), output)
    })
}

describe('non-decreasing-array-665', () => {
    testCases.forEach(run)
})
