const assert = require('assert')
const resolve = require('./index1')

const testCases = [
    {
        input: {
            s: '01234567890',
            k: 2,
        },
        expected: '27',
    },
    {
        input: {
            s: '1234',
            k: 2,
        },
        expected: '37',
    },
    {
        input: {
            s: '11111222223',
            k: 3,
        },
        expected: '135',
    },
    {
        input: {
            s: '00000000',
            k: 3,
        },
        expected: '000',
    },
]

describe('#1st', () => {
    testCases.forEach(({ input, expected }) => {
        it(`input is ${JSON.stringify(input)}, output is ${expected}`, () => {
            assert.deepEqual(resolve(input.s, input.k), expected)
        })
    })
})
