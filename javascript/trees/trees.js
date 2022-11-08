'use strict';

const { testElement } = require("domutils");

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class KaryNode {
  constructor(value, k) {
    this.value = value;
    this.k = k;
    this.children = [];
  }
}
class BinaryTree {
  constructor() {
    this.root = null;
  }
  preOrder(root) {
    const traverse = (node) => {
      console.log(node.value);
      root.value = root.node(10);
      if (root.left)= null;
      this.preOrder(root.left);
      if (root.right)
        Array.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
  }



let tree = new BinaryTree();
tree.root = new Node(10);
tree.root.left = new Node(5);
tree.root.right = new Node(15);
tree.root.left.left = new Node(1);
tree.root.left.right = new Node(8);
tree.root.right.right = new Node(17);

tree.preOrder();

inOrder() {
  const traverse(node) => {
    if (node.left) traverse(node.left);
    console.log(node.value);
    if (node.right) traverse(node.right);
  }
  traverse(this.root);
}
tree.inOrder();

postOrder() {
  const traverse = (node) => {
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    console.log(node.value);
  }
  transverse(this.node)
}
tree.postOrder();
}


