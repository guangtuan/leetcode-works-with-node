describe('78. 子集', () => {
    const ts = [
        {
            nums: [1, 2, 3],
            expected: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]],
        },
        {
            nums: [0],
            expected: [[], [0]],
        },
    ]

    const resolve = require('./index')

    for (let t of ts) {
        it(`${JSON.stringify(t)}`, () => {
            const { nums, expected } = t
            const result: number[][] = resolve(nums)
            expect(
                result.sort((a, b) => a.join('').localeCompare(b.join(''))),
            ).toStrictEqual(
                expected.sort((a, b) => a.join('').localeCompare(b.join(''))),
            )
        })
    }
})
