const ts = [
    {
        input: [1, 2, 3, 1],
        output: 4,
    },
    {
        input: [2, 7, 9, 3, 1],
        output: 12,
    },
    {
        input: [],
        output: 0,
    },
    {
        input: [1, 1],
        output: 1,
    },
]

describe('#house-robber', () => {
    const resolve = require('./index')
    ts.forEach((testCase) => {
        it(`input ${testCase.input}, output is ${testCase.output}`, () => {
            expect(testCase.output).toStrictEqual(
                resolve.call(null, testCase.input),
            )
        })
    })
})
