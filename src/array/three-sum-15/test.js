const testCases = [{
    input: [-1, 0, 1, 2, -1, -4],
    output: [
        [-1, 0, 1],
        [-1, -1, 2]
    ]
}];

const assert = require('assert');
const resolve = require('./index');

// describe('#three sum', () => {
//     testCases.forEach(({ input, output }) => {
//         it(`input is ${input}, output is ${output}`, () => {
//             assert.deepEqual(resolve(input), output);
//         })
//     });
// });