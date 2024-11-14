describe('1343. Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold', () => {
    const testCases = [
        {
            input: {
                arr: [2, 2, 2, 2, 5, 5, 5, 8],
                k: 3,
                threshold: 4,
            },
            expected: 3,
        },
    ]

    const { numOfSubarrays, numOfSubarrays2 } = require('./index')

    for (let testCase of testCases) {
        it(`${JSON.stringify(testCase)}`, () => {
            expect(
                numOfSubarrays(
                    testCase.input.arr,
                    testCase.input.k,
                    testCase.input.threshold,
                ),
            ).toStrictEqual(testCase.expected)
            expect(
                numOfSubarrays2(
                    testCase.input.arr,
                    testCase.input.k,
                    testCase.input.threshold,
                ),
            ).toStrictEqual(testCase.expected)
        })
    }
})
