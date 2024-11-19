describe('3152. Special Array II', () => {
    const ts = [
        {
            nums: [3, 4, 1, 2, 6, 7],
            queries: [
                [0, 4],
                [4, 5],
            ],
            expected: [false, true],
        },
        {
            nums: [4, 3, 1, 6],
            queries: [
                [0, 2],
                [2, 3],
            ],
            expected: [false, true],
        },
        {
            nums: [1],
            queries: [[0, 0]],
            expected: [true],
        },
        {
            nums: [1, 1],
            queries: [[0, 1]],
            expected: [false],
        },
    ]

    const resolve = require('./index')

    for (let t of ts) {
        it(`${JSON.stringify(t)}`, () => {
            expect(resolve(t.nums, t.queries)).toStrictEqual(t.expected)
        })
    }
})
