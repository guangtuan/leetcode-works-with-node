describe('746. 使用最小花费爬楼梯', () => {
    const ts = [
        {
            cost: [10, 15],
            expected: 10,
        },
        {
            cost: [0, 1, 1, 0],
            expected: 1,
        },
        {
            cost: [10, 15, 20],
            expected: 15,
        },
        {
            cost: [1, 100, 1, 1, 1, 100, 1, 1, 100, 1],
            expected: 6,
        },
    ]
    const resolve = require('./index')
    for (let t of ts) {
        it(`${JSON.stringify(t)}`, () => {
            const { cost, expected } = t
            expect(resolve(cost)).toStrictEqual(expected)
        })
    }
})
