describe('Q2. 执行操作后不同元素的最大数量', () => {
    const ts = [
        {
            nums: [9, 5, 5],
            k: 0,
            expected: 2,
        },
        {
            nums: [1, 2, 2, 3, 3, 4],
            k: 2,
            expected: 6,
        },
        {
            nums: [4, 4, 4, 4],
            k: 1,
            expected: 3,
        },
        {
            nums: [9, 10, 9, 9, 9],
            k: 1,
            expected: 4,
        },
    ]

    const resolve = require('./index')

    for (let t of ts) {
        it(`${JSON.stringify(t)}`, () => {
            expect(resolve(t.nums, t.k)).toStrictEqual(t.expected)
        })
    }
})
