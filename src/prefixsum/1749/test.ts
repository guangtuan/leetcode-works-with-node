describe('1749. Maximum Absolute Sum of Any Subarray', () => {
    const ts = [
        {
            nums: [1, -3, 2, 3, -4],
            expected: 5,
        },
        {
            nums: [2, -5, 1, -4, 3, -2],
            expected: 8,
        },
    ]

    const resolve = require('./index')

    for (let t of ts) {
        it(`${JSON.stringify(t)}`, () => {
            expect(resolve(t.nums)).toStrictEqual(t.expected)
        })
    }
})
