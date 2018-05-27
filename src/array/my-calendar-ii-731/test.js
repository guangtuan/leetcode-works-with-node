const testCases = [
    [
        { input: [10, 20], output: true },
        { input: [50, 60], output: true },
        { input: [10, 40], output: true },
        { input: [5, 15], output: false },
        { input: [5, 10], output: true },
        { input: [25, 55], output: true }
    ],
    [
        { input: [47, 50], output: true },
        { input: [1, 10], output: true },
        { input: [27, 36], output: true },
        { input: [40, 47], output: true },
        { input: [20, 27], output: true },
        { input: [15, 23], output: true },
        { input: [10, 18], output: true },
        { input: [27, 36], output: true },
        { input: [17, 25], output: false },
        { input: [8, 17], output: false },
        { input: [24, 33], output: false },
        { input: [23, 28], output: false },
        { input: [21, 27], output: false },
        { input: [47, 50], output: true },
        { input: [14, 21], output: false }
    ],
    [
        { input: [12, 26], output: true },
        { input: [37, 47], output: true },
        { input: [90, 100], output: true },
        { input: [21, 34], output: true },
        { input: [99, 100], output: true },
        { input: [95, 100], output: false },
        { input: [4, 16], output: true },
        { input: [67, 86], output: true },
        { input: [55, 69], output: true },
        { input: [63, 81], output: false },
        { input: [51, 66], output: true },
        { input: [18, 35], output: false },
        { input: [51, 64], output: false },
        { input: [40, 56], output: false },
        { input: [11, 28], output: false },
        { input: [13, 27], output: false },
        { input: [38, 51], output: true },
        { input: [71, 89], output: true },
        { input: [12, 27], output: false },
        { input: [35, 50], output: false },
        { input: [92, 100], output: false },
        { input: [48, 59], output: false },
        { input: [81, 92], output: false },
        { input: [96, 100], output: false },
        { input: [98, 100], output: false },
        { input: [63, 74], output: false },
        { input: [41, 51], output: false },
        { input: [61, 76], output: false },
        { input: [27, 39], output: false },
        { input: [70, 84], output: false },
        { input: [56, 75], output: false },
        { input: [21, 31], output: false },
        { input: [63, 79], output: false },
        { input: [31, 43], output: false },
        { input: [26, 44], output: false },
        { input: [25, 43], output: false },
        { input: [42, 58], output: false },
        { input: [30, 43], output: false },
        { input: [19, 31], output: false },
        { input: [26, 37], output: true },
        { input: [94, 100], output: false },
        { input: [55, 69], output: false },
        { input: [7, 20], output: false },
        { input: [96, 100], output: false },
        { input: [91, 100], output: false },
        { input: [76, 87], output: false },
        { input: [59, 75], output: false },
        { input: [9, 24], output: false },
        { input: [22, 32], output: false },
        { input: [3, 21], output: false },
        { input: [72, 88], output: false },
        { input: [29, 43], output: false },
        { input: [74, 84], output: false },
        { input: [1, 19], output: false },
        { input: [14, 33], output: false },
        { input: [62, 79], output: false },
        { input: [47, 57], output: false },
        { input: [96, 100], output: false },
        { input: [67, 84], output: false },
        { input: [53, 66], output: false }
    ]
];


const MyCalendarTwo = require('./index');

const assert = require('assert');

const getProp = prop => obj => obj[prop];

describe('#my calendar two', () => {
    testCases.forEach(pairs => {
        const input = pairs.map(getProp('input'))
        const output = pairs.map(getProp('output'))
        it(`input: ${JSON.stringify(input)}\noutputs is ${output}`, () => {
            const obj = new MyCalendarTwo();
            pairs.forEach(({ input: [start, end], output }) => {
                const result = obj.book(start, end);
                // console.log('insert', start, end);
                // console.log('result is', result);
                // console.log(JSON.stringify(obj));
                assert.equal(output, result);
            });
        });
    });
});