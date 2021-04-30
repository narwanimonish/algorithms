import LinkedList from './LinkedList';

export default class Bag<T> {
  private bag: LinkedList<T>;
  constructor() {
    this.bag = new LinkedList<T>();
  }

  isEmpty(): boolean {
    return this.bag.isEmpty();
  }

  size(): number {
    return this.bag.size();
  }

  add(el: T): void {
    this.bag.addFirst(el);
  }

  toArray(): T[] {
    return this.bag.toArray();
  }
}
