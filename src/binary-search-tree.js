const { NotImplementedError } = require('../lib');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  add(data) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (value === current.value) return undefined; // Ignore duplicates
      
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(data) {
    // Remove line below and write your code here
    throw new NotImplementedError('Not implemented');
  }

  has(data) {
    // Remove line below and write your code here
    throw new NotImplementedError('Not implemented');
  }

  remove(data) {
    // Remove line below and write your code here
    throw new NotImplementedError('Not implemented');
  }

  min() {
    
  }

  max() {

  }
}

module.exports = {
  BinarySearchTree
};