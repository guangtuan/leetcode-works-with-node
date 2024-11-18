describe('1094. Car Pooling', () => {
    const ts = [
        {
            trips: [
                [2, 1, 5],
                [3, 3, 7],
            ],
            capacity: 4,
            expected: false,
        },
        {
            trips: [
                [2, 1, 5],
                [3, 3, 7],
            ],
            capacity: 5,
            expected: true,
        },
    ]

    const resolve = require('./index')
    for (let t of ts) {
        it(`${JSON.stringify(t)}`, () => {
            expect(resolve(t.trips, t.capacity)).toStrictEqual(t.expected)
        })
    }
})
