const testCases = [
    {
        input: {
            num: [2, 7, 11, 15],
            target: 9,
        },
        output: [1, 2],
    },
]

const assert = require('assert')
const resolve = require('./index')

describe('#two sum II', () => {
    testCases.forEach(({ input: { num, target }, output }) => {
        it(`input is ${num} and ${target}, output is ${output}`, () => {
            assert.deepEqual(resolve(num, target), output)
        })
    })
})
