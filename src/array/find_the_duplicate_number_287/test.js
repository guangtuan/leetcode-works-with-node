const assert = require('assert')
const resolve = require('./index')

const testCases = [
    {
        input: [1, 3, 4, 2, 2],
        output: 2,
    },
    {
        input: [3, 1, 3, 4, 2],
        output: 3,
    },
    {
        input: [2, 2, 2, 2, 2],
        output: 2,
    },
    {
        input: [1, 4, 4, 2, 4],
        output: 4,
    },
]

const run = ({ input, output }) => {
    it(`input is ${input}, expected output is ${output}`, () => {
        assert.equal(resolve(input), output)
    })
}

describe('find the duplicate number', () => {
    testCases.forEach(run)
})
