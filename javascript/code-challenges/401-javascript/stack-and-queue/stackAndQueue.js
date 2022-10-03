'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let newNode = newNode(value);
    newNode.next = this.top;
    this.top = newNode;
  }
  pop() {
    if (this.value.length === 0)
      return -1;
    return this.items.pop();
  }
  peek() {
    return this.value[this.top - 1];
  }
  isEmpty(){
    return this.top === null;
  }

}

