const resolve = require('./index')

const testCases = [
    {
        input: [1, 2, 1],
        output: [2, -1, 2],
    },
]

const assert = require('assert')

const run = ({ input, output }) => {
    it(`input is ${input}, output is ${output}`, () => {
        assert.deepEqual(output, resolve(input))
    })
}

describe('next greater number', () => {
    testCases.forEach(run)
})
