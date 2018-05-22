const getMaxDepth = root => {
    let attach = (root, depth, depths) => {
        if (root === null) {
            depths.push(depth);
        } else {
            attach(root.left, depth + 1, depths);
            attach(root.right, depth + 1, depths);
        }
    }
    let depths = [];
    attach(root, 0, depths);
    return Math.max.apply(null, depths);
}

const collectNodes = (root, maxDepth) => {
    let collect = (nodes, dep, resultSet) => {
        if (dep === 0) {
            return;
        }
        resultSet.push(nodes.map(_ => _ === null ? null : _.val));
        let nextNodes = nodes.reduce((acc, curr) => {
            if (curr === null) {
                acc = acc.concat([null, null]);
            } else {
                acc = acc.concat([curr.left, curr.right]);
            }
            return acc;
        }, []);
        collect(nextNodes, dep - 1, resultSet);
    };
    let nodeVals = [];
    collect([root], maxDepth, nodeVals);
    return nodeVals;
}

const insertExistingNode = arr => arr.reduce((acc, curr, currIndex, arr) => {
    acc.push(curr);
    if (currIndex !== arr.length - 1) {
        acc.push("_");
    }
    return acc;
}, []);

const fill = nodes => nodes.map(insertExistingNode).reduce((acc, curr, currIndex, arr) => {
    let reverseDep = arr.length - currIndex;
    let gap = Math.pow(2, reverseDep) - 1;
    let placeHolder = Array(gap).fill('').map(_ => "_");
    let line = []
    while (curr.length !== 0) {
        line = line.concat(placeHolder, curr.shift());
    }
    line = line.concat(placeHolder);
    acc.push(line);
    return acc;
}, []);

const printBST = root => {
    let maxDepth = getMaxDepth(root);
    let matrix = fill(collectNodes(root, maxDepth));
    print(matrix);
}

const print = nodess => {
    let nullToCharN = arr => arr = arr.map(ele => ele === null ? 'n' : ele);
    nodess.map(nullToCharN).map(nodes => nodes.join('')).forEach(line => {
        console.log(line);
    });
}

const { horizontalBuildBST } = require('./create')


module.exports = {
    printBST: printBST
}