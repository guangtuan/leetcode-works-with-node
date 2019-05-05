/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
    const insertIntoArray = (array, position, element) => {
        array.splice(position, 0, element);
    };
    const groupBy = standard => array => array.reduce((acc, currentValue) => {
        const key = standard(currentValue);
        if (acc[key]) {
            acc[key].push(currentValue);
        } else {
            acc[key] = [currentValue];
        }
        return acc;
    }, {});
    const dataGrouped = groupBy(([h, ignore]) => h)(people);
    const heightArray = Object.keys(dataGrouped).sort((key1, key2) => key2 - key1);
    const result = [];
    for (let i = 0; i < heightArray.length; i++) {
        const currentHeight = heightArray[i];
        const currentElements = dataGrouped[currentHeight].sort(([h1, k1], [h2, k2]) => k1 - k2);
        while (currentElements.length > 0) {
            if (result.length === 0) {
                result.push(currentElements.shift());
            } else {
                const currentElement = currentElements.shift();
                let [h, k] = currentElement;
                let insertPosition = 0;
                while (k > 0) {
                    for (; insertPosition < result.length; insertPosition++) {
                        if (k === 0) {
                            break;
                        }
                        if (h <= result[insertPosition][0]) {
                            k--;
                        }
                    }
                }
                insertIntoArray(result, insertPosition, currentElement);
            }
        }
    }
    return result;
};

module.exports = reconstructQueue;