import Bag from '../Bag';

describe('Test Bag', () => {
  const bag = new Bag<number>();

  test('should initialze with empty Stack', () => {
    expect(bag.isEmpty()).toBe(true);
  });

  test('should push elements to stack', () => {
    bag.add(1);
    bag.add(2);
    bag.add(3);
    expect(bag.size()).toBe(3);
    bag.add(4);
    expect(bag.size()).toBe(4);
  });

  test('should return proper elements in array', () => {
    expect(bag.toArray()).not.toEqual([1, 2, 3, 4]);
    expect(bag.toArray()).toEqual([4, 3, 2, 1]);
  });
});
