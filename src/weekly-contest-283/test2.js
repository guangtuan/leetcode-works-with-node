const assert = require('assert')
const resolve = require('./index2')

const testCases = [
    {
        input: {
            nums: [
                93, 44, 49, 45, 93, 52, 6, 7, 88, 70, 86, 15, 38, 86, 86, 95, 8,
                62, 13, 84, 26, 16, 33, 85, 7, 62, 55, 50, 77, 10, 76, 10, 35,
                67, 19, 12, 24, 39, 76, 37,
            ],
            k: 17,
        },
        output: 250,
    },
    {
        input: {
            nums: [
                96, 44, 99, 25, 61, 84, 88, 18, 19, 33, 60, 86, 52, 19, 32, 47,
                35, 50, 94, 17, 29, 98, 22, 21, 72, 100, 40, 84,
            ],
            k: 35,
        },
        output: 794,
    },
    {
        input: { nums: [1, 4, 25, 10, 25], k: 2 },
        output: 5,
    },
    {
        input: { nums: [5, 6], k: 6 },
        output: 25,
    },
]

describe('#2rd', () => {
    testCases.forEach(({ input, output }) => {
        it(`input is ${JSON.stringify(input)}, output is ${output}`, () => {
            assert.equal(resolve(input.nums, input.k), output)
        })
    })
})
