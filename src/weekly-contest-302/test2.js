const assert = require('assert')
const resolve = require('./index2')

const testCases = [
    {
        input: [
            229, 398, 269, 317, 420, 464, 491, 218, 439, 153, 482, 169, 411, 93,
            147, 50, 347, 210, 251, 366, 401,
        ],
        expected: 973,
    },
    {
        input: [4, 6, 10, 6],
        expected: 12,
    },
    {
        input: [18, 43, 36, 13, 7],
        expected: 54,
    },
    {
        input: [10, 12, 19, 14],
        expected: -1,
    },
]

describe('#2st', () => {
    testCases.forEach(({ input, expected }) => {
        it(`input is ${JSON.stringify(input)}, output is ${expected}`, () => {
            console.table(input)
            assert.deepEqual(resolve(input), expected)
        })
    })
})
