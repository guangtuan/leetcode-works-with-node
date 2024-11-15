describe('2841. Maximum Sum of Almost Unique Subarray', () => {
    const testCases = [
        {
            nums: [2, 6, 7, 3, 1, 7],
            m: 3,
            k: 4,
            exp: 18,
        },
        {
            nums: [5, 9, 9, 2, 4, 5, 4],
            m: 1,
            k: 3,
            exp: 23,
        },
    ]

    const resolve = require('./index')

    for (let testCase of testCases) {
        it(`${JSON.stringify(testCase)}`, () => {
            expect(
                resolve(testCase.nums, testCase.m, testCase.k),
            ).toStrictEqual(testCase.exp)
        })
    }
})
