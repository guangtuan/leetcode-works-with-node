const assert = require('assert')
const resolve = require('./index')

const testCases = [
    {
        input: 'ab-cd',
        output: 'dc-ba',
    },
    {
        input: 'a-bC-dEf-ghIj',
        output: 'j-Ih-gfE-dCba',
    },
    {
        input: 'Test1ng-Leet=code-Q!',
        output: 'Qedo1ct-eeLg=ntse-T!',
    },
]

const run = ({ input, output }) => {
    it(`input is ${input}, expected output is ${output}`, () => {
        assert.equal(resolve(input), output)
    })
}

describe('#917.Reverse Only Letters', () => {
    testCases.forEach(run)
})
