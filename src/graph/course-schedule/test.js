const testCases = [
    {
        input: {
            numCourses: 3,
            prerequisites: [[1, 0], [2, 1]]
        },
        exp: true
    },
    require('./specCase3'),
    require('./specCase2'),
    require('./specCase'),
];

const assert = require('assert');
const resolve = require('./index');

describe('#207.course-schedule', () => {
    testCases.forEach(({ input, exp }) => {
        it(`input is ${JSON.stringify(input)} and exp is ${exp}`, () => {
            assert.deepEqual(
                exp,
                resolve(input.numCourses, input.prerequisites)
            );
        });
    });
});