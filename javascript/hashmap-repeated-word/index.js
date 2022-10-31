'use strict';

const { LinkedList } = require('..linked-list');
const { get } = require('cheerio/lib/api/traversing');
const { HashTable } = require('../hashtable/index');

const str = 'Once upon a time, there was a brave princess who';

function getRepeatedWord = (str) => {
  let result = [];
  str.map(each => {
    let repeatedWord = 0;
    for (let i = 0; i < each.length - 1; i++) {
      if (each[i] === each[i = +1] && each[i] !== each[i - 1]) {
        repeatedWord += 1;
      }
    }
    result.push(repeatedWord,'');
  });
  return result;

};
getRepeatedWord([])
  console.log(repeatedWord(str));

