const assert = require('assert')
const resolve = require('./index')

const testCases = [
    {
        input: 'tree',
        output: 'eetr',
    },
    {
        input: 'cccaaa',
        output: 'cccaaa',
    },
    {
        input: 'Aabb',
        output: 'bbAa',
    },
]

const run = ({ input, output }) => {
    it(`input is ${input}, expected output is ${output}`, () => {
        assert.equal(resolve(input), output)
    })
}

describe('find the duplicate number', () => {
    testCases.forEach(run)
})
