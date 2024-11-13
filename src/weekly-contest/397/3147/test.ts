describe('3147. Taking Maximum Energy From the Mystic Dungeon', () => {
    const testCases = [
        {
            input: {
                energy: [5, 2, -10, -5, 1],
                k: 3,
            },
            expected: 3,
        },
        {
            input: {
                energy: [-2, -3, -1],
                k: 2,
            },
            expected: -1,
        },
        {
            input: {
                energy: [1, 3, -5, 6, 7, -8],
                k: 1,
            },
            expected: 5,
        },
    ]

    const resolve = require('./index')

    for (let testCase of testCases) {
        it(`${JSON.stringify(testCase)}`, () => {
            expect(
                resolve(testCase.input.energy, testCase.input.k),
            ).toStrictEqual(testCase.expected)
        })
    }
})
