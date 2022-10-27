const assert = require('assert');
const resolve = require('./index');

const testCases = [
    {
        input: [-2, 0, 0, 2, 2],
        expected: [
            [-2, 0, 2]
        ]
    },
    {
        input: [0, 1, 1],
        expected: []
    },
    {
        input: [0, 0, 0],
        expected: [
            [0, 0, 0]
        ]
    },
    {
        input: [-1, 0, 1, 2, -1, -4],
        expected: [
            [-1, 0, 1],
            [-1, -1, 2],
        ]
    }
];

describe("#15. 3sum", () => {
    testCases.forEach(({ input, expected }) => {
        it(`test case is ${JSON.stringify({ input, expected })}`, () => {
            const result = resolve(input)
            console.log(`result of ${input} is ${result}`)
            assert.deepEqual(
                expected.map(triple => triple.sort().join(",")).sort(),
                result.map(triple => triple.sort().join(",")).sort(),
            );
        });
    });
});