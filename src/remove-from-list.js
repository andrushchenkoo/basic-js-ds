const { NotImplementedError } = require("../lib/errors");
const { ListNode } = require("../extensions/list-node.js");

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let head = l;

  while (head.value === k) {
    head = head.next;
  }

  let currentElement = head;
  let nextElement = head.next;

  while (nextElement) {
    if (nextElement.value === k) {
      currentElement.next = nextElement.next;
      nextElement = nextElement.next;
    } else {
      currentElement = currentElement.next;
      nextElement = nextElement.next;
    }
  }
  return head;
}

module.exports = {
  removeKFromList,
};
