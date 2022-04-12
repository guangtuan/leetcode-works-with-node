module.exports = function (number) {
    let remain = number;
    let ret = [];
    while (remain > 0) {
        let curr = remain % 10;
        remain = Math.floor(remain / 10);
        console.log(JSON.stringify({curr, remain}));
        ret.unshift(curr);
    }
    return ret;
}