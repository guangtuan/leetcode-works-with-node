const resolve = require('./index');
const assert = require('assert');

const testCases = [
    {
        input: {
            total: 10,
            cost1: 2,
            cost2: 5
        },
        expected: 10,
    },
    {
        input: {
            total: 20,
            cost1: 10,
            cost2: 5
        },
        expected: 9,
    },
    {
        input: {
            total: 5,
            cost1: 10,
            cost2: 10
        },
        expected: 1,
    },
    // {
    //     input: {
    //         total: 1000000,
    //         cost1: 1,
    //         cost2: 1
    //     },
    //     expected: 1,
    // },
];

describe('number-of-ways-to-buy-pens-and-pencils', () => {
    testCases.forEach(testCase => {
        it(`input ${JSON.stringify(testCase.input)}, expected is ${testCase.expected}`, () => {
            assert.equal(
                resolve(
                    testCase.input.total,
                    testCase.input.cost1,
                    testCase.input.cost2,
                ),
                testCase.expected
            );
        });
    });
});
