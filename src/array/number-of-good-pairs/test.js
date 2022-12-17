const testCases = [
    {
        input: [1, 2, 3, 1, 1, 3],
        output: 4,
    },
    {
        input: [1, 1, 1, 1],
        output: 6,
    },
    {
        input: [1, 2, 3],
        output: 0,
    },
    {
        input: [
            5, 5, 1, 77, 96, 96, 89, 80, 12, 23, 1, 6, 3, 66, 39, 88, 48, 38,
            44, 32, 44, 36, 60, 87, 53, 77, 72, 49, 13, 39, 60, 60, 71, 68, 80,
            75, 79, 38, 4, 14, 59, 75, 6, 91, 87, 95, 25, 55, 83, 18, 26, 59,
            53, 100, 42, 96, 76, 22, 21, 4, 22, 46, 34, 39, 98, 82, 54, 73, 52,
            33, 47, 73, 54, 23, 82, 98, 13, 51, 52, 1, 96, 69, 76,
        ],
        output: 35,
    },
]

const assert = require('assert')
const resolve = require('./index')

describe('#1512. Number of Good Pairs', () => {
    testCases.forEach(({ input, output }) => {
        it(`input is ${input} and output is ${output}`, () => {
            assert.equal(resolve(input), output)
        })
    })
})
