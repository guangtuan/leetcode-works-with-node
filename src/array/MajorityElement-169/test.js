const testCases = [
    {
        input: [3, 2, 3],
        output: 3,
    },
    {
        input: [2, 2, 1, 1, 1, 2, 2],
        output: 2,
    },
    {
        input: [
            12, 52, 12, 70, 12, 61, 12, 12, 50, 72, 82, 12, 11, 25, 28, 43, 40,
            12, 12, 53, 12, 12, 98, 12, 12, 92, 81, 2, 12, 15, 40, 12, 12, 9,
            12, 31, 12, 12, 12, 12, 77, 12, 12, 50, 12, 12, 12, 93, 41, 92, 12,
            12, 12, 12, 12, 12, 12, 12, 12, 37, 48, 14, 12, 70, 82, 12, 80, 12,
            12, 12, 12, 56, 30, 12, 8, 12, 50, 12, 20, 12, 21, 97, 12, 42, 12,
            10, 12, 38, 73, 15, 9, 11, 79, 12, 12, 28, 51, 12, 15, 12,
        ],
        output: 12,
    },
    {
        input: [
            32, 41, 21, 29, 7, 53, 97, 76, 71, 53, 53, 53, 72, 53, 53, 14, 22,
            53, 67, 53, 53, 53, 54, 98, 53, 46, 53, 53, 62, 53, 76, 20, 60, 53,
            31, 53, 53, 53, 95, 27, 53, 53, 53, 53, 36, 59, 40, 53, 53, 64, 53,
            53, 53, 21, 53, 51, 53, 53, 2, 53, 53, 53, 53, 53, 50, 53, 53, 53,
            23, 88, 3, 53, 61, 19, 53, 68, 53, 35, 42, 53, 53, 48, 34, 54, 53,
            75, 53, 53, 50, 44, 92, 41, 71, 53, 53, 82, 53, 53, 14, 53,
        ],
        output: 53,
    },
]

const assert = require('assert')
const resolve = require('./index')

describe('Majority Element', () => {
    it('', () => {
        testCases.forEach(({ input, output }) => {
            assert.equal(output, resolve(input))
        })
    })
})
