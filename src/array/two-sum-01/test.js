const testCases = [{
    input: {
        num: [2, 7, 11, 15],
        target: 9
    },
    output: [0, 1]
}, {
    input: {
        num: [5, 6, 7, 8],
        target: 10
    },
    output: []
}, {
    input: {
        num: [3, 3],
        target: 6
    },
    output: [0, 1]
}];

const assert = require('assert');
const resolve = require('./index');

describe('#two sum', () => {
    testCases.forEach(({ input: { num, target }, output }) => {
        it(`input is ${num} and ${target}, output is ${output}`, () => {
            assert.deepEqual(resolve(num, target), output);
        })
    });
});