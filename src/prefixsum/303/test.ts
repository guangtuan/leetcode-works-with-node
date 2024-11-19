describe('303. Range Sum Query - Immutable', () => {
    const NumArray = require('./index')

    const ts = [
        {
            argss: [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]],
            expected: [null, 1, -1, -3],
        },
    ]

    for (let index in ts) {
        it(`case ${index}`, () => {
            const { argss, expected } = ts[index]
            let arr = new NumArray(argss[0][0])
            for (let i = 1; i < argss.length; i++) {
                const args = argss[i]
                expect(arr.sumRange(...args)).toStrictEqual(expected[i])
            }
        })
    }
})
