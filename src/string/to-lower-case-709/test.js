const assert = require('assert')
const resolve = require('./index')

const testCases = [
    {
        input: 'Hello',
        output: 'hello',
    },
    {
        input: 'here',
        output: 'here',
    },
    {
        input: 'LOVELY',
        output: 'lovely',
    },
]

const run = ({ input, output }) => {
    it(`input is ${input}, expected output is ${output}`, () => {
        assert.equal(resolve(input), output)
    })
}

describe('#709. To Lower Case', () => {
    testCases.forEach(run)
})
