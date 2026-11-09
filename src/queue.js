const { NotImplementedError } = require('../lib');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

constructor() {
    this._head = null;
  }

  getUnderlyingList() {
    if (!this._head) return null;
    
    // Build a plain object representation matching the ListNode structure
    let current = this._head;
    const root = { value: current.value, next: null };
    let tail = root;
    
    current = current.next;
    while (current) {
      tail.next = { value: current.value, next: null };
      tail = tail.next;
      current = current.next;
    }
    
    return root;
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    if (!this._head) {
      this._head = newNode;
    } else {
      let current = this._head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  dequeue() {
    if (!this._head) {
      return undefined;
    }
    const value = this._head.value;
    this._head = this._head.next;
    return value;
  }
}

module.exports = {
  Queue
};
