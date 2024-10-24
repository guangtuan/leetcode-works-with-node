describe('3211. Generate Binary Strings Without Adjacent Zeros', () => {
    const assert = require('assert');
    const resolve = require('./index');
    const testCases = [
        {
            input: 1,
            expected: ['0', '1']
        },
        {
            input: 3,
            expected: ["010", "011", "101", "110", "111"]
        }
    ];
    const run = (testCase: { input: number, expected: string[] }) => {
        it(`${JSON.stringify(testCase)}`, () => {
            assert.deepEqual(new Set(resolve(testCase.input)), new Set(testCase.expected));
        });
    };
    testCases.forEach(run);
});
