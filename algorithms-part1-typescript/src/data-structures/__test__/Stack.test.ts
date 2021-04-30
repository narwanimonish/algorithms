import Stack from '../Stack';

describe('Test Stack', () => {
  const stack = new Stack<number>();

  test('should initialze with empty Stack', () => {
    expect(stack.isEmpty()).toBe(true);
  });

  test('should push elements to stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.size()).toBe(3);
    stack.push(4);
    expect(stack.size()).toBe(4);
  });

  test('should pop proper element', () => {
    expect(stack.pop()).toBe(4);
    expect(stack.pop()).toBe(3);
    expect(stack.size()).toBe(2);
  });

  test('should return proper elements in array', () => {
    expect(stack.toArray()).not.toEqual([1, 2]);
    expect(stack.toArray()).toEqual([2, 1]);
  });
});
