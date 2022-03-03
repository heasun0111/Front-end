//노드
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
//링크드 리스트
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }
  insertLast(data) {
    let node = new Node(data);
    let current;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      //head에서부터 끝까지 반복
      while (current.next) {
        current = current.next;
      }
      //마지막에 삽입
      current.next = node;
    }
    this.size++;
  }
  insertAt(data, index) {
    if (index === 0) {
      this.head = new Node(data, this.head);
      this.size++;
      return;
    }

    const node = new Node(data);
    let current, previous;
    current = this.head;

    //index까지 이동
    let count = 0;
    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
    return null;
  }
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }
    let current = this.head;
    let previous;
    let count = 0;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
  }
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

//확인
let myLinkedList = new LinkedList();
myLinkedList.insertFirst(2);
myLinkedList.insertFirst(4);
myLinkedList.insertLast(6);
myLinkedList.insertAt(8, 2);
myLinkedList.insertAt(10, 3);
myLinkedList.insertAt(12, 2);

myLinkedList.printListData();

myLinkedList.removeAt(2);
myLinkedList.getAt(2);

//console.log(myLinkedList);

//생성자 인자로 받는거
/*
결과값
4
2
12
8
10
6
8
LinkedList {
  head: Node { data: 4, next: Node { data: 2, next: [Node] } },
  size: 5
}
*/
