const assert = require('assert')
const resolve = require('./index1')

const testCases = [
    {
        input: [2, 4, 1, 1, 6, 5],
        output: 3,
    },
    {
        input: [6, 6, 5, 5, 4, 1],
        output: 0,
    },
    {
        input: [1, 2, 2],
        output: 0,
    },
    {
        input: [2, 3, 2],
        output: 1,
    },
    {
        input: [3, 2, 4],
        output: 1,
    },
]

describe('#1st', () => {
    testCases.forEach(({ input, output }) => {
        it(`input is ${JSON.stringify(input)}, output is ${output}`, () => {
            assert.equal(resolve(input), output)
        })
    })
})
