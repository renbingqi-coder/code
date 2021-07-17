"use strict";

function ListNode(x) {
  this.val = x;
  this.next = null;
}

function deleteDuplication(pHead) {
  var map = {};
  var cur = pHead; //遍历所有链表

  while (cur) {
    if (map[cur.val]) {
      map[cur.val]++;
    } else {
      map[cur.val] = 1;
    }

    cur = cur.next;
  } //去重


  var arr = Object.keys(map).filter(function (el) {
    return map[el] === 1;
  });
  var list = arr.map(function (el) {
    return new ListNode(el);
  }); //重建链表

  var result = list[0];
  var head = result;

  for (var i = 1; i < list.length; i++) {
    head.next = list[i];
    head = head.next;
  }

  return result;
}

var node1 = new ListNode(1);
var node2 = new ListNode(2);
var node3 = new ListNode(3);
var node4 = new ListNode(3);
var node5 = new ListNode(4);
var node6 = new ListNode(4);
var node7 = new ListNode(5);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
console.log([node1, node2, node3].shift());
console.log(deleteDuplication(node1));