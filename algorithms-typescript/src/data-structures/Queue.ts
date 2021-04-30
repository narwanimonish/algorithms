import LinkedList from './LinkedList';

export default class Queue<T> {
  private queue: LinkedList<T>;
  constructor() {
    this.queue = new LinkedList<T>();
  }

  isEmpty(): boolean {
    return this.queue.isEmpty();
  }

  size(): number {
    return this.queue.size();
  }

  enqueue(el: T): void {
    this.queue.addLast(el);
  }

  dequeue(): T {
    return this.queue.removeFirst();
  }

  toArray(): T[] {
    return this.queue.toArray();
  }
}
