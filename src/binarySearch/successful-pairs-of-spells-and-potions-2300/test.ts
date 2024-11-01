describe('2300. Successful Pairs of Spells and Potions', () => {
    const testCases = [
        {
            input: {
                spells: [5, 1, 3],
                potions: [1, 2, 3, 4, 5],
                success: 7,
            },
            expected: [4, 0, 3],
        },
        {
            input: {
                spells: [3, 1, 2],
                potions: [8, 5, 8],
                success: 16,
            },
            expected: [2, 0, 2],
        },
        {
            input: {
                spells: [39, 34, 6, 35, 18, 24, 40],
                potions: [27, 37, 33, 34, 14, 7, 23, 12, 22, 37],
                success: 43,
            },
            expected: [10, 10, 9, 10, 10, 10, 10],
        },
    ]

    const resolve = require('./index')

    for (let testCase of testCases) {
        it(`${JSON.stringify(testCase)}`, () => {
            expect(
                resolve(
                    testCase.input.spells,
                    testCase.input.potions,
                    testCase.input.success,
                ),
            ).toStrictEqual(testCase.expected)
        })
    }
})
