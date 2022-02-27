const assert = require("assert");
const resolve = require("./index1");

const testCases = [{
    input: { words: ["pay", "attention", "practice", "attend"], pref: "at" },
    output: 2
}, {
    input: { words: ["leetcode", "win", "loops", "success"], pref: "code" },
    output: 0
}];

describe('#1st', () => {
    testCases.forEach(({ input, output }) => {
        it(`input is ${input}, output is ${output}`, () => {
            assert.equal(output, resolve(input.words, input.pref));
        });
    });
});