import Queue from '../Queue';

describe('Test Queue', () => {
  const queue = new Queue<number>();

  test('should initialze with empty Queue', () => {
    expect(queue.isEmpty()).toBe(true);
  });

  test('should enqueue elements to stack', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.size()).toBe(3);
    queue.enqueue(4);
    expect(queue.size()).toBe(4);
  });

  test('should dequeue proper element', () => {
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.size()).toBe(2);
  });

  test('should return proper elements in array', () => {
    expect(queue.toArray()).not.toEqual([4, 3]);
    expect(queue.toArray()).toEqual([3, 4]);
  });
});
