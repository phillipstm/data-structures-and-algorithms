'use strict';

const { LinkedList } = require('..linked-list');
const { get } = require('cheerio/lib/api/traversing');

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    let characters = key.split('');
    let asciiSum = characters.reduce((sum, character) => {
      return sum + character.charCodeAt(0);
    }, 0)
    let table = new HashTable(1024);
    let initialHash = asciiSum * 599;
    return initialHash % this.size;
  };

  set(key, value) {
    let position = this.hash(key);
    let data = { [key]: value }

    if (this.bucket[position]) {
      let bucket = this.buckets[position];
      bucket.add(data);
    } else {
      let bucket = new LinkedList();
      bucket.add(data);
      this.bucket[position] = buckets;
      table.set('BiteMe', { name: 'BiteMe', age: 50 });
    }

    get(key, value) {
      let position = this.hash(key);
      if (this.bucket[position][key]) {
        let bucket = this.buckets[position];
        let value = bucket.head.value[key];
        return value;
      }
    }

  }
}
console.log(table);
console.log(table.hash('BiteMe'));

module.exports = HashTable;
