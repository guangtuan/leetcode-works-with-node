describe('识别数组中的最大异常值', () => {
    const ts = [
        {
            nums: [6, -31, 50, -35, 41, 37, -42, 13],
            expected: -35,
        },
        {
            nums: [1, 1, 1, -3, -1, -1, 5],
            expected: 5,
        },
        {
            nums: [2, 3, 5, 10],
            expected: 10,
        },
        {
            nums: [-2, -1, -3, -6, 4],
            expected: 4,
        },
        {
            nums: [1, 1, 1, 1, 1, 5, 5],
            expected: 5,
        },
        {
            nums: [1, 2, 3, 4, 6],
            expected: 4,
        },
        {
            nums: [1, 2, 7, 4, 6],
            expected: 6,
        },
    ]

    const resolve = require('./index')

    for (let t of ts) {
        it(`${JSON.stringify(t)}`, () => {
            expect(resolve(t.nums)).toStrictEqual(t.expected)
        })
    }
})
