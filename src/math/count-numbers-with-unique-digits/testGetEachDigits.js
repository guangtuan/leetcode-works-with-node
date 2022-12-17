const resolve = require('./getEachDigits')
const assert = require('assert')

const testCases = [
    {
        input: 91,
        output: [9, 1],
    },
    {
        input: 100,
        output: [1, 0, 0],
    },
]

describe('#helper get each digits', () => {
    testCases.forEach(({ input, output }) => {
        it(`input is ${input} and output is ${output}`, () => {
            assert.deepEqual(resolve(input), output)
        })
    })
})
