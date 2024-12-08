describe('Q2. 用点构造面积最大的矩形 I', () => {
    const ts = [
        {
            points: [
                [1, 1],
                [1, 3],
                [3, 1],
                [3, 3],
            ],
            expected: 4,
        },
        {
            points: [
                [1, 1],
                [1, 3],
                [3, 1],
                [3, 3],
                [2, 2],
            ],
            expected: -1,
        },
        {
            points: [
                [96, 44],
                [23, 72],
                [96, 72],
                [23, 44],
                [65, 44],
            ],
            expected: -1,
        },
    ]

    const resolve = require('./index')

    for (let t of ts) {
        it(`${JSON.stringify(t)}`, () => {
            expect(resolve(t.points)).toStrictEqual(t.expected)
        })
    }
})
