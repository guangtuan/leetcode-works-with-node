function ListNode(val) {
  this.val = val;
  this.next = null;
}

const last = arr => arr[arr.length - 1];
const head = arr => arr[0];

const linkedListFromArray = array => head(array.reduce((acc, curr, currIdx, arr) => {
  let node = new ListNode(curr);
  if (last(acc)) {
    last(acc).next = node;
  }
  acc.push(node);
  return acc;
}, []));

const dump = listNode => {
  let ret = []
  let ln = listNode;
  while (ln) {
    ret.push(ln.val);
    ln = ln.next;
  }
  console.log(ret);
}

const dumpPre = listNode => {
  let ret = []
  let ln = listNode;
  while (ln) {
    ret.push(ln.val);
    ln = ln.pre;
  }
  console.log(ret);
}

const dumpWithMsg = (msg, listNode) => {
  console.log(`=================${msg}=================`);
  console.log('');
  dump(listNode);
  console.log('');
  console.log('');
  console.log('');
  console.log('');
  console.log('');
}

const dumpPreWithMsg = (msg, listNode) => {
  console.log(`=================${msg}=================`);
  console.log('');
  dumpPre(listNode);
  console.log('');
  console.log('');
  console.log('');
  console.log('');
  console.log('');
}

const cycleLinkedListFromArray = array => {
  let ll = linkedListFromArray(array);
  let tmp = ll;
  while (tmp.next) {
    tmp = tmp.next;
  }
  tmp.next = ll;
  return ll;
}

module.exports = {
  dump: dump,
  dumpPre: dumpPre,
  dumpWithMsg: dumpWithMsg,
  dumpPreWithMsg: dumpPreWithMsg,
  ListNode: ListNode,
  linkedListFromArray: linkedListFromArray,
  cycleLinkedListFromArray: cycleLinkedListFromArray
}