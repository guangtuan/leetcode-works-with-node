const resolve = require('./index')
const assert = require('assert')

const testCases = [
    {
        input: 2,
        expected: 91,
    },
    {
        input: 0,
        expected: 1,
    },
    {
        input: 1,
        expected: 10,
    },
    {
        input: 3,
        expected: 739,
    },
]

describe('#357 count-numbers-with-unique-digits', () => {
    testCases.forEach(({ input, expected }) => {
        it(`input is ${input} and expected is ${expected}`, () => {
            assert.equal(resolve(input), expected)
        })
    })
})
