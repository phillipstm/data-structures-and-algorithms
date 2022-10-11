'use strict';


class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinaryTree {
  constructor() {
    this.root = null;
  }

  largestElement() {
    this.errorIfEmpty();
    let largestElement = null;
    let traverse = (node) => {
      if (largestElement === null || largestElement < node.value) {
        largestElement = node.value;
      }
      if (node.left) transverse(node.left);
      if (node.right) travserse(node.right);
    };
    traverse(this.root);
    return largestElement;
  }
}
let tree = new BirnaryTree();
tree.root = new Node(2);
tree.root.left = new Node(7);
tree.root.right = new Node(5);
tree.root.left.left = new Node(2);
tree.root.left.right = new Node(6);
tree.root.left.right.left = new Node(5);
tree.root.left.right.right = new Node(11);
tree.root.right.right = new Node(9);
tree.root.right.right.left = new Node(4);

console.log('Max value in Binary Tree is', largestElement(root));
