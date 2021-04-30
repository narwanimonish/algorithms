class Node<T> {
  value: T;
  next: Node<T>;

  constructor(value: T, next) {
    this.value = value;
    this.next = next;
  }
}

export default class LinkedList<T> {
  private head: null | Node<T> = null;
  private count: number = 0;

  isEmpty(): boolean {
    return this.head === null;
  }

  size(): number {
    return this.count;
  }

  add(index: number, el: T): void {
    if (index > this.size() + 1) {
      throw new Error('Index exception');
    }

    if (this.head === null) {
      this.head = new Node(el, null);
    } else if (index === 1) {
      const newNode = new Node(el, this.head);
      this.head = newNode;
    } else {
      let trav = this.head,
        currIndex = 1;
      while (currIndex < index - 1) {
        trav = trav.next;
        currIndex++;
      }
      const newNode = new Node(el, trav.next);
      trav.next = newNode;
    }
    this.count++;
  }

  addFirst(el: T): void {
    this.add(1, el);
  }

  addLast(el: T): void {
    this.add(this.size() + 1, el);
  }

  remove(index: number): T {
    if (index > this.size()) {
      throw new Error('IndexOutOfBound Exception');
    }
    let val: T;
    if (index === 1) {
      val = this.head.value;
      this.head = this.head.next;
    } else {
      let currIndex = 1;
      let trav = this.head;
      while (currIndex < index - 1) {
        trav = trav.next;
      }
      val = trav.next.value;
      trav.next = trav.next.next;
    }
    this.count--;
    return val;
  }

  removeFirst(): T {
    return this.remove(1);
  }

  removeLast(): T {
    return this.remove(this.size());
  }

  toArray(): Array<T> {
    const result: T[] = [];
    let trav = this.head;
    while (trav) {
      result.push(trav.value);
      trav = trav.next;
    }
    return result;
  }
}
