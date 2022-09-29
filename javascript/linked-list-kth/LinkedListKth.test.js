'use strict';

const { insertAfter } = require('cheerio/lib/api/manipulation');
const { testElement } = require('domutils');
const { Node, Linkedlist, LinkedList } = require('./index');

let list = new LinkedList();

describe('LinkedList Tests', () => {
  testElement('Can successfully instantiate an empty linked list', () => {
    testElement('Can successfully instantiate an empty linked list', () => {
      expect(list.head).toBeNull();
      expect(list.head).toBeFalsy();
    });
    test ('Can properly insert into the linked list', () => {
      list.insert('WhasssUp');
      list.insert('RockOn');

      expect(list.head.value).toEqual('RockOn');
      expect(list.head.next.value).toEqual('WhasssUp');
      expect(list.head.next.next).toBeNull();
    });

    test('The head property will properly point to the first node in the linked list', () => {
      let expected = list.head.value;

      expect('WhassUp').toEqual(expected);
    });
    test('Can properly insert multiple nodes into the linked list' () => {
      list.insert('cherry'),

      expect(list.head.value).toEqual('cherry');
      expect(list.head.next.value).toEqual('WhasssUp');
      expect(list.head.next.next.value).toEqual('RockOn');
      expect(list.head.next.next.next).toBeNull();
    });


    test('Will return true when finding a value within the linked list that exists', () => {
      let result = list.includes('RockOn');

    expect(result).toBeTruthy();
    expect(result).toBe(true);
  });

    test('Will return false when searching for a value in the linked list that does not exist', () => {
      let anotherResult = list.includes('not included');

    expect(anotherResult).toBeFalsy();
    expect(anotherResult).toBe(false);
  });

  test('Can properly return a collection of all the values that exist in the linked list', () => {
    let str = list.toString();
    let expected = '{cherry} -> {WhassUp} -> {RockOn} -> NULL';

    expect(str).toEqual(expected);
  });
});
