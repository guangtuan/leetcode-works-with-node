describe('2559. Count Vowel Strings in Ranges', () => {
    const resolve = require('./index')

    const ts = [
        {
            words: ['aba', 'bcb', 'ece', 'aa', 'e'],
            queries: [
                [0, 2],
                [1, 4],
                [1, 1],
            ],
            expected: [2, 3, 0],
        },
    ]

    for (let t of ts) {
        it(`${JSON.stringify(t)}`, () => {
            const { words, queries, expected } = t
            expect(resolve(words, queries)).toStrictEqual(expected)
        })
    }
})
