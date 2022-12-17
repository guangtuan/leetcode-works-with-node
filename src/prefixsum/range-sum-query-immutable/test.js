const assert = require('assert')
const NumArray = require('./index')

const testCases = [
    {
        nums: [-2, 0, 3, -5, 2, -1],
        actions: [
            {
                input: [0, 2],
                expected: 1,
            },
            {
                input: [2, 5],
                expected: -1,
            },
            {
                input: [0, 5],
                expected: -3,
            },
        ],
    },
]

describe('#range-sum-query-immutable', () => {
    testCases.forEach(({ nums, actions }) => {
        console.table([nums])
        const numArray = new NumArray(nums)
        actions.forEach(({ input, expected }) => {
            it(`input is ${input}, expected is ${expected}`, () => {
                let actual = numArray.sumRange(input[0], input[1])
                assert.deepEqual(actual, expected)
            })
        })
    })
})
