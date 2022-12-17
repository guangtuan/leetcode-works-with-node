const assert = require('assert')
const resolve = require('./index2')

const testCases = [
    {
        input: 'RLRSLL',
        output: 5,
    },
    {
        input: 'LLRR',
        output: 0,
    },
    {
        input: 'R',
        output: 0,
    },
    {
        input: 'RL',
        output: 2,
    },
    {
        input: 'RLL',
        output: 3,
    },
    {
        input: 'SLL',
        output: 2,
    },
    {
        input: 'LLRLRLLSLRLLSLSSSS',
        output: 10,
    },
    {
        input: 'SSRSSRLLRSLLRSRSSRLRRRRLLRRLSSRR',
        output: 20,
    },
    {
        input: 'RRRSSSLRSR',
        output: 5,
    },
]

describe('#2nd', () => {
    testCases.forEach(({ input, output }) => {
        it(`input is ${JSON.stringify(input)}, output is ${output}`, () => {
            assert.equal(resolve(input), output)
        })
    })
})
