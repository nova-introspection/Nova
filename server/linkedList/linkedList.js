function LinkedList() {
  this.head = null;
  this.tail = null;
  this.size = 0;
}

function Node(val) {
  this.value = val;
  this.next = null;
}

LinkedList.prototype.enqueue = function (val) {
  const node = new Node(val);
  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = this.tail.next;
  } this.size++;
};

LinkedList.prototype.dequeue = function () {
  if (!this.head) return null;
  const val = this.head.value;
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else { this.head = this.head.next; }
  this.size--;
  return val;
};

LinkedList.prototype.isEmpty = function () { return this.size === 0; };
LinkedList.prototype.printList = function () {
  let curr = this.head;
  const {tail} = this;
  while (curr) {
    console.log(curr.value, 'tail:', tail.value, curr === tail);
    curr = curr.next;
  } console.log('size:', this.size);
};

module.exports = LinkedList;
