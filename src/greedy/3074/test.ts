describe('3074. Apple Redistribution into Boxes', () => {
    const testCases = [
        {
            apple: [1, 3, 2],
            capacity: [4, 3, 1, 5, 2],
            expected: 2,
        },
        {
            apple: [5, 5, 5],
            capacity: [2, 4, 2, 7],
            expected: 4,
        },
    ]

    const resolve = require('./index')

    for (let testCase of testCases) {
        it(`${JSON.stringify(testCase)}`, () => {
            expect(resolve(testCase.apple, testCase.capacity)).toStrictEqual(
                testCase.expected,
            )
        })
    }
})
