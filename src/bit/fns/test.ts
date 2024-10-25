describe('fns for bit operation', () => {
    const assert = require('assert')
    const {
        getBitLength,
        getBitLength2,
        invert,
        count1Bit,
        count1Bit2,
    } = require('./index')
    for (let i = 0; i <= 10; i++) {
        const value = Math.pow(2, i) - 1
        it(`count 1 bit for ${value}`, () => {
            assert.deepEqual(count1Bit(value), i)
            assert.deepEqual(count1Bit2(value), i)
        })
    }
    it(`count 1 bit for ${0b10101}`, () => {
        assert.deepEqual(count1Bit(0b10101), 3)
    })
    for (let i = 0; i < 5; i++) {
        const num = Math.floor(Math.random() * 100000)
        it(`get bit length measure ${num.toString(2)}`, () => {
            assert.deepEqual(getBitLength(num), num.toString(2).length)
            assert.deepEqual(getBitLength2(num), num.toString(2).length)
        })
    }
    for (let num = 0; num <= 5; num++) {
        const input = Math.floor(Math.random() * 10 ** 7)
        it(`invert ${input.toString(2)}`, () => {
            const stringWay = (num: number): number => {
                const str: string[] = num.toString(2).split('')
                const invertStr = str.map((str: string) =>
                    str === '0' ? '1' : '0',
                )
                while (invertStr.length != 0) {
                    if (invertStr[0] === '0') {
                        invertStr.shift()
                    } else {
                        break
                    }
                }
                return invertStr
                    .map((it) => Number.parseInt(it))
                    .reduce((acc, value, index, array) => {
                        return (
                            acc + Math.pow(2, array.length - 1 - index) * value
                        )
                    }, 0)
            }
            const inverted = invert(input)
            assert.deepEqual(inverted, stringWay(input))
        })
    }
})
