const assert = require('assert')
const resolve = require('./index')

const testCases = [
    {
        input: {
            nums: [3, 4, 9, 1, 3, 9, 5],
            key: 9,
            k: 1,
        },
        output: [1, 2, 3, 4, 5, 6],
    },
    {
        input: {
            nums: [2, 2, 2, 2, 2],
            key: 2,
            k: 2,
        },
        output: [0, 1, 2, 3, 4],
    },
]

describe('#1', () => {
    testCases.forEach(({ input, output }) => {
        it(`input is ${JSON.stringify(input)}, output is ${output}`, () => {
            assert.deepEqual(resolve(input.nums, input.key, input.k), output)
        })
    })
})
