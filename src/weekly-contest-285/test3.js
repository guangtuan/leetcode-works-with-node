const assert = require("assert");
const resolve = require("./index3");

const testCases = [{
    input: {
        numArrows: 9,
        aliceArrows: [1, 1, 0, 1, 0, 0, 2, 1, 0, 1, 2, 0]
    },
    output: [0, 0, 0, 0, 1, 1, 0, 0, 1, 2, 3, 1]
}, {
    input: {
        numArrows: 3,
        aliceArrows: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2]
    },
    output: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0]
}, {
    input: {
        numArrows: 89,
        aliceArrows: [3, 2, 28, 1, 7, 1, 16, 7, 3, 13, 3, 5],
    },
    output: [21, 3, 0, 2, 8, 2, 17, 8, 4, 14, 4, 6]
}];

describe('#3rd', () => {
    testCases.forEach(({input, output}) => {
        it(`input is ${JSON.stringify(input)}, output is ${output}`, () => {
            assert.deepEqual(resolve(input.numArrows, input.aliceArrows), output);
        });
    });
});