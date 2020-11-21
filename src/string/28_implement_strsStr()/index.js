/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

var strStr = function (haystack, needle) {
  const getNext = str => {
    const next = [-1];
    let k = -1;
    let j = 0;
    while (j < str.length) {
      if (k === -1 || str[j] === str[k]) {
        ++k;
        ++j;
        next[j] = k;
      } else {
        k = next[k];
      }
    }
    next.pop();
    return next;
  }
  const next = getNext(needle);
  let i = 0;
  let j = 0;
  while (i < haystack.length && j < needle.length) {
    if (j === -1 || haystack[i] === needle[j]) {
      i++;
      j++;
    }
    else {
      j = next[j];
    }
  }
  if (j === needle.length) {
    return i - j;
  } else {
    return -1;
  }
}

module.exports = strStr;