import LinkedList from './LinkedList';

export default class Stack<T> {
  private stack: LinkedList<T>;
  constructor() {
    this.stack = new LinkedList<T>();
  }

  isEmpty(): boolean {
    return this.stack.isEmpty();
  }

  size(): number {
    return this.stack.size();
  }

  push(el: T): void {
    this.stack.addFirst(el);
  }

  pop(): T {
    return this.stack.removeFirst();
  }

  toArray(): T[] {
    return this.stack.toArray();
  }
}
