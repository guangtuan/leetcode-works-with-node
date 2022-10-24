const assert = require('assert');
const resolve = require('./index');

const testCases = [
    {
        input: ".,",
        expected: '.,'
    },
    {
        input: "",
        expected: ""
    },
    {
        input: "hello",
        expected: "holle"
    },
    {
        input: "leetcode",
        expected: "leotcede"
    },
    {
        input: "this_is_a_long_text",
        expected: "thes_os_a_ling_tixt"
    }
];

describe("#345. reverse-vowels-of-a-string", () => {
    testCases.forEach(({ input, expected }) => {
        it(`test case is ${JSON.stringify({ input, expected })}`, () => {
            assert.equal(
                expected,
                resolve(input)
            );
        });
    });
});