describe('56. Merge Intervals', () => {
    const resolve = require('./index')

    const ts = [
        {
            intervals: [
                [1, 3],
                [2, 6],
                [8, 10],
                [15, 18],
            ],
            expected: [
                [1, 6],
                [8, 10],
                [15, 18],
            ],
        },
        {
            intervals: [
                [1, 4],
                [4, 5],
            ],
            expected: [[1, 5]],
        },
        {
            intervals: [
                [1, 4],
                [0, 0],
            ],
            expected: [
                [0, 0],
                [1, 4],
            ],
        },
    ]

    for (let t of ts) {
        it(`${JSON.stringify(t)}`, () => {
            const { intervals, expected } = t
            expect(resolve(intervals)).toStrictEqual(expected)
        })
    }
})
