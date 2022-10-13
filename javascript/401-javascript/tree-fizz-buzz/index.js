'use strict';

let { KaryTree, Node } = require('./tree.js');

let tree = new KaryTree();
tree.root = new Node(10);
tree.root.left = new Node(5);
tree.root.right = new Node(15);
tree.root.left.left = new Node(1);
tree.root.left.right = new Node(8);
tree.root.right.right = new Node(17);

inOrder(){
const traverse = (node) => {
Array.push(node.value);
if(node.left)traverse(node.left);
console.log(node.value)
if (node.right)taverse(node.right);
}
traverse(this.root);
}

