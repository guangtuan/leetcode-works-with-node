const resolve = require('./index');
const assert = require('assert');
const testCases = [{
  input: [1, 2, 3, 1],
  output: true
}, {
  input: [1, 2, 3, 4],
  output: false
}, {
  input: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2],
  output: true
}];

describe('#Contains Duplicate', () => {
  testCases.forEach(({ input, output }) => {
    it(`input is ${input} and output is ${output}`, () => {
      assert.equal(output, resolve.call(null, input));
    });
  });
});