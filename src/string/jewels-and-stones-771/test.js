const assert = require('assert')
const resolve = require('./index')

const testCases = [
    {
        input: {
            J: 'aA',
            S: 'aAAbbbb',
        },
        output: 3,
    },
    {
        input: {
            J: 'z',
            S: 'ZZ',
        },
        output: 0,
    },
]

const run = ({ input, output }) => {
    it(`input is ${JSON.stringify(
        input,
    )}, expected output is ${output}`, () => {
        assert.equal(resolve(input.J, input.S), output)
    })
}

describe('#771. Jewels and Stones', () => {
    testCases.forEach(run)
})
