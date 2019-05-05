const testCases = [
    {
        input: [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]],
        output: [[5, 0], [7, 0], [5, 2], [6, 1], [4, 4], [7, 1]]
    }
];

const assert = require('assert');
const resolve = require('./index');

describe('#406.Queue Reconstruction by Height', () => {
    testCases.forEach(({ input, output }) => {
        it(`input is ${input} and output is ${output}`, () => {
            assert.deepEqual(
                output,
                resolve(input)
            );
        });
    });
});