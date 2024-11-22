describe('57. Insert Interval', () => {
    const resolve = require('./index')

    const ts = [
        {
            intervals: [[1, 5]],
            newInterval: [6, 8],
            expected: [
                [1, 5],
                [6, 8],
            ],
        },
        {
            intervals: [],
            newInterval: [5, 7],
            expected: [[5, 7]],
        },
        {
            intervals: [
                [1, 3],
                [6, 9],
            ],
            newInterval: [2, 5],
            expected: [
                [1, 5],
                [6, 9],
            ],
        },
        {
            intervals: [
                [1, 2],
                [3, 5],
                [6, 7],
                [8, 10],
                [12, 16],
            ],
            newInterval: [4, 8],
            expected: [
                [1, 2],
                [3, 10],
                [12, 16],
            ],
        },
    ]

    for (let t of ts) {
        it(`${JSON.stringify(t)}`, () => {
            const { intervals, newInterval, expected } = t
            expect(resolve(intervals, newInterval)).toStrictEqual(expected)
        })
    }
})
