const assert = require('assert')
const resolve = require('./index2-1')

const testCases = [
    {
        input: { s: 'leetcode', t: 'coats' },
        output: 7,
    },
    {
        input: { s: 'night', t: 'thing' },
        output: 0,
    },
    {
        input: {
            s: 'cotxazilut',
            t: 'nahrrmcchxwrieqqdwdpneitkxgnt',
        },
        output: 27,
    },
]

describe('#2st', () => {
    testCases.forEach(({ input, output }) => {
        it(`input is ${JSON.stringify(input)}, output is ${output}`, () => {
            assert.equal(resolve(input.s, input.t), output)
        })
    })
})
