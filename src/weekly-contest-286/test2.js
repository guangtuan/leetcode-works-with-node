const assert = require("assert");
const resolve = require("./index2");

const testCases = [{
    input: [1, 1, 2, 3, 5],
    output: 1
}, {
    input: [1, 1, 2, 2, 3, 3],
    output: 2
}];

describe('#1st', () => {
    testCases.forEach(({input, output}) => {
        it(`input is ${JSON.stringify(input)}, output is ${output}`, () => {
            assert.deepEqual(resolve(input), output);
        });
    });
});