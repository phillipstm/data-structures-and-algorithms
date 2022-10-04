'use strict';

const { empty } = require("cheerio/lib/api/manipulation");

class PseudoQueue {
  constructor() {
    this.enq = new Stack();
    this.dq = new Stack();
  }
  enq(value) {
    this.enq.push(value);
  }
  dq() {
    if (this.dq.peek() === null) {
      while (this.enq.peek() !== null) {
        const popped = this.enq.pop();
        this.dq.push(popped);
      }
      if (this.db.peek() === null) {
        return this.db.pop();
      } else error('The
      dequeue is empty, ');
    },
  }
}

const pseudo = new PseudoQueue();

pseudo.enq(1);
pseudo.enq(2);
pseudo.enq(3);
pseudo.enq(4);
pseudo.enq(5);
console.log(pseudo.dq());
console.log(pseudo.dq());



