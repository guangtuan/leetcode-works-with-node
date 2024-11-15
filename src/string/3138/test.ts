describe('3138. Minimum Length of Anagram Concatenation', () => {
    const testCases = [
        {
            input: {
                s: 'abba',
            },
            expected: 2,
        },
        {
            input: {
                s: 'cdef',
            },
            expected: 4,
        },
        {
            input: {
                s: 'cccccccc',
            },
            expected: 1,
        },
    ]

    const resolve = require('./index')

    for (let testCase of testCases) {
        it(`${JSON.stringify(testCase)}`, () => {
            expect(resolve(testCase.input.s)).toStrictEqual(testCase.expected)
        })
    }
})
