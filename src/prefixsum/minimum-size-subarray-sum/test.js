const resolve = require('./index')

const assert = require('assert')

const testCases = [
    {
        target: 11,
        nums: [1, 2, 3, 4, 5],
        expected: 3,
    },
    {
        target: 11,
        nums: [1, 1, 1, 1, 1, 1, 1, 1],
        expected: 0,
    },
    {
        target: 4,
        nums: [1, 4, 4],
        expected: 1,
    },
    {
        target: 7,
        nums: [2, 3, 1, 2, 4, 3],
        expected: 2,
    },
]

describe('#209 minimum-size-subarray-sum', () => {
    testCases.forEach(({ target, nums, expected }) => {
        it(`expected is ${expected}`, () => {
            console.table([nums])
            const actual = resolve(target, nums)
            assert.deepEqual(actual, expected)
        })
    })
})
