const assert = require('assert')
const resolve = require('./index1')

const testCases = [
    {
        input: [1, 3, 2, 1, 3, 2, 2],
        expected: [3, 1],
    },
    {
        input: [1, 1],
        expected: [1, 0],
    },
    {
        input: [0],
        expected: [0, 1],
    },
]

describe('#1st', () => {
    testCases.forEach(({ input, expected }) => {
        it(`input is ${JSON.stringify(input)}, output is ${expected}`, () => {
            console.table(input)
            assert.deepEqual(resolve(input), expected)
        })
    })
})
