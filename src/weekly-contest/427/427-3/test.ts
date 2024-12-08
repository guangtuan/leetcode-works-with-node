describe('Q3. 长度可被 K 整除的子数组的最大元素和', () => {
    const ts = [
        {
            nums: [1, 2],
            k: 1,
            expected: 3,
        },
        {
            nums: [-1, -2, -3, -4, -5],
            k: 4,
            expected: -10,
        },
        {
            nums: [-5, 1, 2, -3, 4],
            k: 2,
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
