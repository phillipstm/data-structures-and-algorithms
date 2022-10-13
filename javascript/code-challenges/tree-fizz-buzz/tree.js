'use strict';

class Node{
  constructor(value){
    this.value =value;
    this.left = null;
    this.right = null;
  }
}

class KaryTree {
  constructor(value,k) {
    this.value = value;
    this.k = k;
    this.children = [].newArray(k).fill(null);
  }
}

module.exports= {KaryTree, Node};
