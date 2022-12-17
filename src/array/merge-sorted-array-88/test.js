const resolve = require('./index')
const assert = require('assert')

const testCases = [
    {
        input: {
            nums1: [1, 2, 3, 0, 0, 0],
            nums2: [2, 5, 6],
            m: 3,
            n: 3,
        },
        output: [1, 2, 2, 3, 5, 6],
    },
    {
        input: {
            nums1: [1],
            nums2: [],
            m: 1,
            n: 0,
        },
        output: [1],
    },
    {
        input: {
            nums1: [1, 3, 5, 7, 9],
            nums2: [2, 4, 6, 8, 10],
            m: 3,
            n: 0,
        },
        output: [1, 3, 5],
    },
]

describe('#88. Merge Sorted Array', () => {
    testCases.forEach(({ input, output }) => {
        it(`input is ${input} and output is ${output}`, () => {
            resolve(input.nums1, input.m, input.nums2, input.n)
            assert.deepEqual(input.nums1, output)
        })
    })
})
