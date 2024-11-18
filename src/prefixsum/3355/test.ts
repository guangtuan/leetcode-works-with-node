describe('3355. Zero Array Transformation I', () => {
    const ts = [
        {
            input: {
                nums: [1, 0, 1],
                queries: [[0, 2]],
            },
            exp: true,
        },
        {
            input: {
                nums: [4, 3, 2, 1],
                queries: [
                    [1, 3],
                    [0, 2],
                ],
            },
            exp: false,
        },
    ]

    const resolve = require('./index')

    for (let t of ts) {
        it(`${JSON.stringify(t)}`, () => {
            expect(resolve(t.input.nums, t.input.queries)).toStrictEqual(t.exp)
        })
    }
})
