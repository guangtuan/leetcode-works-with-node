describe('Q1. 转换数组', () => {
    const ts = [
        {
            nums: [3, -2, 1, 1],
            expected: [1, 1, 1, 3],
        },
        {
            nums: [-1, 4, -1],
            expected: [-1, -1, 4],
        },
    ]

    const resolve = require('./index')

    for (let t of ts) {
        it(`${JSON.stringify(t)}`, () => {
            expect(resolve(t.nums)).toStrictEqual(t.expected)
        })
    }
})
