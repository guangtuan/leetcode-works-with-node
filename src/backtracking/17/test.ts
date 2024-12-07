describe('17. 电话号码的字母组合', () => {
    const ts = [
        {
            digits: '23',
            expected: ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'],
        },
        {
            digits: '',
            expected: [],
        },
        {
            digits: '2',
            expected: ['a', 'b', 'c'],
        },
    ]

    const resolve = require('./index')

    for (let t of ts) {
        it(`${JSON.stringify(t)}`, () => {
            expect(resolve(t.digits)).toStrictEqual(t.expected)
        })
    }
})
