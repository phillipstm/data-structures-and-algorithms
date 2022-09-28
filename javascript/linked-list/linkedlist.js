'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    //to transverse a link list, start with current with while loop to add new node to the end
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  transverse() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

module.exports = LinkedList;
