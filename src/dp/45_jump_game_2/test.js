const resolve = require('./index')
const assert = require('assert')

const testCases = [
    {
        input: [2, 3, 1, 1, 4],
        expected: 2,
    },
    {
        input: [2, 3, 0, 1, 4],
        expected: 2,
    },
    {
        input: [2, 1],
        expected: 1,
    },
    {
        input: [0],
        expected: 0,
    },
    {
        input: [2, 3, 1],
        expected: 1,
    },
    {
        input: [7, 0, 9, 6, 9, 6, 1, 7, 9, 0, 1, 2, 9, 0, 3],
        expected: 2,
    },
    {
        input: [9, 7, 9, 4, 8, 1, 6, 1, 5, 6, 2, 1, 7, 9, 0],
        expected: 2,
    },
]

describe('#Jump Game II', () => {
    testCases.forEach((testCase) => {
        it(`input ${testCase.input}, expected is ${testCase.expected}`, () => {
            assert.equal(resolve.call(null, testCase.input), testCase.expected)
        })
    })
})
