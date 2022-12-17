const assert = require('assert')
const resolve = require('./index1')

const testCases = [
    {
        input: 1234,
        expected: 3412,
    },
    {
        input: 65875,
        expected: 87655,
    },
]

describe('#1st', () => {
    testCases.forEach(({ input, expected }) => {
        it(`input is ${JSON.stringify(input)}, output is ${expected}`, () => {
            assert.deepEqual(resolve(input), expected)
        })
    })
})
