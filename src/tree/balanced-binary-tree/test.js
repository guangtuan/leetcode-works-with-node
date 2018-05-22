const resolve = require('./index');
const TreeNode = require('../../../DataStructure/Tree/TreeNode');
const { printBST } = require('../../../DataStructure/Tree/tools');
const { horizontalBuildBST } = require('../../../DataStructure/Tree/create');
const assert = require('assert');

const testCases = [{
    input: [3, 9, 20, null, null, 15, 7],
    output: true
}, {
    input: [1, 2, 2, 3, 3, null, null, 4, 4],
    output: false
}, {
    input: [1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, null, null, 5, 5],
    output: true
}, {
  input: [],
  output: true
}];

describe('#balanced binary tree', () => {
    testCases.forEach(({ input, output }) => {
        it(`input is ${input}, output is ${output}`, () => {
            const realInput = horizontalBuildBST(input);
            assert.equal(output, resolve(realInput));
        });
    });
});