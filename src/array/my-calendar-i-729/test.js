const MyCalendar = require('./index')
const testCases = [
    [
        { input: [10, 20], output: true },
        { input: [15, 25], output: false },
        { input: [20, 30], output: true }
    ],
    [
        { input: [10, 20], output: true },
        { input: [20, 30], output: true },
        { input: [29, 30], output: false }
    ],
    [
        { input: [47, 50], output: true },
        { input: [33, 41], output: true },
        { input: [39, 45], output: false },
        { input: [33, 42], output: false },
        { input: [25, 32], output: true },
        { input: [26, 35], output: false },
        { input: [19, 25], output: true },
        { input: [3, 8], output: true },
        { input: [8, 13], output: true },
        { input: [18, 27], output: false }
    ],
    [
        { input: [37, 50], output: true },
        { input: [33, 50], output: false },
        { input: [4, 17], output: true },
        { input: [35, 48], output: false },
        { input: [8, 25], output: false }
    ],
    [
        { input: [37, 50], output: true },
        { input: [33, 50], output: false },
        { input: [4, 17], output: true },
        { input: [35, 48], output: false },
        { input: [3, 18], output: false }
    ]
];

const assert = require('assert');

const getProp = prop => obj => obj[prop];

describe('#my calendar 1', () => {
    testCases.forEach(pairs => {
        const input = pairs.map(getProp('input'))
        const output = pairs.map(getProp('output'))
        it(`input: ${JSON.stringify(input)}\noutputs is ${output}`, () => {
            const obj = Object.create(MyCalendar).createNew()
            pairs.forEach(({ input: [start, end], output }) => {
                console.log('______________________________');
                console.log('current ranges', obj.ranges);
                const result = obj.book(start, end);
                console.log(result ? 'can book' : 'can not book');
                assert.equal(output, result);
                console.log('______________________________');
            });
        });
    });
});