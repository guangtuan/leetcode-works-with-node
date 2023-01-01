const assert = require('assert')
const resolve = require('./index')

const testCases = [
    {
        input: {
            sentence: '$76111 ab $6 $',
            discount: 48,
        },
        expected: '$39577.72 ab $3.12 $',
    },
    {
        input: {
            sentence: 'there are $1 $2 and 5$ candies in the shop',
            discount: 50,
        },
        expected: 'there are $0.50 $1.00 and 5$ candies in the shop',
    },
    {
        input: {
            sentence: '1 2 $3 4 $5 $6 7 8$ $9 $10$',
            discount: 100,
        },
        expected: '1 2 $0.00 4 $0.00 $0.00 7 8$ $0.00 $10$',
    },
]

const run = ({ input, expected }) => {
    it(`input is ${JSON.stringify(
        input,
    )}, expected output is ${expected}`, () => {
        assert.equal(resolve(input.sentence, input.discount), expected)
    })
}

describe('#2288. apply-discount-to-prices', () => {
    testCases.forEach(run)
})
