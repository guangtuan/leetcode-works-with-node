const assert = require("assert");
const resolve = require("./index1");

const testCases = [{
    input: "K1:L2",
    output: ["K1", "K2", "L1", "L2"]
}, {
    input: "A1:F1",
    output: ["A1", "B1", "C1", "D1", "E1", "F1"]
}];

describe('#1st', () => {
    testCases.forEach(({ input, output }) => {
        it(`input is ${input}, output is ${output}`, () => {
            assert.deepEqual(output, resolve(input));
        });
    });
});

describe('test', () => {
    const convertToLetter = number => {
        if (number === 0) {
            return "A";
        }
        let ret = "";
        let remain = number;
        while (remain > 0) {
            let result = number % 26;
            ret = ret + String.fromCharCode(result + "A".charCodeAt(0));
            remain = number - (Math.ceil(remain / 26) + 1) * result;
        }
        return ret;
    }
    let s = convertToLetter(0);
    console.log(s);
});