'use strict';

const { LinkedList } = require('..linked-list');
const { get } = require('cheerio/lib/api/traversing');
const { HashTable } = require('../hashtable/index');

let sentence = 'Once upon a time, there was a brave princess who';

function repeatedWord(str) {
  let splitStr = str.split('');
  let list = [];

  for (let i =0; i < splitStr.length; i++){
    for (let j = i + 1; j < splitStr.length; j++) {
      if (splitStr[i].match(splitStr[j])) {
        list.push(splitStr[i]);
      }
    }
  }
  return list[0];
}

console.log(repeatedWord(sentence));

