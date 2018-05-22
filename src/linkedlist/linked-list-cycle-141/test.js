const resolve = require('./index');
const assert = require('assert');
const {
  LinkedList
} = require('../../../DataStructure/LinkedList');
describe('#linked-list-cycle', () => {
  it('give a cycle linkedlist return true', () => {
    assert.equal(true,
      resolve(
        new LinkedList(1, 2, 3, 4).cycle(3, 1).getHead()
      )
    );
  });
  it('give a no cycle linkedlist return false', () => {
    assert.equal(false,
      resolve(
        new LinkedList(1, 2, 3, 4).getHead()
      )
    );
  });
  it('give an empty linkedlist return false', () => {
    assert.equal(false,
      resolve(
        new LinkedList().getHead()
      )
    );
  });
});