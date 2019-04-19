const testCases = [
    {
        input: "a1b2",
        output: ["a1b2", "a1B2", "A1b2", "A1B2"]
    },
    {
        input: "3z4",
        output: ["3z4", "3Z4"]
    },
    {
        input: "12345",
        output: ["12345"]
    }
];

const assert = require('assert');
const resolve = require('./index');

describe('Letter Case Permutation', () => {
    testCases.forEach(({ input, output }) => {
        it(`input is ${input}, output is ${output}`, () => {
            assert.deepEqual(
                output,
                resolve(input)
            );
        });
    });
});