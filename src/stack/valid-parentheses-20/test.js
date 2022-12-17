const resolve = require('./index')
const assert = require('assert')

const testCases = [
    {
        input: '()',
        output: true,
    },
    {
        input: '()[]{}',
        output: true,
    },
    {
        input: '(]',
        output: false,
    },
    {
        input: '([)]',
        output: false,
    },
    {
        input: '{[]}',
        output: true,
    },
]

describe('valid-parentheses-20', () => {
    testCases.forEach(({ input, output }) => {
        it(`input is ${input}, output is ${output}`, () => {
            assert.equal(resolve(input), output)
        })
    })
})
