describe('Q1. 使数组元素互不相同所需的最少操作次数', () => {
    const ts = [
        {
            nums: [1, 2, 3, 4, 2, 3, 3, 5, 7],
            expected: 2,
        },
        {
            nums: [4, 5, 6, 4, 4],
            expected: 2,
        },
        {
            nums: [6, 7, 8, 9],
            expected: 0,
        },
    ]

    const resolve = require('./index')

    for (let t of ts) {
        it(`${JSON.stringify(t)}`, () => {
            expect(resolve(t.nums)).toStrictEqual(t.expected)
        })
    }
})
