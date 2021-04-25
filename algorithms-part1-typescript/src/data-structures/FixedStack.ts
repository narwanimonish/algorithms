export default class FixedStack<T> {
  private elements: T[] = [];

  constructor(private maxSize: number) {}

  isEmpty(): boolean {
    return this.elements.length === 0;
  }

  isFull(): boolean {
    return this.elements.length === this.size();
  }

  size(): number {
    return this.maxSize;
  }

  count(): number {
    return this.elements.length;
  }

  push(element: T) {
    if (this.isFull()) {
      throw new Error('Stack Overflow...!');
    }
    this.elements.push(element);
  }

  pop(): T {
    if (this.isEmpty()) {
      throw new Error('Stack is empty...!');
    }
    return this.elements.pop();
  }
}
