const resolve = require('./index');
const assert = require('assert');

const testCases = [
  {
    input: {
      array: [3, 1, 4, 2],
      p: 6
    },
    output: 1
  },
  {
    input: {
      array: [6, 3, 5, 2],
      p: 9
    },
    output: 2
  },
  {
    input: {
      array: [1, 2, 3],
      p: 3
    },
    output: 0
  },
  {
    input: {
      array: [1, 2, 3],
      p: 7
    },
    output: -1

  },
  {
    input: {
      array: [1000000000, 1000000000, 1000000000],
      p: 3
    },
    output: 0
  },
  {
    input: {
      array: [4, 5, 8, 5, 4],
      p: 7
    },
    output: 1
  },
  {
    input: {
      array: [26, 19, 11, 14, 18, 4, 7, 1, 30, 23, 19, 8, 10, 6, 26, 3],
      p: 26
    },
    output: 3
  },
  {
    input: {
      array: [1, 2, 3, 4, 5, 6],
      p: 13
    },
    output: -1
  }
];

describe("#1590. Make Sum Divisible by P", () => {
  testCases.forEach(({input, output}) => {
    it(`input is ${JSON.stringify(input)} and output is ${output}`, () => {
      assert.strictEqual(
        resolve(input.array, input.p),
        output
      );
    });
  });
});