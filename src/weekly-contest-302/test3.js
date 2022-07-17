const assert = require('assert');
const resolve = require('./index3');

const testCases = [
    {
        input: {
            nums: [
                "22222222222222222222222222222222222222222222222225",
                "22222222222222222222222222222222222222222222222221",
                "22222222222222222222222222222222222222222222222223",
                "22222222222222222222222222222222222222222222222228",
                "22222222222222222222222222222222222222222222222226"
            ],
            queries: [[1, 40], [3, 40], [2, 40], [5, 40], [4, 40]]
        },
        expected: [1, 0 , 2, 3, 4]
    },
    {
        input: {
            nums: ["102", "473", "251", "814"],
            queries: [[1, 1], [2, 3], [4, 2], [1, 2]]
        },
        expected: [2, 2, 1, 0]
    },
    {
        input: {
            nums: ["002", "473", "251", "814"],
            queries: [[1, 1]]
        },
        expected: [2]
    },
    {
        input: {
            nums: ["24", "37", "96", "04"],
            queries: [[2, 1], [2, 2]]
        },
        expected: [3, 0]
    }
];

describe('#3st', () => {
    testCases.forEach(({input, expected}) => {
        it(`input is ${JSON.stringify(input)}, output is ${expected}`, () => {
            console.table(input.nums);
            console.table(input.queries);
            assert.deepEqual(resolve(input.nums, input.queries), expected);
        });
    });
});