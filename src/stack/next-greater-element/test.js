const resolve = require('./index')

const testCases = [
    {
        input: {
            nums1: [4, 1, 2],
            nums2: [1, 3, 4, 2],
        },
        output: [-1, 3, -1],
    },
    {
        input: {
            nums1: [2, 4],
            nums2: [1, 2, 3, 4],
        },
        output: [3, -1],
    },
    {
        input: {
            nums1: [1, 3, 5, 2, 4],
            nums2: [6, 5, 4, 3, 2, 1, 7],
        },
        output: [7, 7, 7, 7, 7],
    },
]

const assert = require('assert')

const run = ({ input, output }) => {
    it(`input is ${JSON.stringify(input)}, output is ${output}`, () => {
        assert.deepEqual(output, resolve(input.nums1, input.nums2))
    })
}

describe('next greater number', () => {
    testCases.forEach(run)
})
