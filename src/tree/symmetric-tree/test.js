const { horizontalBuildBST } = require('../../../DataStructure/Tree/create');
const resolve = require('./index');
const assert = require('assert');

const testCases = [
    {
        input: [1, 2, 2, 3, 4, 4, 3],
        output: true
    },
    {
        input: [1, 2, 2, null, 3, null, 3],
        output: false
    },
    {
        input: [],
        output: true
    },
];

describe('#101. Symmetric Tree', () => {
    testCases.forEach(({ input, output }) => {
        it(`input is ${input}, output is ${output}`, () => {
            const realInput = horizontalBuildBST(input);
            assert.equal(output, resolve(realInput));
        });
    });
});