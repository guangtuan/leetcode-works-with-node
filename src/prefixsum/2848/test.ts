describe('2848. Points That Intersect With Cars', () => {
    const resolve = require('./index')

    const ts = [
        {
            nums: [
                [3, 6],
                [1, 5],
                [4, 7],
            ],
            expected: 7,
        },
    ]

    for (let t of ts) {
        it(JSON.stringify(t), () => {
            expect(resolve(t.nums)).toStrictEqual(t.expected)
        })
    }
})
