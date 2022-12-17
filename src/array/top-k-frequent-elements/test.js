const assert = require('assert')
const resolve = require('./index')

const testCases = [
    {
        input: {
            nums: [1, 1, 1, 2, 2, 3],
            k: 2,
        },
        output: [1, 2],
    },
    {
        input: {
            nums: [1],
            k: 1,
        },
        output: [1],
    },
    {
        input: {
            nums: [-1, -1],
            k: 1,
        },
        output: [-1],
    },
    {
        input: {
            nums: [5, 3, 1, 1, 1, 3, 73, 1],
            k: 2,
        },
        output: [1, 3],
    },
]

const run = ({ input, output }) => {
    it(`input is ${JSON.stringify(
        input,
    )}, expected output is ${output}`, () => {
        assert.deepEqual(resolve(input.nums, input.k), output)
    })
}

describe('#347. Top K Frequent Elements', () => {
    testCases.forEach(run)
})
