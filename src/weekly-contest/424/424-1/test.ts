describe('', () => {
    const ts = [
        { input: [1, 0, 2, 0, 3], exp: 2 },
        { input: [2, 3, 4, 0, 4, 1, 0], exp: 0 },
    ]

    const resolve = require('./index')

    for (let t of ts) {
        it(`${JSON.stringify(t)}`, () => {
            expect(resolve(t.input)).toStrictEqual(t.exp)
        })
    }
})
