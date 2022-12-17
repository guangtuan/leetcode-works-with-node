const assert = require('assert')
const resolve = require('./index2')

const testCases = [
    {
        input: '247+38',
        expected: '2(47+38)',
    },
    {
        input: '12+34',
        expected: '1(2+3)4',
    },
    {
        input: '999+999',
        expected: '(999+999)',
    },
]

describe('#1st', () => {
    testCases.forEach(({ input, expected }) => {
        it(`input is ${input}, output is ${expected}`, () => {
            assert.deepEqual(resolve(input), expected)
        })
    })
})
