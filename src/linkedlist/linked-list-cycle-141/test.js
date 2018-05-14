const resolve = require('./index');
const assert = require('assert');
const {
  linkedListFromArray,
  cycleLinkedListFromArray
} = require('../../../tools/linkedList');
describe('#linked-list-cycle', () => {
  it('give a cycle linkedlist return true', () => {
    assert.equal(true, resolve(cycleLinkedListFromArray([1, 2, 3])));
  });
  it('give a no cycle linkedlist return false', () => {
    assert.equal(false, resolve(linkedListFromArray([1, 2, 3])));
  });
  it('give an empty linkedlist return false', () => {
    assert.equal(false, resolve(linkedListFromArray([])));
  });
});