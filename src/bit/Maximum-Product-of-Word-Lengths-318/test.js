const testCases = [
    {
        input: ["abcw", "baz", "foo", "bar", "xtfn", "abcdef"],
        output: 16
    },
    {
        input: ["a", "ab", "abc", "d", "cd", "bcd", "abcd"],
        output: 4
    },
    {
        input: ["a", "aa", "aaa", "aaaa"],
        output: 0
    }
];

const assert = require('assert');
const resolve = require('./index');

console.time("me");
describe('Maximum Product of Word Lengths', () => {
    testCases.forEach(({input, output}) => {
        it(`input is ${input}, output is ${output}`, () => {
            assert.equal(
                output,
                resolve(input)
            );
        });
    });
});
console.timeEnd("me");