const { NotImplementedError } = require('../lib');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  const aNode = new ListNode(0);
  aNode.next = l;
  let current = aNode;

  while (current.next !== null) {
    if (current.next.value === k) {
      // Skip the node with value k
      current.next = current.next.next;
    } else {
      // Move to the next node
      current = current.next;
    }
  }

  return aNode.next;
}

module.exports = {
  removeKFromList
};
