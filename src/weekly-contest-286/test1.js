const assert = require("assert");
const resolve = require("./index1");

const testCases = [{
    input: {
        nums1: [1, 2, 3],
        nums2: [2, 4, 6]
    },
    output: [[1, 3], [4, 6]]
}, {
    input: {
        nums1: [1, 2, 3, 3],
        nums2: [1, 1, 2, 2]
    },
    output: [[3], []]
}];

describe('#1st', () => {
    testCases.forEach(({input, output}) => {
        it(`input is ${JSON.stringify(input)}, output is ${output}`, () => {
            assert.deepEqual(resolve(input.nums1, input.nums2), output);
        });
    });
});