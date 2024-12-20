describe('1461. Check If a String Contains All Binary Codes of Size K', () => {
    const testCases = [
        {
            input: {
                s: '00110',
                k: 2,
            },
            expected: true,
        },
        {
            input: {
                s: '00110110',
                k: 2,
            },
            expected: true,
        },
        {
            input: {
                s: '0110',
                k: 1,
            },
            expected: true,
        },
        {
            input: {
                s: '0100011100110011110110101101011100110101110100110100110100010010010101001000011111010011011001001011000100001100000111001101100110010111011010111010101001000101101011110100100000111111010011010000110000010100011111011111100001111100110001000010010011001001010001011001011000011111100011111100101111101100101000100010111011000101100010101100010100001010011001010110100101100111111101110111100010110101000001101101100000010101001010100010011101001010011000001010101010001011110001111010011110110111001001000001101100101111000000010101010110000100111000111001000000001111010101101000101110001010111101101111111111000110010100100100111111001101111011101100100000111010000010000100010110001100000111001101110111111000010010000000000111001011001001000110000110000',
                k: 19,
            },
            expected: false,
        },
    ]

    const { hasAllCodes, hasAllCodes2 } = require('./index')

    for (let testCase of testCases) {
        it(`${JSON.stringify(testCase)}`, () => {
            expect(
                hasAllCodes(testCase.input.s, testCase.input.k),
            ).toStrictEqual(testCase.expected)
            expect(
                hasAllCodes2(testCase.input.s, testCase.input.k),
            ).toStrictEqual(testCase.expected)
        })
    }
})
