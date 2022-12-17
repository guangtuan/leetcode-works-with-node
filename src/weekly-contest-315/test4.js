const assert = require('assert')
const resolve = require('./index4')

const testCases = [
    {
        input: require('./testcase.json'),
        expected: 0,
    },
    {
        input: {
            nums: [1, 3, 5, 2, 7, 5],
            mink: 1,
            maxK: 5,
        },
        expected: 2,
    },
    {
        input: {
            nums: [1, 1, 1, 1],
            mink: 1,
            maxK: 1,
        },
        expected: 10,
    },
]

describe('#4th', () => {
    testCases.forEach(({ input, expected }, index) => {
        it(`case ${index}`, () => {
            const label = `weekly-contest#315 -> case${index}`
            console.time(label)
            const actual = resolve(input.nums, input.mink, input.maxK)
            console.timeLog(label)
            assert.deepEqual(actual, expected)
        })
    })
})
