const assert = require('assert');
const resolve = require('./index1');

const testCases = [
    {
        input: {
            number: '133235',
            digit: '3'
        },
        expected: '13325'
    },
    {
        input: {
            number: '123',
            digit: '3'
        },
        expected: '12'
    },
    {
        input: {
            number: '1231',
            digit: '1'
        },
        expected: '231'
    },
    {
        input: {
            number: '12311231',
            digit: '1'
        },
        expected: '2311231'
    },
    {
        input: {
            number: '551',
            digit: '5'
        },
        expected: '51'
    }
];

describe('#1st', () => {
    testCases.forEach(({input, expected}) => {
        it(`input is ${JSON.stringify(input)}, output is ${expected}`, () => {
            console.table([input.number.split("")]);
            assert.deepEqual(resolve(input.number, input.digit), expected);
        });
    });
});